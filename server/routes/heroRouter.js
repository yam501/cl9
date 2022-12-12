const Router = require('express')
const router = new Router()
const heroController = require('../controllers/heroController')

router.post('/',heroController.create)
router.get('/:Name',heroController.getOne)
router.get('/',heroController.getAll)

module.exports = router