const database = require("./database");
const saveDatabase = require("./saveLocal");

const categoryMaker = () => {
    let categoryInput = document.getElementById("categoryInput").value;

    database.categories.push(categoryInput);

    saveDatabase(database, "database");

};

module.exports = categoryMaker;