const express = require('express');
const app = express();
const drinks_array = require(__dirname + "/public/drinks.json");
module.exports = drinks_array;
const qs = require('querystring');

app.use(express.urlencoded({ extended: true }));

app.all('*', function (request, response, next) {
  console.log(request.method + ' to ' + request.path);
  next();
});

app.get("product_data.js", function (request, response, next) {
  response.type('.js');
  let products_str = `var products = ${JSON.stringify(product_data)};`;
  response.send(products_str);
});

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback
