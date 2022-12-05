const Router = require('express')
const router = new Router()
const heroController = require('../controllers/heroController')

router.post('/',heroController.create)
router.get('/',heroController.getOne)

module.exports = router