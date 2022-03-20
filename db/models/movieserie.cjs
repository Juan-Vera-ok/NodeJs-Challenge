'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSerie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.GenreMovieAssociation,{foreignKey:"movieSerieId"})
    }
  }
  MovieSerie.init({
    image: DataTypes.BIGINT,
    title: DataTypes.STRING,
    rating: DataTypes.ENUM('ATP','+13','+16','+18','C')
  }, {
    sequelize,
    modelName: 'MovieSerie',
  });
  return MovieSerie;
};