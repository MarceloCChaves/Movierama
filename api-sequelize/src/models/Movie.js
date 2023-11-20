const Sequelize = require("sequelize");
const sequelize = require("../db");

const schema = "movie";

class Movie extends Sequelize.Model {}

// Definindo o modelo Sequelize
Movie.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    poster: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rating: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    overview: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Movie",
    schema,
  }
);

// Sincronizando o modelo com o banco de dados
sequelize.sync().then(() => {
  console.log('Tabela Movie sincronizada com sucesso!');
}).catch((error) => {
  console.error('Erro ao sincronizar a tabela Movie:', error);
});

module.exports = Movie;