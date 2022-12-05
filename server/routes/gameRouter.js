const Router = require('express')
const router = new Router()
const gameController = require('../controllers/gameController')

router.post('/',gameController.create)
router.get('/:Id',gameController.getOne)

module.exports = router