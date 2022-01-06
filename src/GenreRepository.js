const genre= {}
const nextId= 1;

export default class GenreRepository{
    
    create(options){
        const id=nextId;
        newGenre={...options,id};
        genre[id]=newGenere;
        nextId++;
        return newGenre
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