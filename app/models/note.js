const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema
const noteSchema=new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        //required: true
        
    }
})

//model
const Note = mongoose.model('Note', noteSchema)

module.exports = Note

