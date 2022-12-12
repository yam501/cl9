const Router = require('express')
const router = new Router()
const mapController = require('../controllers/mapController')

router.post('/',mapController.create)
router.get('/:Id',mapController.getOne)
router.get('/:gameId',mapController.getAll)

module.exports = router