const {DataTypes, UUID, UUIDV4} = require('sequelize')


module.exports = (sequelizeInstance) =>{
    sequelizeInstance.define('Invitado', {
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            unique:true,
            allowNull:false,
            defaultValue:UUIDV4
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        confirmAsist:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}