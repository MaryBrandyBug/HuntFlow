const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CandidateStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  CandidateStatus.init({
    CandidateId: DataTypes.INTEGER,
    StatusId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CandidateStatus',
  });
  return CandidateStatus;
};
