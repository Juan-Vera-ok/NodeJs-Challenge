import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import db from "../db/models/index.cjs" 

export default class GenreRepository{
    
    constructor(){
        this.genreMovieAssociationRepo= new GenreMovieAssociationRepository();
    }

    async create({name}){
        const genre =await db.Genre.create({name});
        return genre;
    }

    _findGenreByName(genreName){
        const arrayGenre= Object.values(genres);
        return arrayGenre.find(genre=> genre.name===genreName)
    }

    findOrCreateByName(genreName){
        let genre=this._findGenreByName(genreName)
        if(genre){
            return genre;
        }else{
            return this.create({name:genreName})
        }
    }
}