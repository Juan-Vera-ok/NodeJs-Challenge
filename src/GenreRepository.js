const genre= {}
let nextId= 1;

export default class GenreRepository{
    
    create(options){
        const id=nextId;
        genre[id]={...options,id};
        nextId++;
        return genre[id];
    }

    delete(id){
        delete genre[id]
        return genre[id];
    }

    update(id,options){
        genre[id]={...genre[id],...options}
        return genre[id];
    }

    list(){
        return genre;
    }

    find(id){
        return genre[id];
    }
}