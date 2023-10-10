'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tea.hasMany(models.Comment, {
        foreignKey: 'teaId',
        onDelete: 'CASCADE',
      });
    }
  }
  Tea.init(
    {
      type: DataTypes.STRING,
      location: DataTypes.STRING,
      image: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Tea',
    }
  );
  return Tea;
};
