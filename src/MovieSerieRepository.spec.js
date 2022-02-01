import MovieSerieRepository from "./MovieSerieRepository.js";
import {strict as assert} from 'assert';
import MovieParticipationRepository from "./MovieParticipationRepository.js";
import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";

const repo = new MovieSerieRepository();

const name = "Friends";
const date ="1 de enero";
const characterIds = [1,2,3]
const genreNames = ["Ciencia ficción","Drama","Comedia"]
const movieSerie1= repo.create({name,date,characterIds,genreNames});
const movieSerie2= repo.create({name,date,characterIds,genreNames});
const movieSerie3= repo.create({name,date,characterIds,genreNames});

assert.deepEqual(repo.list(),{[movieSerie1.id]: movieSerie1,[movieSerie2.id]:movieSerie2,[movieSerie3.id]:movieSerie3})

const insertedMovieSerie = repo.find(movieSerie1.id)

assert.deepEqual(insertedMovieSerie,{name,date,id:movieSerie1.id});

const participationRepo = new MovieParticipationRepository();

assert.deepEqual(participationRepo.findByMovieId(3),([
  { characterId: 1, movieId: 3, id: 3 },
  { characterId: 2, movieId: 3, id: 6 },
  { characterId: 3, movieId: 3, id: 7 }
  ]))

const associationGenreMovieRepo= new GenreMovieAssociationRepository();

assert.deepEqual(associationGenreMovieRepo.findByGenre(2),([
  {genreId: 2,id: 4,movieId: 1},
  {genreId: 2,id: 5,movieId: 2},
  {genreId: 2,id: 6,movieId: 3}
]))

repo.update(movieSerie1.id,{name:"Spiderman 2",date:"16 de mayo 2004"})

assert.deepEqual(repo.find(movieSerie1.id),{name:"Spiderman 2",date:"16 de mayo 2004",id:movieSerie1.id});

repo.delete(movieSerie2.id)

assert.deepEqual(repo.list(),{[movieSerie1.id]:repo.find(movieSerie1.id),[movieSerie3.id]:repo.find(movieSerie3.id)});