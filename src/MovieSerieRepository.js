import MovieParticipationRepository from "./MovieParticipationRepository.js";
import GenreMovieAssociationRepository from "./GenreMovieAssociationRepository.js";
import GenreRepository from "./GenreRepository.js";
import db from "../db/models/index.cjs" 

const MovieSerie={};
let nextId=1;
export default class MovieSerieRepository{

    constructor(){
        this.participationRepo = new MovieParticipationRepository()
        this.genreMovieAssociationRepo = new GenreMovieAssociationRepository()
        this.genreRepository = new GenreRepository();
    }
    async create({characterIds,genreNames,image,title,createdAt,rating}){
        const newMovieSerie = await db.MovieSerie.create({image,title,createdAt,rating})
        const promises = genreNames.map(async genreName=>{
            const genre =await this.genreRepository.findOrCreateByName(genreName)
            await newMovieSerie.createGenreMovieAssociation(
            {genreId:genre.id})
        })
        await Promise.all(promises);
        return newMovieSerie;
    }

    delete(id){
        delete MovieSerie[id];
        return MovieSerie[id];
    }

    createGenres(id,genreNames){
        genreNames.forEach(genreName => {
            const genre=this.genreRepository.findOrCreateByName(genreName); 
            this.genreMovieAssociationRepo.insert({
            movieId:id,genreId:genre.id})
        });
    }

    update(id,{characterIds,genreNames,...options}){
        MovieSerie[id]={...MovieSerie[id],...options}
        if(characterIds!==undefined){
            this.participationRepo.deleteWhereMovieIdEquals(id);
            characterIds.forEach(characterId=>{this.participationRepo.insert({characterId,movieId:id})});
        }
        if(genreNames!==undefined){
            this.genreMovieAssociationRepo.deleteWhereMovieIdEquals(id);
            this.createGenres(id,genreNames)
        }
        }

    list(){
        return MovieSerie;
    }

    find(id){
        return MovieSerie[id];
    }
}