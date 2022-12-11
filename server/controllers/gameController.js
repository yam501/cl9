const ApiError = require('../error/ApiError');
const { Game } = require('../models/models')

class GameController {
    async create(req, res, next) {
        try {
            const { Enemy, ResultGame } = req.body
            const game = await Game.create({ Enemy, ResultGame })
            return res.json(game)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req, res, next) {
        const { Id } = req.params
        const game = await Game.findOne({ where: { Id } })
        if (!Id) {
            return next(ApiError.badRequest('Не задано поле Id'))
        }
        res.json(game)
    }
}
module.exports = new GameController()
//Id,IdMap,Enemy,ResultGame