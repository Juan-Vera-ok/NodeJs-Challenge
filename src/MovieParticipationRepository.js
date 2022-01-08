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
        const filterArray = arrayMovieParticipation.filter(function(currentId){
            return (currentId.id===id);
        });
        return filterArray;
    }

}