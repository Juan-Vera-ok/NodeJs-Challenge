import CharacterRepository from './CharacterRepository.js';
import MovieSerieRepository from './MovieSerieRepository.js';
import GenreRepository from './GenreRepository.js';
import MovieParticipationRepository from './MovieParticipationRepository.js';
import GenreMovieAssociationRepository from './GenreMovieAssociationRepository.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const repoCharacter= new CharacterRepository();
const repoMovie= new MovieSerieRepository();
const repoGenre = new GenreRepository();
const repoParticipation= new MovieParticipationRepository();
const repoGenreMovieAssociation = new GenreMovieAssociationRepository();
//POST character creation
app.post('/characters', function(req,res ){
    res.json(repoCharacter.create(req.body))
})

//PUT character update
app.put('/characters/:',function(req, res){
    res.json(repoCharacter.update(req.body.id,req.body));
})

//GET character especification
app.get('/character/:',function(req,res){
    res.json(repoCharacter.find(req.body.id));
})

//GET character list
app.get('/characters',function(req,res){
    res.json(repoCharacter.list());
})

//DELETE delete character
app.delete('/character/:',function(req,res){
    res.json(repoCharacter.delete(req.body.id));
})

//POST movie creation
app.post('/movies',function(req,res){
    res.json(repoMovie.create(req.body))
})

//PUT movie update
app.put('/movie/:',function(req,res){
    res.json(repoMovie.update(req.body.id,req.body))
})

//GET movie especification
app.get('/movie/:',function(req,res){
    res.json(repoMovie.find(req.body.id))
})

//GET movie list
app.get('/movies',function(req,res){
    res.json(repoMovie.list())
})

//DELETE delete movie
app.delete('/movie/:',function(req,res){
    res.json(repoMovie.delete(req.body.id))
})
//TODO: Remover endpoints de generos
//GET genres create
app.post('/genre',async function(req,res){
    res.json(await repoGenre.create(req.body))
})

//DELETE genres delete
app.delete('/genre', async function(req,res){
    res.json(await repoGenre.delete(req.body))
})

//GET genres list
app.get('/genres',async function(req,res){
    res.json(await repoGenre.list())
})

//GET participation list
app.get('/repoParticipation',function(req,res){
    res.json(repoParticipation.list())
})

//GET association list
app.get('/repoGenreMovieAssociation',function(req,res){
    res.json(repoGenreMovieAssociation.list())
})


app.listen(3000)