'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GenreMovieAssociations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genreId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id'
        }
      },
      movieSerieId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'MovieSeries',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GenreMovieAssociations');
  }
};