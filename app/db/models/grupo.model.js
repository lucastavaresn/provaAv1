const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Grupo = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(25)
        },
        vagas: {
            type: DataTypes.INTEGER()
        }


    },
    {
        sequelize,
        tableName:name,
    })

Grupo.associete = (models) => {

    Grupo.hasOne(models.turma, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'turma'
    })

    Grupo.belongsToMany(models.aluno,{
        through: 'grupo_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'alunos'
    })

    Grupo.hasOne(models.atividade, {
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'atividade'
    })

    Grupo.hasMany(models.tarefa,{
        foreignKey: {
            name: 'id_grupo'
        },
        as: 'tarefas'
    })
}
module.exports = Grupo