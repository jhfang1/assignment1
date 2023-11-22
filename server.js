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

//Validate Purcahse
app.post('/process_purchase', function (request, response, next) {
  console.log(request.body);
  // validate quantities 
  var q = request.body['quantity_textbox'];
  if (typeof q != 'undefined') {
      response.send(`<b>Thank you for purchasing ${q} things!</b>`);
  }});

//rootdir will be in public starting from index.html
app.use(express.static(__dirname + '/public'));

//Start Server
app.listen(8080, () => console.log(`listening on port 8080`)); 

function isNonNegInt(q, returnErrors = false) {
  errors = []; //assume no errors at first
  if (Number(q) !=q) errors.push('Please enter a Number!'); //Check if string is a number value
  if (q < 0) errors.push('Amount cannot be negative'); //Check if non negative
  if (parseInt(q) !=q) errors.push('Must be a whole number'); //Check that it is an integer
  return returnErrors ? errors : errors.length == 0; //return errors
}