import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
const genres= {}
let nextId= 1;

export default class GenreRepository{
    
    constructor(){
        this.genreMovieAssociationRepo= new GenreMovieAssociationRepository();
    }

    create({movieIds,...options}){
        const id=nextId;
        if(movieIds!==undefined){
        movieIds.forEach(movieId => {this.genreMovieAssociationRepo.insert(
            {genreId:id,movieId});
        });}

        genres[id]={...options,id};
        nextId++;
        return genres[id];
    }

    delete(id){
        delete genres[id]
        return genres[id];
    }

    update(id,options){
        genres[id]={...genres[id],...options}
        return genres[id];
    }

    list(){
        return genres;
    }

    find(id){
        return genres[id];
    }

    findGenreByName(genreName){
        const arrayGenre= Object.values(genres);
        return arrayGenre.find(genre=> genre.name===genreName)
    }

    findOrCreateByName(genreName){
        let genre=this.findGenreByName(genreName)
        if(genre){
            return genre;
        }else{
            return this.create({name:genreName})
        }
    }
}