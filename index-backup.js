const express= require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3040

app.use(express.json())

//db configuration
mongoose.connect('mongodb://localhost:27017/nov-notes-app')
    .then(()=> {
        console.log('connected to db')
    })
    .catch((err)=> {

    })

//schema
const Schema = mongoose.Schema
const noteSchema=new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
})

//model
const Note = mongoose.model('Note', noteSchema)

//setup apis
app.get('/notes', (req, res)=> {
    Note.find()
        .then((notes)=> {
            res.json(notes)
        })
        .catch((err)=> {
            res.json(err)
        })
})

app.post('/notes', (req, res)=> {
    const data = req.body
    const note = new Note(data)
    note.save()
        .then((note)=> {
            res.json(note)
        })
        .catch((err)=> {
            res.json(err)
        })
})

app.get('/notes/:id', (req, res)=> {
    const id = req.params.id
    Note.findById(id)
        .then((note)=> {
            res.json(note)
        })
        .catch((err)=> {
            res.json(err)
        })
})

app.put('/notes/:id', (req,res)=> {
    const id = req.params.id
    const body= req.body
    Note.findByIdAndUpdate(id, body, {new: true, runValidators:true})
        .then((note)=> {
            res.json(note)
        })
        .catch((err)=> {
            res.json(err)
        })
})

app.delete('/notes/:id', (req, res)=> {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note)=> {
            if(note){
                res.json(note)
            } else {
                res.json({})
            }
            
        })
        .catch((err)=>{
            res.json(err)
        })
})


app.listen(port, ()=> {
    console.log('listening on port', port)
})





/* 

const express= require('express')
const setupDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3040


app.use(express.json())
app.use('/', router)

//db configuretion
setupDB()

app.listen(port, ()=> {
    console.log('listening on port', port)
})

*/





/*

const mongoose = require('mongoose')


const Schema = mongoose.Schema
const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

const Category = mongoose.model('Category' ,categorySchema)

module.exports = Category 
*/