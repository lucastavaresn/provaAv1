const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Atividade = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(20)
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

Atividade.associete = (models) => {
    
    Atividade.hasOne(models.turma, {
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'turma'
    })

    Atividade.belongsToMany(models.grupo,{
        through: 'atividade_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_atividade'
        },
        as: 'grupos'
    })

    Atividade.belongsToMany(models.hardskill,{
        through: 'Atividade_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_desciplina'
        },
        as: 'hardskills'
    })
}
module.exports = Atividade