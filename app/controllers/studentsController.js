const Student = require('../models/student')

module.exports.list = (req, res)=> {
    Student.find()
        .then((student)=> {
            res.json(student)
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.show = (req, res)=> {
    const id = req.params.id
    Student.findById(id)
        .then((student)=> {
            res.json(student)
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const student = new Student(data)
    student.save()
        .then((student)=> {
            res.json(student)
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body= req.body
    Student.findByIdAndUpdate(id, body, {new: true, runValidators:true})
        .then((student)=> {
            res.json(student)
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Student.findByIdAndDelete(id)
        .then((student)=> {
            if(student){
                res.json(student)
            } else {
                res.json({})
            }
            
        })
        .catch((err)=>{
            res.json(err)
        })
}