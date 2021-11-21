const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardSkills = require('./aluno_hardskill.routes');
const professor = require('./professor.routes');
const turma = require('./turma.routes');
const atividade = require('./atividade.routes');

const avaliacao = require('./avaliacao.routes');
const curso = require('./curso.routes');
const disciplina = require('./disciplina.routes');
const grupo = require('./grupo.routes');
const questao_dia = require('./questao_dia.routes');
const softskill = require('./softskill.routes');
const tarefa = require('./tarefa.routes');


module.exports = app => {
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/aluno_hardskills', alunoHardSkills);
    app.use('/api/professor', professor);
    app.use('/api/aluno', professor);
    app.use('/api/turma', turma);
    app.use('/api/atividade', atividade);
    app.use('/api/avaliacao', avaliacao);
    app.use('/api/curso', curso);
    app.use('/api/disciplina', disciplina);
    app.use('/api/grupo', grupo);
    app.use('/api/questao_dia', questao_dia);
    app.use('/api/softskill', softskill);
    app.use('/api/tarefa', tarefa);
}