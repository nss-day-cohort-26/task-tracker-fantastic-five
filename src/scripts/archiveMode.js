var database = require("./database")
const createCard = require("./createCard")
var loadDatabase = require("./loadLocal")

const archiveMode = function(){
    if(localStorage.getItem("mykey") !== null){
        database = loadDatabase()
    }
    const archiveBtn = document.querySelector("#archives")
    archiveBtn.addEventListener("click", () => {
        document.getElementById("dom-output").innerHTML = "";
        let c = 0;
        let c2 = 0;
        for(item in database.archive){
            if(c2 === 0){  //every 6th item gets a new row
                let a = document.createElement("div");
                a.className = "columns"
                let colId = "c"+ c.toString();
                a.id = colId
                document.querySelector("#dom-output").appendChild(a);
            }
            let b = document.createElement("div");
            b.className = "column";
            let myId = "d" + c.toString() + c2.toString();
            b.id = myId
            b.style.height = "150px"  //creates a div to hold the card
            document.getElementById("c"+ c.toString()).appendChild(b); //appends column to row
            createCard(database.archive[item], myId) //creates card
            let aId = database.archive[item].id;
            if(document.getElementById(aId).lastChild.style.color === "red"){  //removes overdue notice
                document.getElementById(aId).removeChild(document.getElementById(aId).lastChild)
            }

            c2++;
            if(c2 === 5){
                c++;
                c2 = 0;
            }
        }
    })
}

module.exports = archiveMode;