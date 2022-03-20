'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreMovieAssociation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Genre);
      this.belongsTo(models.MovieSerie,{foreignKey:"movieSerieId"})
    }
  }
  GenreMovieAssociation.init({
    genreId: DataTypes.INTEGER,
    movieSerieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreMovieAssociation',
  });
  return GenreMovieAssociation;
};