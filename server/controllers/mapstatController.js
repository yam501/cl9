const ApiError = require('../error/ApiError');
const { MapStat } = require('../models/models')

class MapStatController {

    async create(req, res, next) {
        try {
            const { NetWorth, KDA, mapId, playerId, heroName } = req.body
            const mapstat = await MapStat.create({ NetWorth, KDA, mapId, playerId, heroName })
            return res.json(mapstat)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        const { mapId, playerId } = req.query
        let mapstat
        mapstat = await MapStat.findAll({ where: { mapId, playerId } })
        if (!mapId && !playerId) {
            return next(ApiError.badRequest('Не заданы необходимые поля'))
        }
        return res.json(mapstat)
    }
}
module.exports = new MapStatController()
//IdMap, IdPlayer,Role,Hero,NetWorth,KDA