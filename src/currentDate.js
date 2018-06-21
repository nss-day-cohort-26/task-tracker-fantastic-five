
const currentDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0
    mm + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd; // for single digit days
    }

    if (mm < 10) {
      mm = "0" + mm; // for single digit months
    }

    today = mm + "/" + dd + "/" + yyyy;

    return today;
  };

  module.exports = currentDate;