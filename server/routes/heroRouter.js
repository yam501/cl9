const Router = require('express')
const router = new Router()
const heroController = require('../controllers/heroController')

router.post('/',heroController.create)
router.get('/:Name',heroController.getOne)

module.exports = router