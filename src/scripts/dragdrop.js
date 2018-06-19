const dragFunc = {
    dropAllow: function allowDrop(ev) {
        ev.preventDefault();
    },

    drag: function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    },

    drop: function drop(ev, el) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (el.id === "To-Do") {
            alert("Cant do that")
        }  else
        el.appendChild(document.getElementById(data));
    }
}

module.exports = dragFunc;