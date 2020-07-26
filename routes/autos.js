const express = require('express')
const router = express.Router()

const autosController = require ('../controllers/autosController')

router.get('/',autosController.index)
router.get('/:id',autosController.marca)
router.get('/:id/:dato?',autosController.dato)

module.exports = router