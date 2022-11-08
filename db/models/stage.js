const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Status }) {
      this.hasMany(Status);
    }
  }
  Stage.init({
    nameOfStage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};
