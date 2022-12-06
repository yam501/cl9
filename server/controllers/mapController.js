const ApiError = require ('../error/ApiError');
const {Map} = require ('../models/models')

class MapController {
    async create(req,res,next){
        try{
            const {Id,Time,Side,ResultMap} = req.body
            const map = await Map.create({Id,Time,Side,ResultMap})
            return res.json(map)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next){
        const {Id} = req.params
        const map = await Map.findOne({where: {Id}}) 
        if (!Id){
            return next(ApiError.badRequest('Не задано поле Id'))
        }
        res.json(map)

    }
}
module.exports = new MapController()
//Id,Time,Side,ResultMap