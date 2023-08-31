// Import
const express = require('express');
const cors = require('cors');
const { parse } = require("csv-parse");
const fs = require('fs');


// Instance
const app = express();
const port = 8081;


// CORS
app.use(cors({
    origin: 'http://localhost:8080'
}));

app.options('/', (req,res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.sendStatus(200);
});


// Read CSV file
async function readCsvFile(file) {
    return new Promise((resolve, reject) => {
        const results = [];
        const input = fs.createReadStream(file);
        input
            .pipe(parse({ delimiter: ',' }))
            .on('data', function(dataRow) {
                // console.log(dataRow);
                results.push(dataRow);
            })
            .on('end', function() {
                // console.log('Read CSV: ');
                // console.log(results);
                resolve(results);
            })
            .on('error', function(error) {
                reject(error);
            });
    });
}


// GET
app.get('/data', async (req, res) => {
    try {
    // For JSON
    //   const jsonData = await fs.promises.readFile('./data/users.json');
    //   const data = JSON.parse(jsonData);

    // For CSV
      const data = await readCsvFile('./data/products.csv');

      const jsonObj = [];
        for(let i = 1; i < data.length; i++) {
            const obj = {};
            for(let j = 0; j < data.length+1; j++) {
            obj[data[0][j]] = data[i][j];
            }
            jsonObj.push(obj);
        }
        JSON.stringify(jsonObj);
    //   console.log("DATA: ",jsonObj)
      res.json(jsonObj);
    } catch (error) {
      console.error('Error loading events:', error);
    }
});

// cart
app.get('/cart', async (req, res) => {
    try {
    // For JSON
      const jsonData = await fs.promises.readFile('./data/cart.json');
      const data = JSON.parse(jsonData);
      res.json(data);
    } catch (error) {
      console.error('Error loading events:', error);
    }
});

app.post('/cart', async (req, res) => {
    const newItem = req.body;
    try {
        console.log("CHECK RESPONSE--------------------: ",newItem)
        const jsonData = await fs.promises.readFile('./data/cart.json');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        const data = JSON.parse(jsonData);
        data.push(newItem)
        // data.splice(0, 1)
        await fs.promises.writeFile('./data/cart.json', JSON.stringify(data));
        res.json(newItem);
    } catch (error) {
      console.error('Error loading events:', error);
    }
});


// LISTEN
app.listen(port, (err)=>{
    if(err) {
        console.log('There was a problem: ', err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});