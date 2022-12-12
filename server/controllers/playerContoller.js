const ApiError = require('../error/ApiError');
const { Player } = require('../models/models')

class PlayerController {
    async create(req, res, next) {
        try {
            const { Name, Nickname } = req.body
            const player = await Player.create({ Name, Nickname })
            return res.json(player)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next) {
        const { Nickname } = req.params
        const player = await Player.findOne({ where: { Nickname } })
        if (!Nickname) {
            return next(ApiError.badRequest('Не задано поле Nickname'))
        }
        res.json(player)

    }
    async getAll(req, res) {
        const player = await Player.findAll()
        res.json(player)
    }

}
module.exports = new PlayerController()
//Id, Name, Nickname