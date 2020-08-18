exports.selectUser = 'SELECT * FROM `user` WHERE `UID` = ?';
exports.selectChronicCondition = 'SELECT * FROM `chroniccondition` WHERE `CID` = ?';
exports.selectSpecialization='SELECT * FROM `specialization` WHERE `SID` = ?';

exports.insertUser = 'INSERT INTO `user` (`UID`,`userName`,`dateOfBirth`,`gender`,`dpLink`,`isDoctor`,`registeredDate`) VALUES(?,?,?,?,?,?,?)';
exports.insertGoogleAccount ='INSERT INTO `googleaccount` (`UID`,`email`,`googleId`) VALUES(?,?,?)';
exports.insertQuestions = 'INSERT INTO `questions` (`QID`,`askedBy`,`isAnonymas`,`date`,`chronicCondition`,`visibility`,`status`) VALUES(?,?,?,?,?,?,?)';