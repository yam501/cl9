const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Game = sequelize.define('game', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    IdMap: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    Enemy: { type: DataTypes.STRING, allowNull: false },
    ResultGame: { type: DataTypes.BOOLEAN, allowNull: false },
})

const Map = sequelize.define('map', {
    Id: { type: DataTypes.INTEGER, primaryKey: true },
    Time: { type: DataTypes.TIME, allowNull: false },
    Side: { type: DataTypes.STRING, allowNull: false },
    ResultMap: { type: DataTypes.INTEGER, allowNull: false },
})

const MapStat = sequelize.define('map_stat', {
    IdMap: { type: DataTypes.INTEGER, allowNull: false },
    IdPlayer: { type: DataTypes.INTEGER, allowNull: false },
    Role: { type: DataTypes.INTEGER, allowNull: false },
    HeroName: { type: DataTypes.STRING, allowNull: false },
    GPM: { type: DataTypes.INTEGER },
    XPM: { type: DataTypes.INTEGER },
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

MapStat.hasOne(Player)
Player.belongsTo(MapStat)

MapStat.hasOne(Hero)
Hero.belongsTo(MapStat)

module.exports = {
    Game, Map, MapStat, Player, Hero
}
