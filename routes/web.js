const express = require("express");
const router = express.Router();

const NavegacaoController = require("../app/controllers/NavegacaoController");
const ContatoController = require("../app/controllers/ContatoController");

// Rotas das Tarefas
router.get('/contato', ContatoController.list)
router.get('/contato/create', ContatoController.create)
router.post('/contato/save', ContatoController.save)
router.post('/contato/remove/:id', ContatoController.remove)
router.get('/contato/edit/:id', ContatoController.edit)
router.post('/contato/update', ContatoController.update)
router.post('/contato/update-status/:id', ContatoController.updateStatus)


router.get('/', NavegacaoController.index);
router.get('/usuarios', NavegacaoController.usuarios);
router.get('/sobre', NavegacaoController.sobre);



router.get('*', function notFound(request, response) {
    return response.render("404");
});


module.exports = router;