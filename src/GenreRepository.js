import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import db from "../db/models/index.cjs" 

export default class GenreRepository{

    async findOrCreateByName(name){
    const [genre]=await db.Genre.findOrCreate({
        where: {
            name
        }
    });
    return genre;
    }
}