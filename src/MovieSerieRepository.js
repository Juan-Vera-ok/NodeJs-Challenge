import MovieParticipationRepository from "./MovieParticipationRepository.js";
import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";

const MovieSerie={};
let nextId=1;
export default class MovieSerieRepository{

    constructor(){
        this.participationRepo = new MovieParticipationRepository()
        this.genreMovieAssociationRepo = new GenreMovieAssociationRepository()
    }
    create({characterIds,genreIds,...options}){
        const id=nextId;
        const newMovieSerie={...options,id};

        characterIds.forEach(characterId => this.participationRepo.insert({
            movieId:id,characterId}));

        genreIds.forEach(genreId => this.genreMovieAssociationRepo.insert({
            movieId:id,genreId}));
        
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