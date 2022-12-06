const ApiError = require ('../error/ApiError');
const {MapStat} = require ('../models/models')

class MapStatController {
    async create(req,res,next){
        try{
            const {IdMap,IdPlayer,Role,HeroName,GPM,XPM} = req.body
            const mapstat = await MapStat.create({IdMap,IdPlayer,Role,HeroName,GPM,XPM})
            return res.json(mapstat)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next){
        const {IdMap,IdPlayer} = req.params
        const mapstat = await MapStat.findOne({where: {IdMap,IdPlayer}}) 
        if (!IdMap && !IdPlayer){
            return next(ApiError.badRequest('Не заданы необходимые поля'))
        }
        res.json(mapstat)

    }
}
module.exports = new MapStatController()
//IdMap, IdPlayer,Role,Hero,GPM,XPM