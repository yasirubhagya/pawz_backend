const sqldb = require('../../sqldbconn');
const petModel = require('../modeles/petModel');
//const sqlcmd = require('../../sqlcmd');

exports.getAllpets =(req, res, next) => {
   petModel.find().exec()
   .then(result=>{
      return res.status(200).json(result);
   })
   .catch(error=>{
      return res.status(503).json({'msg':'err','error':error});
   })
}

exports.getPetById=(req, res, next) => {
   petModel.findById(req.params.PID).exec()
   .then(result=>{
      return res.status(200).json(result);
   })
   .catch(error=>{
      return res.status(503).json({'msg':'err','error':error});
   })
}

exports.addPet =(req, res, next) => {
  petdoc = new petModel({
     name:req.body.name,
     breed:req.body.breed,
     gender:req.body.gender,
     dateofbirth:new Date(req.body.dateofbirth),
     isneutralized:req.body.isneutralized
  }).save()
  .then(result =>{
     return res.status(200).json({'msg':'ok','result':result});
  })
  .catch(error=>{
     return res.status(503).json({'msg':'err','error':error});
  })
  
}

exports.removePet = (req, res, next) => {
   petModel.findByIdAndRemove(req.params.PID).exec()
   .then(result =>{
      return res.status(200).json({'msg':'ok','result':result});
   })
   .catch(error=>{
      return res.status(503).json({'msg':'err','error':error});
   })
}

exports.getUserByUID = (req, res, next) => {
   sqldb.execute(sqlcmd.selectUser,[req.params.UID],(err, results, fields)=>{
        if(err){
           return res.status(500).json({ msg: err });
        }
        res.status(200).json(results);
   });
}

exports.addNewUser = (req, res, next) => {
    return res.status(200).json({'msg':'ok'});
}