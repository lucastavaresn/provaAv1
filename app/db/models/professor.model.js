const {DataTypes, Sequelize} = require("sequelize");
const models = require(".");
const name = require("path").basename(__filename.replace(".model", ""),".js");

const sequelize = require("../index").getConnection();

const Professor = sequelize.define(name, 
    {
        nome: {
            type: DataTypes.STRING(100)
        },
        admissao: {
            type: DataTypes.DATE,
        },

    },
    {
        sequelize,
        tableName:name,
    })

Professor.associete = (models) => {
    Professor.belongTo(models.usuario, {
        foreignKey:{
            name: 'id_usuario'
        },
        as: 'usuario'
    })

    Professor.belongsToMany(models.disciplina,{
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'disciplinas'
    })

    Professor.belongsToMany(models.turma,{
        through: 'turma_professor',
        timestamps: false,
        foreignKey: {
            name: 'id_professor'
        },
        as: 'turmas'
    })
}
module.exports = Professor