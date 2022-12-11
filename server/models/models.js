const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Game = sequelize.define('game', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Enemy: { type: DataTypes.STRING, allowNull: false },
    ResultGame: { type: DataTypes.STRING, allowNull: false },
})

const Map = sequelize.define('map', {
    Id: { type: DataTypes.STRING, primaryKey: true },
    Time: { type: DataTypes.STRING, allowNull: false },
    Side: { type: DataTypes.STRING, allowNull: false },
    ResultMap: { type: DataTypes.BOOLEAN, allowNull: false },
})

const MapStat = sequelize.define('map_stat', {
    NetWorth: { type: DataTypes.STRING },
    KDA: { type: DataTypes.STRING },
})

const Player = sequelize.define('player', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING, allowNull: false },
    Nickname: { type: DataTypes.STRING, allowNull: false },
})

const Hero = sequelize.define('hero', {
    Name: { type: DataTypes.STRING, primaryKey: true },
    Photo: { type: DataTypes.STRING, allowNull: false },
})

Game.hasMany(Map)
Map.belongsTo(Game)

Map.hasMany(MapStat)
MapStat.belongsTo(Map)

Player.hasOne(MapStat)
MapStat.belongsTo(Player)

Hero.hasOne(MapStat)
MapStat.belongsTo(Hero)

module.exports = {
    Game, Map, MapStat, Player, Hero
}
