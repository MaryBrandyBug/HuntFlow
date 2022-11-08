const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Vacancy, CandidateStatus, Candidate, Stage,
    }) {
      this.belongsTo(Vacancy);
      this.belongsToMany(Candidate, { through: CandidateStatus, foreignKey: 'StatusId' });
      this.belongsTo(Stage);
    }
  }
  Status.init({
    VacancyId: DataTypes.INTEGER,
    StageId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};
