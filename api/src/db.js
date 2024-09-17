const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')


const sequelize = new Sequelize('postgresql://postgres:ESIZYHxECZlxFpnOPNWWFvzvBnNxryUK@junction.proxy.rlwy.net:40062/railway',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  })

fs.readdirSync(path.join(__dirname, "models")).forEach(e => require(path.join(__dirname, "models", e))(sequelize))



console.log(sequelize.models)
module.exports = {
    connectTo:sequelize,
    ...sequelize.models
}