const express = require('express');
const app = express();
const product_data = require(__dirname + "/drinks.json");
const qs = require('querystring');

app.use(express.urlencoded({ extended: true }));

app.all('*', function (request, response, next) {
  console.log(request.method + ' to ' + request.path);
  next();
});

//Server gives product data to page by defining products variable
app.get("/product_data.js", function (req, res) {
  res.type('.js');
  res.send(`let drinks = ${JSON.stringify(product_data)}`)
});

//rootdir will be in public starting from index.html
app.use(express.static(__dirname + '/public'));

//Start Server
app.listen(8080, () => console.log(`listening on port 8080`)); 
