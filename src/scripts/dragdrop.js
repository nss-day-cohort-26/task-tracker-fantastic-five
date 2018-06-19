function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (el.id === "To-Do") {
        alert("Cant do that")
    }  else
    el.appendChild(document.getElementById(data));
}

