const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Curso = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(50)
        },


    },
    {
        sequelize,
        tableName:name,
    })

Curso.associete = (models) => {

    Curso.belongsToMany(models.aluno,{
        through: 'curso_aluno',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'alunos'
    })

    Curso.belongsToMany(models.turma,{
        through: 'curso_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turmas'
    })

}
module.exports = Curso