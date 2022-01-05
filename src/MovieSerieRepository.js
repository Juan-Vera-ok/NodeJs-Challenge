const MovieSerie={};
let nextId=1;
export default class MovieSerieRepository{

    create(options){
        const id=nextId;
        const newMovieSerie={...options,id};
        MovieSerie[id]=newMovieSerie;
        nextId++;
        return newMovieSerie;
    }

    delete(id){
        delete MovieSerie[id];
        return MovieSerie[id];
    }

    update(id,options){
        MovieSerie[id]={...MovieSerie[id],...options}
        return MovieSerie[id];
    }

    list(){
        return MovieSerie;
    }

    find(id){
        return MovieSerie[id];
    }
}