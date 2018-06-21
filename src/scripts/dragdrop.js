let database = require("./database")
const saveDatabase = require("./saveLocal")
let loadDatabase = require("./loadLocal")

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
    database = loadDatabase();
    event.preventDefault();

    let data = event.dataTransfer.getData("text");

    event.target.appendChild(document.querySelector(`.${data}`))

    if ( event.target.id === "done") {
        let archiveBtn = document.createElement("button")
        archiveBtn.type = "button";
        archiveBtn.addEventListener("click", archiveMode)
        archiveBtn.textContent = "Archive"
        event.target.lastChild.appendChild(archiveBtn)
    }

    console.log("x: ", event.target.lastChild)

    var myId = event.target.lastChild.id.toString();
    let myObj = {}

    console.log(myId);

    for(item in database.toDo){
        if(database.toDo[item].id.toString() === myId){
            console.log("match found")
            myObj = database.toDo[item];
            delete database.toDo[item];
        }
    }

    for(item in database.doing){
        if(database.doing[item].id.toString() === myId){
            myObj = database.doing[item];
            delete database.doing[item];
        }
    }
    for(item in database.done){
        if(database.done[item].id.toString() === myId){
            myObj = database.done[item];
            delete database.done[item]
            let targetDiv = event.target.lastChild

        }
    }

    console.log(myObj)
    database[event.target.id][myId] = myObj;
    //Old task is being removed
    //New task is being saved

    console.log(database)
    saveDatabase(database);
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

