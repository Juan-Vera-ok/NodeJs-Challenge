const movieParticipation={};
let nextId=1;

export default class MovieParticipationRepository{

    insert(options){
        if(this.isRepeatead(options).flag===false)
        {
            const id=nextId;
            movieParticipation[id]={...options,id}
            nextId++;
            return movieParticipation[id]
        }else{
            return (this.itsRepetead(options).repetead)
        }
    }

    isRepeatead(options){
        let repetead;
        const arrayMovieParticipation = Object.values(movieParticipation);
        const flag = arrayMovieParticipation.some(participation=>{
            if(participation.movieId===options.movieId 
            && participation.characterId===options.characterId){
                repetead=participation
            }
            return (participation.movieId===options.movieId 
            && participation.characterId===options.characterId)
        })
        const repeteadParticipation={flag:flag,repetead}
        return repeteadParticipation;
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

    list(){
        return movieParticipation;
    }

}