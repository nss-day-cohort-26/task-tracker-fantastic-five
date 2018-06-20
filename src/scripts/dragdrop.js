const allowDrop = (event) => {
    event.preventDefault();
 }

const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
 }

const drop = () => {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    // if (el.id === "toDo") {
    //     alert("Cant do that")
    // }  else
    this.appendChild(document.getElementById(data));
 }


 module.exports = {allowDrop, drag, drop}

