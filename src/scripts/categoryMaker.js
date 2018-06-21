let database = require("./database");
const saveDatabase = require("./saveLocal");
const loadDatabase = require("./loadLocal")

const categoryMaker = () => {
    if(localStorage.getItem("mykey") !== null){

        console.log("database loads")
        database = loadDatabase()

    }
    let categoryInput = document.getElementById("categoryInput").value;

    if (categoryInput === "") {
        alert("Please add a Category Name.")
    } else {
        database.categories.push(categoryInput);
        alert(`${categoryInput} has been added to your list of Categories!`);
    }

    console.log("categoryMaker saves database")
    saveDatabase(database);

};

module.exports = categoryMaker;