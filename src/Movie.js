

export function newMovie(Name, Characters, Genere){
var Movie = new Array( Name, Characters, Genere);
}

export function addCharacter(Character)
{
    Movie.find(Characters).push(Character)
}

export function addGenere(Genere)
{
    Genere.push(Genere)
}
