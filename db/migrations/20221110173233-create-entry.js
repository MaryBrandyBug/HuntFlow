/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CandidateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Candidates',
          key: 'id',
        },
      },
      VacancyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vacancies',
          key: 'id',
        },
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'stage1',
      },
      stage1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      stage8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      dateStage2: {
        type: Sequelize.STRING,
      },
      dateStage3: {
        type: Sequelize.STRING,
      },
      dateStage5: {
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
    await queryInterface.dropTable('Entries');
  },
};
