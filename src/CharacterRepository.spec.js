import CharacterRepository from "./CharacterRepository.js";
import {strict as assert} from 'assert';

testInsert();


function testInsert(){
    const repo= new CharacterRepository();
    const name="Ricardo";
    const age= 27;
    const weight = 67;
    const bio = "Hola soy Ricardo";
    const character = repo.insert({name, age, weight, bio});

    const insertedCharacter = repo.find(character.id);
    
    assert.deepEqual(insertedCharacter,{name, age, weight,bio,id:character.id});
}