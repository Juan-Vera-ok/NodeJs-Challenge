const express = require ('express');
const app = express();

app.post('/characters', function(req,res ){
    res.send('Lampone, te agachas y te la ponen');
})

app.listen(3000)