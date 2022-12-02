const Router = require('express')
const router = new Router()
const playerController =require('../controllers/playerContoller')

router.post('/',)
router.get('/ttl',playerController.getAll)

module.exports = router