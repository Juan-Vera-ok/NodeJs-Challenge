import MovieSerieRepository from "./MovieSerieRepository.js";
import {strict as assert} from 'assert';
import MovieParticipationRepository from "./MovieParticipationRepository.js";

const repo = new MovieSerieRepository();

const name = "Friends";
const date ="1 de enero";
const characterIds = [1,2,3]
const movieSerie1= repo.create({name,date,characterIds});
const movieSerie2= repo.create({name,date,characterIds});
const movieSerie3= repo.create({name,date,characterIds});

assert.deepEqual(repo.list(),{[movieSerie1.id]: movieSerie1,[movieSerie2.id]:movieSerie2,[movieSerie3.id]:movieSerie3})

const insertedMovieSerie = repo.find(movieSerie1.id)

assert.deepEqual(insertedMovieSerie,{name,date,id:movieSerie1.id});

const participationRepo = new MovieParticipationRepository();

participationRepo.findByMovieId(3)

repo.update(movieSerie1.id,{name:"Spiderman 2",date:"16 de mayo 2004"})

assert.deepEqual(repo.find(movieSerie1.id),{name:"Spiderman 2",date:"16 de mayo 2004",id:movieSerie1.id});

repo.delete(movieSerie2.id)

assert.deepEqual(repo.list(),{[movieSerie1.id]:repo.find(movieSerie1.id),[movieSerie3.id]:repo.find(movieSerie3.id)});