var database = Object.create({}, {
    toDo: {
        value: {
            0: {
                title: "Finish homework",
                description: "Need to do HW",
                dueDate: "06/19/2018",
                dateCompleted: "",
                category: "uncategorized",
                id: 0,
                assignedDate: "06/19/2017",
            }
        },
        writable: true,
        enumerable: true
    },
    doing: {
        value: {
            1: {
                title: "Wipe your butt",
                description: "Use baby wipes for best result",
                dueDate: "06/18/2018",
                dateCompleted: "",
                category: "uncategorized",
                id: 1,
                assignedDate: "06/19/2017"
            }
        },
        writable: true,
        enumerable: true
    },
    done: {
        value: {
            2: {
                title: "Pick your nose",
                description: "Digging for gold",
                dueDate: "06/20/2018",
                dateCompleted: "",
                category: "uncategorized",
                id: 2,
                assignedDate: "06/19/2017"
            }
        },
        writable: true,
        enumerable: true,
    },
    archive: {
        value: {
            3: {
                title: "test",
                description: "find the answer",
                dueDate: "09/09/2020",
                dateCompleted: "09/10/2020",
                category: "uncategorized",
                id: 3,
                assignedDate: "06/19/2017"
            }
        },
        writable: true,
        enumerable: true,
    },
    categories: {
        value: ["uncategorized"],
        writable: true,
        enumerable: true
    },
    currentId: {
        value: 9
    }

});

module.exports = database;