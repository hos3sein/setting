const mongoose = require('mongoose')

const schema = mongoose.Schema;

const loggerModel = new schema({
    admin : {username : {type : String} , adminRole : {type : Object} , group : {type:Array} ,phone : {type : String} , firstName:{type : String} , lastName : {type : String}},

    section : {type : String},

    part : {type : String},

    success : {type : Boolean},

    description : {type : String},

},{timestamps : true})


const logger = mongoose.model("logger" , loggerModel)

module.exports = logger


