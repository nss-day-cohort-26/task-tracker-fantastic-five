var database = require("./database")

const loadDatabase = function(){
    console.log("loading")
    let databaseString = localStorage.getItem("mykey")
    database = JSON.parse(databaseString);
}

module.exports = loadDatabase