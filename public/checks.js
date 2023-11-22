function isNonNegInt(q, returnErrors = false) {
  errors = []; //assume no errors at first
  if (Number(q) !=q) errors.push('Please enter a Number!'); //Check if string is a number value
  if (q < 0) errors.push('Amount cannot be negative'); //Check if non negative
  if (parseInt(q) !=q) errors.push('Must be a whole number'); //Check that it is an integer
  return returnErrors ? errors : errors.length == 0; //return errors
}

//Check for validation, return true and or false https://stackoverflow.com/questions/32410590/form-submission-after-javascript-validation
function quantitiesValid() {
  let quantity = [];
  for (let i in drinks) {
    var numberValid = document.getElementById(quantity[i]).value;
    if (!isNonNegInt(numberValid)) {
      document.write(`
        <td align="center"><div style="color:red;">${errors.join(", ")}</div></td>
      `);
      return false;
    }
    return true;
  }
}

function generate_item_rows(product_quantities_array) {
  for (let i in product_quantities_array) {
    let extended_price = product_quantities_array[i] * drinks[i].price;
    let errors = isNonNegInt(product_quantities_array[i], true);
    if (errors.length > 0) { //If Errors
    document.write(` 
    `);
    } else { //IF no errors
      document.write(`
        <tr class="item">
        <td>Domain name (1 year)</td>

        <td>$10.00</td>
        </tr>
      `);
    subtotal += extended_price;
    }
  }
};
let subtotal = 0; //Subtotal Declaration