const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Tarefa = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(10)
        },
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

Tarefa.associete = (models) => {
    
    Tarefa.hasOne(models.aluno, {
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'aluno'
    })

    Tarefa.hasOne(models.grupo, {
        foreignKey: {
            name: 'id_tarefa'
        },
        as: 'grupo'
    })


}
module.exports = Tarefa