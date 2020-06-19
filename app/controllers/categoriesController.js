const Category = require('../models/category')

module.exports.list = (req, res) => {
    Category.find()
        .then((categories)=> {
            res.json(categories)
        })
        .catch((err)=> {
            res.json(err)
        })
} 

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category)=> {
            res.json(category)
        })
        .catch((err)=> {
            res.json(err)
        })
}

// module.exports.show = (req, res)=> {
//     const id = req.params.id
//     Category.findById(id)
//         .then((category)=> {
//             if(category) {
//                 res.json(category)
//             } else {
//                 res.json ({})
//             }
//         })
// }

module.exports.show = (req, res) => {
    const id = req.params.id
    Promise.all([Category.findById(id), Note.find({category:id})])
        .then((values)=> {
            const [category, notes] = values
            res.json({
                category, 
                notes
            })
        })
        .catch((err)=> {
            res.json(err)
        })
}