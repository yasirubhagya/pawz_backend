exports.validateBirthday = (date)=>{
    today = new Date();
    if(date <= today){
        return true;
    }else{
        return false;
    }
}