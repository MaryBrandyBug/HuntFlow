const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Vacancy, Entry }) {
      this.belongsTo(Vacancy);
      this.hasMany(Entry);
    }
  }
  Candidate.init({
    VacancyId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    resume: DataTypes.STRING,
    experience: DataTypes.STRING,
    location: DataTypes.STRING,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};
