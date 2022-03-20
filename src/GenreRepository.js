import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import db from "../db/models/index.cjs" 

export default class GenreRepository{

    async findOrCreateByName(name){
    return await db.Genre.findOrCreate({
        where: {
            name
        }
    });
    }
}