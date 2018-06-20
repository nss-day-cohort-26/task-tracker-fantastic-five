const createCardButton = require("./createCardButton");
const categoryMaker = require("./categoryMaker");
var database = require("./database");


// Task Creator

const taskBtnCreator = () => {

const modal = document.querySelector(".modal");
const taskBtn = document.querySelector("#createTask");

  // Add Modal to Screen

  taskBtn.addEventListener("click", () => {
    modal.innerHTML = `<div class="modal-background has-text-centered"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title has-text-centered">Create a Task</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body has-text-centered">
        <p>Name: </p><input id="taskInput" type="text">
        <br>
        <p>Description: </p><input id="descriptionInput" type="text">
        <br>
        <p>Due Date: </p><input id="dueDateInput" type="text">
        <br>
        <p>Category <i>( optional )</i>: </p><select id="taskDropDown"></select>
      </section>
      <footer class="modal-card-foot buttons is-centered">
        <button class="button is-link" id="taskSubmit">Submit</button>
      </footer>
    </div>`;
    modal.classList.add("is-active");

    const taskDropDown = document.querySelector("#taskDropDown");

    for (let i = 0; i < database.categories.length; i++) {
      let options = database.categories[i];
      let optionEl = document.createElement("option");
      optionEl.innerHTML = options;
      optionEl.value = options;
      taskDropDown.appendChild(optionEl)
  }

    const taskSubmit = document.getElementById("taskSubmit");
    taskSubmit.addEventListener("click", createCardButton);

    //Remove Modal from Screen
    document.querySelector(".delete").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });

  });

};

// Category Creator

const categoryBtnCreator = () => {

  const modal2 = document.querySelector(".modal");
  const categoryBtn = document.querySelector("#createCategory");

  // Add Modal to Screen

  categoryBtn.addEventListener("click", () => {

    modal2.innerHTML = `<div class="modal-background"></div>
      <div class="modal-card is-info">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Create a Category</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body has-text-centered">
          <p>Name: </p><input id="categoryInput" type="text">
        </section>
        <footer class="modal-card-foot buttons is-centered">
          <button class="button is-link" id="categorySubmit">Submit</button>
        </footer>
      </div>`;
    modal2.classList.add("is-active");

  const categorySubmit = document.querySelector("#categorySubmit");
  categorySubmit.addEventListener("click", categoryMaker);

    // Remove Modal from Screen
    document.querySelector(".delete").addEventListener("click", () => {
      modal2.classList.remove("is-active");
    });

  });

};


module.exports = {categoryBtnCreator, taskBtnCreator}