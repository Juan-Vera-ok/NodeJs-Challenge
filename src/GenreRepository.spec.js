import GenreRepository from "./GenreRepository.js";
import {strict as assert} from "assert";
import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";

const repo= new GenreRepository();
const genreMovieAssociationRepo= new GenreMovieAssociationRepository();

const name= "Comedia";
const movieIds= [1,2,3];
const genre1=repo.create({name,movieIds});
const genre2=repo.create({name,movieIds});
const genre3=repo.create({name,movieIds});

assert.deepEqual(repo.list(),{[genre1.id]:genre1,[genre2.id]:genre2,[genre3.id]:genre3});

const insertedGenre=repo.find(genre1.id)

assert.deepEqual(insertedGenre,{name:"Comedia",id:genre1.id});
assert.deepEqual(genreMovieAssociationRepo.findByMovie(2),([{genreId: 1,id: 2,movieId: 2},{genreId: 2,id: 5,movieId: 2},{genreId: 3,id: 8,movieId: 2}]));
assert.deepEqual(genreMovieAssociationRepo.findByGenre(2),([{ genreId: 2, movieId: 1, id: 4 },{ genreId: 2, movieId: 2, id: 5 },{ genreId: 2, movieId: 3, id: 6 }]));
assert.deepEqual(genreMovieAssociationRepo.list(),({
    '1': { genreId: 1, movieId: 1, id: 1 },
    '2': { genreId: 1, movieId: 2, id: 2 },
    '3': { genreId: 1, movieId: 3, id: 3 },
    '4': { genreId: 2, movieId: 1, id: 4 },
    '5': { genreId: 2, movieId: 2, id: 5 },
    '6': { genreId: 2, movieId: 3, id: 6 },
    '7': { genreId: 3, movieId: 1, id: 7 },
    '8': { genreId: 3, movieId: 2, id: 8 },
    '9': { genreId: 3, movieId: 3, id: 9 }
  }));
repo.update(genre1.id,{name:"Terror"})

assert.deepEqual(repo.find(genre1.id),{name:"Terror",id:genre1.id});

repo.delete(genre2.id);

assert.deepEqual(repo.list(),{[genre1.id]:repo.find(genre1.id),[genre3.id]:repo.find(genre3.id)});

