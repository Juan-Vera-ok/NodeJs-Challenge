import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import db from "../db/models/index.cjs" 

export default class GenreRepository{

    async create({name}){
        const genre =await db.Genre.create({name});
        return genre;
    }

    _findGenreByName(genreName){
        const arrayGenre= Object.values(genres);
        return arrayGenre.find(genre=> genre.name===genreName)
    }

    async findOrCreateByName({name}){
    return await db.Genre.findOrCreate({
        where: {
            name:name
        }
    });
    }
}