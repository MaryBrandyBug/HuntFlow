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
    static associate({ Status, User }) {
      this.hasMany(Status);
      this.belongsTo(User);
    }
  }
  Vacancy.init({
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};
