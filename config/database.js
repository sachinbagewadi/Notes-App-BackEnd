const mongoose = require('mongoose')

const setupDB = () => {
    //db configuration
    mongoose.connect('mongodb://localhost:27017/nov-notes-app')
    .then(()=> {
        console.log('connected to db')
    })
    .catch((err)=> {
        console.log(err)
    })

}

module.exports = setupDB