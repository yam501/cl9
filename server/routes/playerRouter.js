const Router = require('express')
const router = new Router()
const playerController = require('../controllers/playerContoller')

router.post('/', playerController.create)
router.get('/:Nickname', playerController.getOne)
router.get('/', playerController.getAll)

module.exports = router