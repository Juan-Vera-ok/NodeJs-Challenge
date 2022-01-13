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

    find(id){
        const arrayGenreMovieAssociation=Object.values(genreMovieAssociation)
        const filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.id===id);
        })
        return filterArray;
    }

    findByGenre(idGenre){
        arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.id===id);
        })
        return filterArray;
    }

    findByMovie(idMovie){
        arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association.id===id);
        })
        return filterArray;
    }
}