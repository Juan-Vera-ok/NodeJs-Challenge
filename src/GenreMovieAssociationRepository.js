const genreMovieAssociation = {};
let nextId=1;

export default class GenreMovieAssociationRepository{
    insert(options){
        if(this.isRepeatead(options).flag===false){
        const id=nextId;
        const newAssociation={...options,id};
        genreMovieAssociation[id] = newAssociation;
        nextId++;
        return genreMovieAssociation[id];
        }else{
            return (this.itsRepetead(options).repetead);
        }
        
    }

    isRepeatead(options){
        let repetead
        const arrayGenreMovieAssociation= Object.values(genreMovieAssociation);
        const flag = arrayGenreMovieAssociation.some(association=>{
            if(association.genreId===options.genreId && 
            association.movieId===options.movieId){
                repetead=association;
            }
            return (association.genreId===options.genreId && 
                association.movieId===options.movieId);
        })
        const repeteadAssociation={flag,repetead};
        return repeteadAssociation;
    }

    delete(id){
        delete genreMovieAssociation[id];
    }

    list(){
        return genreMovieAssociation;
    }

    find(id){
        const arrayGenreMovieAssociation=Object.values(genreMovieAssociation)
        const filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.id===id);
        })
        return filterArray;
    }

    findByGenre(idGenre){
        const arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        const filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.genreId===idGenre);
        })
        return filterArray;
    }

    findByMovie(idMovie){
        const arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        const filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.movieId===idMovie);
        })
        return filterArray;
    }
}