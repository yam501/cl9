const Router = require('express')
const router = new Router()
const mapRouter = require('./mapRouter')
const mapstatRouter = require('./mapstatRouter')
const playerRouter = require('./playerRouter')
const heroRouter = require('./heroRouter')
const gameRouter = require('./gameRouter')

router.use("/map", mapRouter)
router.use("/mapstat", mapstatRouter)
router.use("/player", playerRouter)
router.use("/game", gameRouter)
router.use("/hero", heroRouter)

module.exports = router