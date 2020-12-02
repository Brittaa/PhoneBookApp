const date= require('../generateDate.js');
const mongoose = require('mongoose');
const Phone = mongoose.model('Phone');


exports.getPhoneItems = (req, res)=>{
    let day= date.getDate();
    Phone.find((error, phoneList) =>{
       if(!error){
        res.render("phone.ejs", {date: day, phoneItems: phoneList});
       } else {
           console.log("Failed to retireve data: ", error);
       }
    });

};

exports.postPhoneItems = (req, res)=>{
    const item = req.body.name;
    const phone_number = req.body.phone;
    let newPhone = new Phone();
    newPhone.name = item;
    newPhone.phone = phone_number;

    newPhone.save((error, response)=> {
        if(!error){
            res.redirect('/phone');
        } else {
            console.log(error);
        }
    });
};


exports.deletePhone = (req,res)=>{
    console.log("Call from to delete",req.body.checkbox);
    const checkedItemId = req.body.checkbox;

    Phone.findByIdAndRemove(checkedItemId, function(error) {
        if(!error){
            console.log("Successfully deleted the item.");
            res.redirect("/phone");
        } else {
            console.log(error);
        }
    });

}