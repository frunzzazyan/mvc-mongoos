const mongoose = require("mongoose")

const massageSchema = new mongoose.Schema({
    text : {
        type: String,
        required : true
    },
    data : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("massage", massageSchema)