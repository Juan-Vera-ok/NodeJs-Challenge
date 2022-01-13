const movieParticipation={};
let nextId=1;

export default class MovieParticipationRepository{

    insert(options){
        const id=nextId;
        movieParticipation[id]={...options,id}
        nextId++;
        return movieParticipation[id]
    }

    delete(id){
        delete movieParticipation[id];
    }

    find(id){
        const arrayMovieParticipation= Object.values(movieParticipation);
        const filterArray = arrayMovieParticipation.filter(function(participation){
            return (participation.id===id);
        });
        return filterArray;
    }

    findByCharacterId(id){
        const arrayMovieParticipation= Object.values(movieParticipation);
        const filterArray = arrayMovieParticipation.filter(function(participation){
            return (participation.characterId===id);
        });
        return filterArray;
    }

    findByMovieId(id){
        const arrayMovieParticipation= Object.values(movieParticipation);
        const filterArray = arrayMovieParticipation.filter(function(participation){
            return (participation.movieId===id);
        });
        return filterArray;
    }

}