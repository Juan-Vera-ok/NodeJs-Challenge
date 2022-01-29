import CharacterRepository from './CharacterRepository.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const repo= new CharacterRepository();

//POST character creation
app.post('/characters', function(req,res ){
    res.json(repo.create(req.body))
})

//PUT character update
app.put('/characters/:',function(req, res){
    res.json(repo.update(req.body.id,req.body));
})

//GET character especification
app.get('/character/:',function(req,res){
    res.json(repo.find(req.body.id));
})

//GET character list
app.get('/characters',function(req,res){
    res.json(repo.list());
})

app.listen(3000)