import GenreRepository from "./GenreRepository.js";
import {strict as assert} from "assert";

const repo= new GenreRepository();

const name= "Comedia";

const genre1=repo.create({name});
const genre2=repo.create({name});
const genre3=repo.create({name});

assert.deepEqual(repo.list(),{[genre1.id]:genre1,[genre2.id]:genre2,[genre3.id]:genre3});

const insertedGenre=repo.find(genre1.id)

assert.deepEqual(insertedGenre,{name:"Comedia",id:genre1.id});

repo.update(genre1.id,{name:"Terror"})

assert.deepEqual(repo.find(genre1.id),{name:"Terror",id:genre1.id});

repo.delete(genre2.id);

assert.deepEqual(repo.list(),{[genre1.id]:repo.find(genre1.id),[genre3.id]:repo.find(genre3.id)});