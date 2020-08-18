const sqldb = require('../../sqldbconn');
//const sqlcmd = require('../../sqlcmd');

exports.getUserByUID = (req, res, next) => {
   sqldb.execute(sqlcmd.selectUser,[req.params.UID],(err, results, fields)=>{
        if(err){
           return res.status(500).json({ msg: err });
        }
        res.status(200).json(results);
   });
}

exports.addNewUser = (req, res, next) => {
    
}