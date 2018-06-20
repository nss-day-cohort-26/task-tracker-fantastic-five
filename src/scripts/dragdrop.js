const database = require("./database")
const saveDatabase = require("./saveLocal")

const drag = (event) => { //ondragstart attached to task
    console.log("drag started");
    event.dataTransfer.setData("text", event.target.classList);
    console.log(event.target.classList);


}

const allowDrop = (event) => { //attached to column
    console.log("ondragover");
    event.preventDefault();

}

const drop = function(event) { //attached to column
    event.preventDefault();
    console.log("ondrop");

    let data = event.dataTransfer.getData("text");
    console.log(event.target, data);

    event.target.appendChild(document.querySelector(`.${data}`))

    database[event.target] = event;
    console.log(event.target)
    saveDatabase()
}

// let targets = document.querySelector(".column");
// targets.forEach(target => {
//     // if (target.id === "toDo") {
//         //     alert("Cant do that")
//         // }  else
//         target.ondragover = allowDrop;
//         target.ondrop = drop;
//     })


 module.exports = {allowDrop, drag, drop}

