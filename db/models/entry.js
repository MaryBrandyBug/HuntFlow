const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate, Vacancy }) {
      this.belongsTo(Candidate);
      this.belongsTo(Vacancy);
    }
  }
  Entry.init({
    CandidateId: DataTypes.INTEGER,
    VacancyId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    stage1: DataTypes.BOOLEAN,
    stage2: DataTypes.BOOLEAN,
    stage3: DataTypes.BOOLEAN,
    stage4: DataTypes.BOOLEAN,
    stage5: DataTypes.BOOLEAN,
    stage6: DataTypes.BOOLEAN,
    stage7: DataTypes.BOOLEAN,
    stage8: DataTypes.BOOLEAN,
    dateStage2: DataTypes.STRING,
    dateStage3: DataTypes.STRING,
    dateStage5: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};
