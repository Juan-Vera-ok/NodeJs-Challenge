const movieParticipation={};
let nextId=1;

export default class MovieParticipationRepository{

    insert(options){
        if(this.isRepeated(options).flag===false)
        {
            const id=nextId;
            movieParticipation[id]={...options,id}
            nextId++;
            return movieParticipation[id]
        }else{
            return (this.isRepeated(options).repeated)
        }
    }

    isRepeated(options){
        let repeated;
        const arrayMovieParticipation = Object.values(movieParticipation);
        const flag = arrayMovieParticipation.some(participation=>{
            if(participation.movieId===options.movieId 
            && participation.characterId===options.characterId){
                repeated=participation
            }
            return (participation.movieId===options.movieId 
            && participation.characterId===options.characterId)
        })
        const repeatedParticipation={flag:flag,repeated}
        return repeatedParticipation;
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

    deleteWhereCharacterIdEquals(characterId){
        const filterArray = this.findByCharacterId(characterId);
        filterArray.forEach(idFilter=>{delete movieParticipation[idFilter.id]});
    }


}