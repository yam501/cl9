const ApiError = require ('../error/ApiError');

class PlayerController {
    async create(req,res){

    }
    async getAll(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Не задан id'))
        }
        res.json(id)

    }
    async getOne(req, res){
        res.json('dfdf')

    }
}  
module.exports = new PlayerController()
//Id, Name, Nickname, Photo, Info