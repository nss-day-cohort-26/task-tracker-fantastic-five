const database = require("./database")
const modal = require("./modal")

const categoryMaker = () => {

    let categoryInput = document.getElementById("categoryInput").value;
    database.categories.push(categoryInput);

    const taskDropDown = document.querySelector("#taskDropDown");

    for (let i = 0; i < categories.length; i++) {
        let options = categories[i];
        let optionEl = document.createElement("option");
        optionEl.innerHTML = options;
        optionEl.value = options;
        taskDropDown.appendChild(optionEl);

    }

};

module.exports = categoryMaker;