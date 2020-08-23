//const sqldb = require('../../sqldbconn');
//const sqlcmd = require('../../sqlcmd');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userModel = require('../modeles/userModel');

exports.getUserByUID = (req, res, next) => {
   sqldb.execute(sqlcmd.selectUser,[req.params.UID],(err, results, fields)=>{
        if(err){
           return res.status(500).json({ msg: err });
        }
        res.status(200).json(results);
   });
}

exports.signin = (req, res, next) => {
   userModel.find({ email: req.body.email })
       .exec()
       .then(user => {
           if (user.length < 1) {
               return res.status(401).json({
                   message: "Auth failed"
               });
           } else {
               bcrypt.compare(req.body.password, user[0].passwordHash, (err, result) => {
                   if (err) {
                       return res.status(401).json({
                           message: "Auth failed"
                       });
                   }
                   if (result) {
                       const token = jwt.sign({
                           userid: user[0]._id,
                           firstName: user[0].firstName,
                           lastName: user[0].lastName,
                           email: user[0].email
                       },
                           process.env.JWT_KEY || 'ABCD123',
                           {
                               expiresIn: "1h",
                           });
                       return res.status(200).json({
                           message: "Auth succes",
                           token: token
                       });
                   }
                   return res.status(401).json({
                       message: "Auth failed"
                   });

               });
           }
       })
       .catch(err => {
           return res.status(500).json({
               msg: err
           });
       });

}

exports.signup = (req, res) => {
   userModel.find({ email: req.body.email })
       .exec()
       .then(result => {
           if (result.length >= 1) {
               return res.status(409).json({
                   msg: "Email exists"
               });
           }
           bcrypt.hash(req.body.password, 10, (err, hash) => {
               if (err) {
                   return res.status(500).json({
                       msg: err
                   });
               }
               const user = new userModel({
                   _id: new mongoose.Types.ObjectId(),
                   firstName: req.body.firstName,
                   lastName: req.body.lastName,
                   email: req.body.email,
                   passwordHash:hash
               });

               user.save()
                   .then(result => {
                       res.status(201).json({
                           msg: 'success'
                       });
                   })
                   .catch(err => {
                       return res.status(500).json({
                           error: err
                       });
                   });
           });
       })
       .catch(err => {
           return res.status(500).json({
               error: err
           });
       });
}

