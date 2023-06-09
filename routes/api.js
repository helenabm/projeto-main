const express = require("express");
const router = express.Router();

const ContatoController = require("../app/controllers/api/AgendaController");

// Rotas das Tarefas
router.get('/contato', ContatoController.list)
router.get('/contato/:id', ContatoController.show)
router.post('/contato', ContatoController.save)
router.delete('/contato/:id', ContatoController.remove)
router.put('/contato/:id', ContatoController.update)
router.put('/contato/:id/update-status', ContatoController.updateStatus)


module.exports = router;