const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgresql://postgres:ESIZYHxECZlxFpnOPNWWFvzvBnNxryUK@junction.proxy.rlwy.net:40062/railway')




module.exports = {
    connectTo:sequelize,
    
}