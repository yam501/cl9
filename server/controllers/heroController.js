const ApiError = require ('../error/ApiError');
const {Hero} = require ('../models/models')
const path =require('path');
const uuid = require('uuid')

class HeroController {
    async create(req,res, next){
        try{
            const {Name} = req.body
            const {Photo} = req.files
            let fileName = uuid.v4()+".png"
            Photo.mv(path.resolve(__dirname,'..','static',fileName))
            const hero = await Hero.create({Name, Photo:fileName})
            return res.json(hero)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
        



    }
    async getOne(req, res){



    }
}
module.exports = new HeroController()
//Name,Photo