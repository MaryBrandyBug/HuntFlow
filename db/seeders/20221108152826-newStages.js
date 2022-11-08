/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stages', [
      {
        nameOfStage: 'invitation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'screening call',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'video interview',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'resume sent to client',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'interview with the client',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'get offer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'accepted offer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameOfStage: 'refusal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
