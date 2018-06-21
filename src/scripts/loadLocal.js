var database = require("./database");

const loadDatabase = function(){
    let databaseString = localStorage.getItem("mykey")
    return JSON.parse(databaseString);
}

module.exports = loadDatabase