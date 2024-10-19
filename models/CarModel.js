const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    model : {
        type: String,
        required : true
    },
    year : {
        type : Number,
        required : true
    },
    color : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model("cars", CarSchema)