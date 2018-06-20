let database = require("./database")

function graphs() {
    console.log("graph runs")
    document.querySelector("#dom-output").innerHTML = "";

    let bigDiv = document.createElement("div");
    bigDiv.className = "column"

    let smallDiv1 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = "Active tasks by column.  To Do: Red.  Doing: Blue.  Done: Green.  Archive: Yellow."
    smallDiv1.appendChild(p1);

    let graph1 = document.createElement("div");
    graph1.style.padding = "0";
    graph1.style.border = "1px solid black"
    graph1.style.height = "75px";
    graph1.style.width = "500px";
    graph1.style.display = "flex";

    let total = 0;
    let toDo = 0
    let doing = 0;
    let archive = 0;
    let done = 0;

    for (item in database.toDo) {
        toDo++
    }

    for (item in database.doing) {
        doing++;
    }

    for (item in database.done) {
        done++;
    }

    for (item in database.archive) {
        archive++;
    }

    total = toDo + doing + done + archive;

    console.log("total: ", total);
    console.log(toDo, doing, done, archive)

    let toDo1 = document.createElement("div");
    toDo1.style.height = "100%";
    toDo1.style.width = `${(toDo / total) * 100}%`
    toDo1.style.backgroundColor = "red"
    graph1.appendChild(toDo1)

    let doing1 = document.createElement("div");
    doing1.style.height = "100%";
    doing1.style.width = `${(doing / total) * 100}%`
    doing1.style.backgroundColor = "blue"
    graph1.appendChild(doing1)

    let done1 = document.createElement("div");
    done1.style.height = "100%";
    done1.style.width = `${(done / total) * 100}%`
    done1.style.backgroundColor = "green"
    graph1.appendChild(done1)

    let archive1 = document.createElement("div");
    archive1.style.height = "100%";
    archive1.style.width = `${(archive / total) * 100}%`
    archive1.style.backgroundColor = "yellow"
    graph1.appendChild(archive1)


    smallDiv1.appendChild(graph1);
    bigDiv.appendChild(smallDiv1)


    let smallDiv2 = document.createElement("div");  //graph 2 categories


    let graph2 = document.createElement("div");
    graph2.style.padding = "0";
    graph2.style.border = "1px solid black"
    graph2.style.height = "75px";
    graph2.style.width = "500px";
    graph2.style.display = "flex";

    let myArray = [];

    for (item in database.toDo) {
        myArray.push(database.toDo[item])
    }

    for (item in database.doing) {
        myArray.push(database.doing[item])
    }

    for (item in database.done) {
        myArray.push(database.done[item])
    }

    for (item in database.archive) {
        myArray.push(database.archive[item])
    }

    let catObj = {}

    for (let i = 0; i < myArray.length; i++) {
        let found = false;
        for (item in catObj) {
            if (catObj[item].category === myArray[i].category) {
                found = true;
            }
        }
        if (found === true) {
            catObj[myArray[i].category].count++;
        } else {
            catObj[myArray[i].category] = {
                category: myArray[i].category,
                count: 1
            }
        }
    }

    let colorArray = ["red", "blue", "yellow", "green", "orange", "brown", "black", "white", "purple", "teal", "lightblue"]
    let j = 0;

    let renderDiv = function (s, t) {
        let r = document.createElement("div");
        r.style.height = "100%";
        r.style.width = `${(s / t) * 100}%`
        r.style.backgroundColor = colorArray[j];
        j++;
        return r;
    }

    let myP = document.createElement("p");
    myP.textContent = "Active tasks by category.  "

    for (item in catObj) {
        let a = renderDiv(catObj[item].count, myArray.length);
        graph2.appendChild(a);
        myP.textContent += `${catObj[item].category}: ${colorArray[j - 1]}.  `
    }


    smallDiv2.appendChild(myP)
    smallDiv2.appendChild(graph2);
    bigDiv.appendChild(smallDiv2);

    let smallDiv3 = document.createElement("div");  //graph 3

    let timeCheck = function (obj) {

        let dueYear = obj.dueDate.slice(6, 10);
        let dueDay = obj.dueDate.slice(3, 5);
        let dueMonth = obj.dueDate.slice(0, 2);

        let comYear = obj.dateCompleted.slice(6, 10);
        let comDay = obj.dateCompleted.slice(3, 5);
        let comMonth = obj.dateCompleted.slice(0, 2);

        if (comYear > dueYear) {
            return false;
        } else if (comYear === dueYear && comMonth > dueMonth) {
            return false;
        } else if (comYear === dueYear && comMonth === dueMonth && comDay > dueDay) {
            return false;
        } else {
            return true;
        }
    }

    let onTimec = 0;
    let latec = 0;

    for (item in database.done) {
        if (timeCheck(database.done[item]) === true) {
            onTimec++;
        } else {
            latec++
        }
    }

    for (item in database.archive) {
        if (timeCheck(database.archive[item]) === true) {
            onTimec++;
        } else {
            latec++
        }
    }

    let graph3 = document.createElement("div");
    graph3.style.padding = "0";
    graph3.style.border = "1px solid black"
    graph3.style.height = "75px";
    graph3.style.width = "500px";
    graph3.style.display = "flex";

    j = 0;
    let onTime = renderDiv(onTimec, (onTimec + latec));
    let late = renderDiv(latec, (onTimec + latec));

    graph3.appendChild(onTime);
    graph3.appendChild(late);

    let timeP = document.createElement("p");
    timeP.textContent = "On time tasks are red.  Late tasks are blue."

    smallDiv3.appendChild(timeP);
    smallDiv3.appendChild(graph3);
    bigDiv.appendChild(smallDiv3)

    let smallDiv4 = document.createElement("div");  //graph 4

    let newObj = { categories: [] }

    let timeToComplete = function (obj) {
        let assignedYear = obj.dateAssigned.slice(6, 10);
        let assignedDay = obj.dateAssigned.slice(3, 5);
        let assignedMonth = obj.dateAssigned.slice(0, 2);

        let comYear = obj.dateCompleted.slice(6, 10);
        let comDay = obj.dateCompleted.slice(3, 5);
        let comMonth = obj.dateCompleted.slice(0, 2);
        let days = 0;

        while (comYear > assignedYear) {
            comYear--;
            days += 365;
        }

        while (comMonth > assignedMonth) {
            if (assignedMonth === "01" || assignedMonth === "03" || assignedMonth === "05" || assignedMonth === "07" || assignedMonth === "08" || assignedMonth === "10" || assignedMonth === "12") {
                days += 31
            } else if (assignedMonth === "02") {
                days += 28;
            } else if (assignedMonth === "04" || assignedMonth === "06" || assignedMonth === "09" || assignedMonth === "11") {
                days += 30;
            }
            assignedMonth++;
        }

        while (assignedMonth > comMonth) {
            if (comMonth === "01" || comMonth === "03" || comMonth === "05" || comMonth === "07" || comMonth === "08" || comMonth === "10" || comMonth === "12") {
                days -= 31
            } else if (comMonth === "02") {
                days -= 28;
            } else if (comMonth === "04" || comMonth === "06" || comMonth === "09" || comMonth === "11") {
                days -= 30;
            }
            comMonth++;
        }

        while (assignedDay < comDay) {
            day++;
            assignedDay++;
        }
        while (assignedDay > comDay) {
            day--;
            assignedDay--;
        }
        return days;
    }

    for (item in database.done) {
        if (newObj.categories.includes(database.done[item].category)) {
            newObj[database.done[item].category].push(timeToComplete(database.done[item]))
        } else {
            newObj[database.done[item].category] = [timeToComplete(database.done[item])]
            newObj.categories.push(database.done[item].category)
        }
    }

    let graph4 = document.createElement("div");
    graph4.style.padding = "0";
    graph4.style.border = "1px solid black"
    graph4.style.height = "75px";
    graph4.style.width = "500px";
    graph4.style.display = "flex";

    let newP4 = document.createElement("p");
    newP4.textContent = "Average time to complete by category.  "

    j = 0;

    let totalAvgArr = [];

    for (item in newObj) {
        if (item !== "categories") {
            let avg = 0;
            for (let i = 0; i < newObj[item].length; i++) {
                avg += (newObj[item][i] / newObj[item].length)
            }
            totalAvgArr.push(avg)
        }
    }

    let totalAvg = 0;

    for (let i = 0; i < totalAvgArr.length; i++) {
        totalAvg += (totalAvgArr[i] / totalAvgArr.length)
    }


    for (item in newObj) {
        if (item !== "categories") {
            console.log("problem here")
            newP4.textContent += `${item}: ${colorArray[j - 1]}.  `
            let avg = 0;
            for (let i = 0; i < newObj[item].length; i++) {
                avg += (newObj[item][i] / newObj[item].length)
            }
            graph4.appendChild(renderDiv(avg, totalAvg));
        }
    }

    smallDiv4.appendChild(newP4);
    smallDiv4.appendChild(graph4);
    bigDiv.appendChild(smallDiv4)

    document.querySelector("#dom-output").appendChild(bigDiv)
}

module.exports = graphs;
