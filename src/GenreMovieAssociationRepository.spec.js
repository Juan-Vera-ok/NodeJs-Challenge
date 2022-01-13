import {strict as assert} from "assert";
import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";

const repo = new GenreMovieAssociationRepository();

const registro1 = repo.insert({genreId:1,movieId:1});
const registro2 = repo.insert({genreId:2,movieId:2});
const registro3 = repo.insert({genreId:3,movieId:3});

assert.deepEqual(registro1,({genreId:registro1.genreId,movieId:registro1.movieId,id:registro1.id}));
assert.deepEqual(repo.find(registro1.id),([{genreId:registro1.genreId,movieId:registro1.movieId,id:registro1.id}]));