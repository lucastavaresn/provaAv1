const models = require("../db/models");

exports.index = async ()=> {
    const resultado = await models.avaliacao.findAll();
    return resultado
}

exports.show = async (id)=> {
    const resultado = await models.avaliacao.findByPk(id);
    return resultado
}

exports.store = async (avaliacao)=> {
    const resultado = await models.avaliacao.create(avaliacao);
    return resultado;
}

exports.update = async (avaliacao, id)=> {
    const resultado = await models.avaliacao.update(avaliacao, {where: {id:id}});
    return resultado;
}

exports.destroy = async (id)=> {
    const resultado = await models.avaliacao.destroy({where: {id:id}});
    return resultado;
}