export default class Popup {
  constructor({popupId, openBtnId, closeBtnId, saveBtnId}) {
    this.popup = document.getElementById(popupId);
    this.openBtn = document.getElementById(openBtnId)
    this.closeBtn = document.getElementById(closeBtnId);
    this.saveBtn = document.getElementById(saveBtnId);

    if (this.openBtn) {
      this.openBtn.addEventListener("click", () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.saveBtn) {
      this.saveBtn.addEventListener("click", () => this.save());
    }
    
    window.addEventListener("click", (e) => {
      if (e.target === this.popup) this.close();
    });
  }

  open() {
    this.popup.classList.add("active");
  }

  close() {
    this.popup.classList.remove("active");
  }

  save() {
    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("to-desc").value;
    const dueDate = document.getElementById("todo-date").value;
    const priority = document.getElementById("todo-priority").value;

    if (!title) {
      alert("Please enter a title for your todo!");
    }

    const todo = new TodoItem(title, description, dueDate, priority);

    document.getElementById("todo-title").value = "";
    document.getElementById("to-desc").value = "";
    document.getElementById("todo-date").value = "";
    document.getElementById("todo-priority").value = "";

    this.close();

    return todo;
  }
}