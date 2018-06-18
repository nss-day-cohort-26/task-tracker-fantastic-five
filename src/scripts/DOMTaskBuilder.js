const database = require("./database");
const createCard = require("./createCard");

//DOM creator
const DOMTaskBuilder = () => {
    //get Div element in HTML
    let mainDiv = document.querySelector("#dom-output")
    mainDiv.innerHTML=""

    let mainDivFragment = document.createDocumentFragment();

    //Create the Columns div to hold all task columns
    let divColumns = document.createElement("div");
    divColumns.className = "columns";


    //creates To-Do column with header and appends to columns div
    let divColumn1 = document.createElement('div');
    divColumn1.className = "column"
    divColumn1.id = "toDo"
    let divColumn1H3 = document.createElement('h3');
    divColumn1H3.textContent = "To-Do";

    for (task in database.toDo) {
        createCard(database.toDo[task], "toDo")

    }
    divColumn1.appendChild("divColumn1H3");
    divColumns.appendChild("divColumn1");

//creates Doing column with header and appends to columns div
    let divColumn2 = document.createElement('div');
    divColumn2.className = "column"
    divColumn2.id = "doing"
    let divColumn2H3 = document.createElement('h3');
    divColumn2H3.textContent = "Doing";
    for (task in database.doing) {
        createCard(database.doing[task], "doing")
    }
    divColumn2.appendChild("divColumn2H3");
    divColumns.appendChild("divColumn2")

    //creates done column with header and appends to columns div
    let divColumn3 = document.createElement('div');
    divColumn3.className = "column"
    divColumn3.id = "done"
    let divColumn3H3 = document.createElement('h3');
    divColumn3H3.textContent = "Done";
    for (task in database.done) {
        createCard(database.done[task], "done")
    }
    divColumn3.appendChild("divColumn3H3");
    divColumns.appendChild("divColumn3")

    //apphend all columns to fragement and then to mainDiv
    mainDivFragment.appendChild("divColumns");
    mainDiv.appendChild("mainDivFragment");
}

module.exports = DOMTaskBuilder