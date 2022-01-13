const genreMovieAssociation = {};
let nextId=1;

export default class genreMovieAssociation{
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
        arrayGenreMovieAssociation=Object.values(genreMovieAssociation)
        filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association===id);
        })
        return filterArray;
    }

    findByGenre(idGenre){
        arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association===id);
        })
        return filterArray;
    }

    findByMovie(idMovie){
        arrayGenreMovieAssociation=Object.values(genreMovieAssociation);
        filterArray = arrayGenreMovieAssociation.filter(function(association){
            return (association===id);
        })
        return filterArray;
    }
}