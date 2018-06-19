const database = require("./database")
const modal = require("./modal")

const categoryMaker = () => {
    let submitBtn = document.getElementById("categorySubmit")
    submitBtn.addEventListener("click", () => {
        let categories = document.getElementById("categoryInput");
        database.category.push(categories.value);

        const taskDropDown = document.querySelector("#taskDropDown");

        for (let i =0; i < categories.length; i++) {
            let options = categories[i];
            let optionEl = document.createElement("option");
            optionEl.innerHTML = options;
            optionEl.value = opotions;
            taskDropDown.appendChild(optionEl);

        }
        console.log(database.category)
    });
};

module.exports = categoryMaker;