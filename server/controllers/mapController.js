const ApiError = require('../error/ApiError');
const { Map } = require('../models/models')

class MapController {
    async create(req, res, next) {
        try {
            const { Id, Time, Side, ResultMap, gameId } = req.body
            const map = await Map.create({ Id, Time, Side, ResultMap, gameId })
            return res.json(map)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next) {
        const { Id } = req.params
        const map = await Map.findOne({ where: { Id } })
        if (!Id) {
            return next(ApiError.badRequest('Не задано поле Id'))
        }
        res.json(map)
    }
    async getAll(req, res) {
        const {gameId} = req.params
        const map = await Map.findAll({where: {gameId }})
        res.json(map)
    }
}
module.exports = new MapController()
//Id,Time,Side,ResultMap