import MovieParticipationRepository from "./MovieParticipationRepository.js";

const MovieSerie={};
let nextId=1;
export default class MovieSerieRepository{

    constructor(){
        this.participationRepo = new MovieParticipationRepository()
    }
    create({characterIds,...options}){
        const id=nextId;
        const newMovieSerie={...options,id};

        characterIds.forEach(characterId => this.participationRepo.insert({
            movieId:id,characterId}));
        
        MovieSerie[id]=newMovieSerie;
        nextId++;
        return newMovieSerie;
    }

    delete(id){
        delete MovieSerie[id];
        return MovieSerie[id];
    }

    update(id,options){
        MovieSerie[id]={...MovieSerie[id],...options}
        }

    list(){
        return MovieSerie;
    }

    find(id){
        return MovieSerie[id];
    }
}