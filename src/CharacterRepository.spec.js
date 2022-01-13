import CharacterRepository from "./CharacterRepository.js";
import {strict as assert} from 'assert';
import MovieParticipationRepository from "./MovieParticipationRepository.js";

const repo= new CharacterRepository();
const name="Ricardo";
const age= 27;
const weight = 67;
const bio = "Hola soy Ricardo";
const movieIds= [1,2,3];
const character = repo.create({name,age,weight,bio,movieIds});
const character2 = repo.create({name,age,weight,bio,movieIds});

assert.deepEqual(repo.list(),{[character.id]:character,[character2.id]:character2});

const insertedCharacter = repo.find(character.id);

assert.deepEqual(insertedCharacter,{name, age, weight,bio,id:character.id});

const participationRepo = new MovieParticipationRepository();

participationRepo.findByCharacterId(2)

repo.update(character.id,{name:"Lampone",age:40,bio:"Hola soy Lampone"})

assert.deepEqual
(repo.find(character.id),{name:"Lampone",age:40,weight,bio:"Hola soy Lampone",id:character.id})

repo.delete(character.id)

assert.equal(repo.find(character.id),undefined)
