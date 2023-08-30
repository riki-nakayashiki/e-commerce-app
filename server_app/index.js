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
      
      res.json(data);
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


// LISTEN
app.listen(port, (err)=>{
    if(err) {
        console.log('There was a problem: ', err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});