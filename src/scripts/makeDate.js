const makeDate = () => {
    let date = new Date();
    let month = date.getMonth();
    month = month.toString();
    date = date.toString();

    let dateArray = date.split(" ");
    let myDateArray = [];
    if (month.length > 1) {
        myDateArray.push(month); //month
    } else {
        let b = "0" + month;
        myDateArray.push(b);
    }

    myDateArray.push(dateArray[2]) //day
    myDateArray.push(dateArray[3]) //year

    let myDate = myDateArray[0] + "/" + myDateArray[1] + "/" + myDateArray[2];
    return myDate;
}

module.exports = makeDate