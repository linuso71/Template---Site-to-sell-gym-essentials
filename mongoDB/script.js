const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mongosample", ()=>{console.log('conected')});

const userSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    Message: String,
});

const userModel = mongoose.model('users',userSchema);


async function findUser(){
    var user = await userModel.findOne({
        username: ;
        phone: ;
        email: ;
        message: ;

    })
}