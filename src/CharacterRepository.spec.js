import CharacterRepository from "./CharacterRepository.js";
import {strict as assert} from 'assert';

const repo= new CharacterRepository();
const name="Ricardo";
const age= 27;
const weight = 67;
const bio = "Hola soy Ricardo";
const character = repo.insert({name,age,weight,bio});
const character2 = repo.insert({name,age,weight,bio});

assert.deepEqual(repo.list(),{[character.id]:character,[character2.id]:character2});

const insertedCharacter = repo.find(character.id);

assert.deepEqual(insertedCharacter,{name, age, weight,bio,id:character.id});

repo.update(character.id,{name:"Lampone",age:40,bio:"Hola soy Lampone"})

assert.deepEqual
(repo.find(character.id),{name:"Lampone",age:40,weight,bio:"Hola soy Lampone",id:character.id})

repo.delete(character.id)

assert.equal(repo.find(character.id),undefined)

