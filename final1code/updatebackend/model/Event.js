const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    deptname:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },  

    due:{
        type:Date,
        required:true
    },

    location:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Event",eventSchema)