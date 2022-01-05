import CharacterRepository from './CharacterRepository.js';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const repo= new CharacterRepository();
app.post('/characters', function(req,res ){
    res.json(repo.insert(req.body))
})

app.listen(3000)