const database = require("./database");
const saveDatabase = require("./saveLocal");

const categoryMaker = () => {
    let categoryInput = document.getElementById("categoryInput").value;

    if (categoryInput === "") {
        alert("Please add a Category Name.")
    } else {
        database.categories.push(categoryInput);
        alert(`${categoryInput} has been added to your List of Categories!`);
    }

    saveDatabase();

};

module.exports = categoryMaker;