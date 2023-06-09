const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  rua: {
    type: DataTypes.STRING,
  },
  numero: {
    type: DataTypes.STRING,
  },
  bairro: {
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.STRING,
  },
  complemento: {
    type: DataTypes.STRING,
  },

})

module.exports = Agenda
