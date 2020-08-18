//const sqldb = require('../../sqldbconn');
//const sqlcmd = require('../../sqlcmd');
const userModel = require('../modeles/userModel');

exports.getUserByUID = (req, res, next) => {
   sqldb.execute(sqlcmd.selectUser,[req.params.UID],(err, results, fields)=>{
        if(err){
           return res.status(500).json({ msg: err });
        }
        res.status(200).json(results);
   });
}

exports.signup = (req, res, next) => {
    userModel.find({email:req.body.email}).exec()
    .then(results=>{
      if(results && results.length >0){
         res.status(200).json({msg:'email is already taken'});
      }
    })
    .catch(error =>{

    });
    
}