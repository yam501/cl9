const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Game = sequelize.define('game', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idMap: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    enemy: { type: DataTypes.STRING, allowNull: false },
    resultGame: { type: DataTypes.BOOLEAN, allowNull: false },
})

const Map = sequelize.define('map', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    time: { type: DataTypes.TIME, allowNull: false },
    side: { type: DataTypes.STRING, allowNull: false },
    resultMap: { type: DataTypes.INTEGER, allowNull: false },
})

const MapStat = sequelize.define('map_stat', {
    idMap: { type: DataTypes.INTEGER, allowNull: false },
    idPlayer: { type: DataTypes.INTEGER, allowNull: false },
    role: { type: DataTypes.INTEGER, allowNull: false },
    heroName: { type: DataTypes.STRING, allowNull: false },
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
