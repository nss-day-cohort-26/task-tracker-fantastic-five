const modal = document.querySelector(".modal");
const taskBtn = document.querySelector("#createTask");
const categoryBtn = document.querySelector("#createCategory");

const taskBtnCreator = () => {

  // Add Modal to Screen
  taskBtn.addEventListener("click", () => {
    modal.innerHTML = `<div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create a Task</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Name: </p><input id="taskInput" type="text">
        <br>
        <p>Description: </p><input id="descriptionInput" type="text">
        <br>
        <p>Due Date </p><input id="dueDateInput" type="text">
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" id="taskSubmit">Submit</button>
        <select>
            <option value="item1">Uncategorize</option>
            <option value="item2">Item2</option>
            <option value="item3">Item3</option>
            <option value="item4">Item4</option>
        </select>
        <button class="button is-primary">Submit</button>
        <select id="taskDropDown"></select>
      </footer>
    </div>`;
    modal.classList.add("is-active");

    //Remove Modal from Screen
    document.querySelector(".delete").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });

  });

};

const categoryBtnCreator = () => {

  // Add Modal to Screen
  categoryBtn.addEventListener("click", () => {
    modal.innerHTML = `<div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create a Category</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Name: </p><input id="categoryInput" type="text">
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Submit</button>
      </footer>
    </div>`;
  modal.classList.add("is-active");
});

module.exports = taskBtnCreator
      `<div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create a Category</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <p>Name: </p><input id="categoryInput" type="text">
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Submit</button>
        </footer>
      </div>`;
    modal.classList.add("is-active");

    // Remove Modal from Screen
    document.querySelector(".delete").addEventListener("click", () => {
      modal.classList.remove("is-active");
    });

  });

};

taskBtnCreator();
categoryBtnCreator();
