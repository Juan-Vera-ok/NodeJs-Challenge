import MovieParticipationRepository from "./MovieParticipationRepository.js";

const characters={};
var nextId=1;
export default class CharacterRepository {

    constructor (){
        this.participationRepo = new MovieParticipationRepository()
    }
    create({movieIds,...options}){
        
        const id=nextId;
        const character={...options, id};

        movieIds.forEach(movieId=>this.participationRepo.insert({
            characterId:id, movieId}));

        characters[id]=character;
        nextId++;
        return character;
    }

    delete(id){
        delete characters[id];
    }

    update(id,{movieIds,...options}){
        characters[id]={...characters[id],...options};
        if(movieIds!==undefined){
        this.participationRepo.deleteWhereCharacterIdEquals(id);
        movieIds.forEach(movieId=>{this.participationRepo.insert({characterId:id, movieId})});}
    }

    list(){
        return characters;
    }

    find(id){
        return characters[id]
    }
}

