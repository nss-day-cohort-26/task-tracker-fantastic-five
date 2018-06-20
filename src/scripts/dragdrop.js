const allowDrop = (ev) => {
    ev.preventDefault();
 }

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
 }

const drop = (ev, el) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (el.id === "toDo") {
        alert("Cant do that")
    }  else
    el.appendChild(document.getElementById(data));
 }

 module.exports = {allowDrop, drag, drop}
