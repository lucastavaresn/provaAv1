const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Aluno = sequelize.define(name, 
    {
        matricula: {
            type: DataTypes.STRING(20)
        }
    },
    {
        sequelize,
        tableName:name,
        timestamps:false
    })

Aluno.associete = (models) => {

    Aluno.belongTo(models.usuario, {
        foreignKey:{
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Aluno.belongsToMany(models.hardskill,{
        through: 'aluno_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'hardskills'
    })

    Aluno.belongsToMany(models.softskill,{
        through: 'aluno_softskill',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'softskills'
    })

    Aluno.belongsToMany(models.grupo,{
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'grupos'
    })

    Aluno.hasOne(models.curso, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'curso'
    })

    Aluno.belongsToMany(models.questao_dia,{
        through: 'questao_dia_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'questoes_dia'
    })

    Aluno.hasMany(models.tarefa,{
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'tarefas'
    })
}
module.exports = Aluno