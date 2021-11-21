const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Disciplina = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(50)
        }

    },
    {
        sequelize,
        tableName:name,
    })

Disciplina.associete = (models) => {
    

    Disciplina.belongsToMany(models.professor,{
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_desciplina'
        },
        as: 'professores'
    })

    Disciplina.belongsTo(models.turma,{
        through: 'disciplina_turma',
        timestamps: false,
        foreignKey: {
            name: 'id_desciplina'
        },
        as: 'turmas'
    })

    Disciplina.belongsToMany(models.hardskill,{
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey: {
            name: 'id_desciplina'
        },
        as: 'hardskills'
    })
}
module.exports = Disciplina