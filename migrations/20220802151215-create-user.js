'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      churchId: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      name: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
      },
      password: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.TEXT,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      role: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
