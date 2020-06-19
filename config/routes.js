const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')
const studentsController = require('../app/controllers/studentsController')


router.get('/notes', notesController.list)
router.get('/notes/:id', notesController.show)
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.destroy)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.get('/categories/:id', categoriesController.show)


router.get('/students', studentsController.list)
router.get('/students/:id', studentsController.show)
router.post('/students', studentsController.create)
router.put('/students/:id', studentsController.update)
router.delete('/students/:id', studentsController.destroy)

module.exports = router
