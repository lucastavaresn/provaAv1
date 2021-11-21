const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Turma = sequelize.define(name, 
    {
        numero: {
            type: DataTypes.STRING(10)
        },
        vagas: {
            type: DataTypes.INTEGER()
        }


    },
    {
        sequelize,
        tableName:name,
    })

Turma.associete = (models) => {

    Turma.hasOne(models.disciplina, {
        foreignKey: {
            name: 'id_turma'
        },
        as: 'disciplina'
    })

    Turma.belongsToMany(models.professor,{
        through: 'turma_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'professores'
    })

    Turma.belongsToMany(models.hardskill,{
        through: 'turma_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'hardskills'
    })

    Turma.belongsToMany(models.aluno,{
        through: 'turma_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'alunos'
    })

    Turma.belongsToMany(models.grupo,{
        through: 'turma_grupo',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'grupos'
    })

    Turma.belongsToMany(models.atividade,{
        through: 'turma_atividade',
        timestamps: false,
        foreignKey: {
            name: 'id_turma'
        },
        as: 'atividades'
    })

}
module.exports = Turma