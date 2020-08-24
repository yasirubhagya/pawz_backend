//const sqldb = require('../../sqldbconn');
const medicationModel = require('../modeles/medicationModel');
//const sqlcmd = require('../../sqlcmd');

exports.getmedicationsBypetId =(req, res, next) => {
    medicationModel.find({pet:req.params.PID}).exec()
   .then(result=>{
      return res.status(200).json(result);
   })
   .catch(error=>{
      return res.status(503).json({'msg':'err','error':error});
   })
}

exports.addMedication =(req, res, next) => {
  petdoc = new medicationModel({
     name:req.body.name,
     pet:req.body.pet,
     dose:req.body.dose,
     type:req.body.type,
     givenDate:new Date(req.body.givenDate),
     nextDate:new Date(req.body.nextDate)
  }).save()
  .then(result =>{
     return res.status(200).json({'msg':'ok','result':result});
  })
  .catch(error=>{
     return res.status(503).json({'msg':'err','error':error});
  })
  
}

exports.removemedication = (req, res, next) => {
   medicationModel.findByIdAndRemove(req.params.MID).exec()
   .then(result =>{
      return res.status(200).json({'msg':'ok','result':result});
   })
   .catch(error=>{
      return res.status(503).json({'msg':'err','error':error});
   })
}

