const Router = require('express')
const router = new Router()
const mapstatController = require('../controllers/mapstatController')

router.post('/',mapstatController.create)
router.get('/:IdMap&:IdPlayer',mapstatController.getOne)

module.exports = router