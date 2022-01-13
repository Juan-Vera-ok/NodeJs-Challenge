import MovieParticipationRepository from "./MovieParticipationRepository.js";
import {strict as assert} from "assert";

const repo = new MovieParticipationRepository()

const registro1 = repo.insert({characterId:1,movieId:1});
const registro2 = repo.insert({characterId:2,movieId:2});
const registro3 = repo.insert({characterId:3,movieId:3});

assert.deepEqual(registro1,({characterId:1,movieId:1,id:registro1.id}));

assert.deepEqual(repo.find(registro2.id),([{characterId:2,movieId:2,id:registro2.id}]))