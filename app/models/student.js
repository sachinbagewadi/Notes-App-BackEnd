const mongoose = require('mongoose')

//schema 
const Schema = mongoose.Schema
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student