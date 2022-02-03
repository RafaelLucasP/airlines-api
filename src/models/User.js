const Sequelize  = require('sequelize')
const db = require('../config/database')
 
const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false
})

module.exports = User;