'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovieSeries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.BIGINT
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      rating:{
        type: Sequelize.ENUM('ATP','+13','+16','+18','C')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movieSeries');
  }
};