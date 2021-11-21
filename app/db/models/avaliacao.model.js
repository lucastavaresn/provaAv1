const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Avaliacao = sequelize.define(name, 
    {
        nota:{
            type: DataTypes.FLOAT(4, 2)
        },
        aplicado: {
            type: DataTypes.DATE,
        },


    },
    {
        sequelize,
        tableName:name,
    })

Avaliacao.associete = (models) => {

    Avaliacao.hasOne(models.aluno, {
        foreignKey: {
            name: 'id_avaliacao'
        },
        as: 'aluno'
    })
    
    Avaliacao.hasOne(models.atividade, {
        foreignKey: {
            name: 'id_avaliacao'
        },
        as: 'atividade'
    })

    Avaliacao.hasOne(models.grupo, {
        foreignKey: {
            name: 'id_avaliacao'
        },
        as: 'grupo'
    })

    Avaliacao.belongsToMany(models.softskill,{
        through: 'atividade_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_avaliacao'
        },
        as: 'softskills'
    })
    
}
module.exports = Avaliacao