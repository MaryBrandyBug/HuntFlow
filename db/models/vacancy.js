const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Candidate, Entry, User }) {
      this.belongsTo(User);
      this.hasMany(Candidate);
      this.hasMany(Entry);
    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};
