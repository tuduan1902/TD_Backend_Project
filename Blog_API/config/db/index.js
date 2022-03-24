const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Blog',{
            useNewUrlParser:true,
            useUnifiedTopology: true,
        });
        console.log('Connect sucessfully');
    } catch(error){
        console.log('Connect Failure!');
    }
}

module.exports = {connect};

