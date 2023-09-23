//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
//app.use('/', express.static('public'));

//const budget = {
//    myBudget: [
//    {
//        title: 'Eat out',
//        budget: 25
//    },
//    {
//        title: 'Rent',
//        budget: 375
//    },
//    {
//        title: 'Grocery',
//        budget: 110
//    },
//]
//};


//app.get('/hello', (req, res) => {
//    res.send('Hello World!');
//});

//Get data from json file
const datatest = require('./datatest.json');
//Make data seen
app.get('/budget', (req, res) => {
    res.json(datatest);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

