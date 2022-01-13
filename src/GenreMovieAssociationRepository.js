const genreMovieAssociation = {};
let nextId=1;

export default class GenreMovieAssociationRepository{
    insert(options){
        const id=nextId;
        const newAssociation={...options,id};
        genreMovieAssociation[id] = newAssociation;
        nextId++;
        return genreMovieAssociation[id];
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