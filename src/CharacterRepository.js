const characters={};
var nextId=1;
export default class CharacterRepository {

    insert(options){
        const id=nextId;
        const character={...options, id};
        characters[id]=character;
        nextId++;
        return character;
    }

    delete(id){
        delete characters[id];
    }

    update(id,options){
        characters[id]={...characters[id],...options};
    }

    list(){
        return characters;
    }

    find(id){
        return characters[id]
    }

}

