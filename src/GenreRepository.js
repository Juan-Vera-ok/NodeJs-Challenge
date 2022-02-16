import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import db from "../db/models/index.cjs" 

export default class GenreRepository{
    
    constructor(){
        this.genreMovieAssociationRepo= new GenreMovieAssociationRepository();
    }

    async create({movieIds,name}){
        const genre =await db.Genre.create({name});
        if(movieIds!==undefined){
            movieIds.forEach(movieId => {this.genreMovieAssociationRepo.insert(
                {genreId:genre.id,movieId});
            });}
        return genre;
    }

    async delete(genre){
        const deletedGenre = await db.Genre.destroy({
            where:{name:genre.name}
        });
        return deletedGenre;
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