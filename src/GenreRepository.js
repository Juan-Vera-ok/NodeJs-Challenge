import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
const genre= {}
let nextId= 1;

export default class GenreRepository{
    
    constructor(){
        this.genreMovieAssociationRepo= new GenreMovieAssociationRepository();
    }

    create({movieIds,...options}){
        const id=nextId;

        movieIds.forEach(movieId => {this.genreMovieAssociationRepo.insert(
            {genreId:id,movieId});
        });

        genre[id]={...options,id};
        nextId++;
        return genre[id];
    }

    delete(id){
        delete genre[id]
        return genre[id];
    }

    update(id,options){
        genre[id]={...genre[id],...options}
        return genre[id];
    }

    list(){
        return genre;
    }

    find(id){
        return genre[id];
    }
}