module.exports = (()=> {

    const avaliacaoController = require('../controllers/avaliacao.controller');

    let router = require('express').Router();
    
    router.get("/", async (req, res) => {
        const avaliacao = await avaliacaoController.index();
        res.json(avaliacao);
    })

    router.get("/:id", async (req, res) => {
        const avaliacao = await avaliacaoController.show(req.params.id);
        res.json(avaliacao);
    })

    router.post("/", async (req, res) => {
        const avaliacao = await avaliacaoController.store(req.body);
        res.json(avaliacao);
    })

    router.put("/:id", async (req, res) => {
        const avaliacao = await avaliacaoController.update(req.body, req.params.id);
        res.json(avaliacao);
    })

    router.delete("/:id", async (req, res) => {
        const avaliacao = await avaliacaoController.destroy(req.params.id);
        res.json(avaliacao);
    })
    
    return router
})()