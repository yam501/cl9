class PlayerController {
    async create(req,res){

    }
    async getAll(req, res){
        const query = req.query
        res.json(query)

    }
    async getOne(req, res){
        res.json('dfdf')
    }
}  
module.exports = new PlayerController()