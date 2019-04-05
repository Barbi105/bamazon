var mysql = require("mysql");
let inquirer = require("inquirer");
var Table = require("easy-table");
var chalk = require("chalk");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
  welcomePage();
});

// initial function
function welcomePage() {
  inquirer.prompt([{

    type: "confirm",
    name: "inventory",
    message: "Welcome to Bamazon! Would you like to view our inventory?",
    default: true

  }]).then(function (user) {
    if (user.inventory === true) {
      displayMerch();
    } else {
      console.log("Thank you! Come back soon!");
    }
  });
}

//display table
function displayMerch() {

  console.log(chalk.magenta("\n\nBamazon\n"));
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    var t = new Table;
    res.forEach(function (product) {
      t.cell("Item", product.item_id);
      t.cell("Product", product.product_name);
      t.cell("Department", product.department_name);
      t.cell("Price", product.price);
      t.cell("Quantity", product.stock_quantity);
      t.newRow();
    });
    console.log(t.toString());
    wantToBuy();
  });
}

//function prompting if you want to buy a product
function wantToBuy() {
  inquirer.prompt([{

    type: "confirm",
    name: "purchase",
    message: "Would you like to purchase an item?",
    default: true

  }]).then(function (user) {
    if (user.purchase === true) {
      purchasePrompt();
    } else {
      console.log("Thank you! Come back soon!");
      connection.end();
    }
  });
}

//function asking you what you want to buy and how much
function purchasePrompt() {
  inquirer.prompt([{
    type: "input",
    name: "inputId",
    message: "Please enter the ID number of the item you would like to purchase.",
  },
  {
    type: "input",
    name: "inputNumber",
    message: "How many units of this item would you like to purchase?",
  }
  ]).then(function (userPurchase) {

    //connect to database to find stock_quantity in database

    connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function (err, res) {
      for (var i = 0; i < res.length; i++) {
        if (userPurchase.inputNumber > res[i].stock_quantity) {
          console.log("\n\nSorry! Not enough in stock. Please make a different selection.");
          wantToBuy();

        } else {
          console.log("\n\nAwesome! We can fulfull your order.");
          console.log("You've selected: "
            + res[i].product_name);
          console.log("Department: " + res[i].department_name);
          console.log("Price: " + res[i].price);
          console.log("Quantity: " + userPurchase.inputNumber);
          console.log("----------------");
          console.log("Total: " + res[i].price * userPurchase.inputNumber);

          var newStock = (res[i].stock_quantity - userPurchase.inputNumber);
          var purchaseId = (userPurchase.inputId);
          //console.log(newStock);
          // function update(newStock, purchaseId) {
          connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: newStock
          }, {
            item_id: purchaseId
          }]
          )
          displayMerch();
        };
      }
    })
  })
};



