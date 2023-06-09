const Agenda = require('../models/Agenda');

function AgendaController() {

  function list(req, res) {
    Agenda.findAll({ raw: true })
      .then((data) => {

        res.render('contato/list', { 
          title: "Lista de Contato",
          contato: data, 
        })
      })
      .catch((err) => console.log(err))
  }

  function create(req, res) {
    res.render('contato/create')
  }

  function save(req, res) {
    const agenda = {
      nome: req.body.nome,
      celular: req.body.celular,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      complemento: req.body.complemento,
    }

    Agenda.create(agenda)
      .then(res.redirect('/contato'))
      .catch((err) => console.log(err))
  }

  function remove(req, res) {
    const id = req.params.id;

    Agenda.destroy({ where: { id: id } })
      .then(res.redirect('/contato'))
      .catch((err) => console.log(err))
  }

  function edit(req, res) {
    const id = req.params.id

    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render('contato/edit', { agenda: data })
      })
      .catch((err) => console.log())
  }

  function update(req, res) {
    console.log(req.body);
    const id = req.body.id

    const agenda = {
      nome: req.body.nome,
      celular: req.body.celular,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      complemento: req.body.complemento,
      done: req.body.done === '1' ? true : false
    }

    Agenda.update(agenda, { where: { id: id } })
      .then(res.redirect('/contato'))
      .catch((err) => console.log(err))
  }

  function updateStatus(req, res) {
    const id = req.params.id

    const agenda = {
      done: req.body.done === '0' ? true : false,
    }

 	  Agenda.update(agenda, { where: { id: id } })
      .then(res.redirect('/contato'))
      .catch((err) => console.log())
    }

    return {
      create,
      save,
      list,
      remove,
      edit,
      update,
      updateStatus,
    }

}

module.exports = AgendaController();
