"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Stores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      churchId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      storeName: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      whatsappNumber: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      longlat: {
        type: Sequelize.STRING
      },
      photoProfile: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable("Stores");
  }
};
