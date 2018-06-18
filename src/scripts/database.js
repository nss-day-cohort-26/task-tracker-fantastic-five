
const database = Object.create({}, {
    toDo: {
        value: {
                title: "Finish homework",
                description: "Need to do HW",
                dueDate: "06/19/2018",
                dateCompleted: "",
                category: "uncategorized",
                id: 0
            },
        writable: true,
        enumerable: true
    },
    doing: {
        value: {
            title: "Wipe your butt",
            description: "Use baby wipes for best result",
            dueDate: "06/18/2018",
            dateCompleted: "",
            category: "uncategorized",
            id: 1
        },
        writable: true,
        enumerable: true
    },
    done: {
        value: {
            title: "Pick your nose",
            description: "Digging for gold",
            dueDate: "06/20/2018",
            dateCompleted: "",
            category: "uncategorized",
            id: 2
        },
        writable: true,
        enumerable: true,
    },
    archive: {
        value: {
            title: "",
            description: "",
            dueDate: "",
            dateCompleted: "",
            category: "uncategorized",
            id: 3
        },
        writable: true,
        enumerable: true,
    },
    categories: [],
    currentId: {
        value: 4
    }

});

module.exports = database;