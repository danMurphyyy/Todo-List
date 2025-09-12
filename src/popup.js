export default class Popup {
  constructor({popupId, openBtnId, closeBtnId, saveBtnId, onSave}) {
    this.popup = document.getElementById(popupId);
    this.openBtn = document.getElementById(openBtnId)
    this.closeBtn = document.getElementById(closeBtnId);
    this.saveBtn = document.getElementById(saveBtnId);
    this.onSave = onSave;

    if (this.openBtn) {
      this.openBtn.addEventListener("click", () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.close());
    }

    if (this.saveBtn) {
      this.saveBtn.addEventListener("click", () => this.handleSave());
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

  handleSave() {
    const title = document.getElementById("todo-title").value.trim();
    const description = document.getElementById("to-desc").value.trim();
    const dueDate = document.getElementById("todo-date").value || null;
    const priority = document.getElementById("todo-priority").value || "medium";

    console.log("Title input value:", document.getElementById("todo-title").value);
    console.log("Trimmed title:", title);

    if (!title) {
      alert("Please enter a title for your todo!");
      return
    }

    const formData = {title, description, dueDate, priority};

    if (typeof this.onSave === "function") {
      this.onSave(formData);
    }

    document.getElementById("todo-title").value = "";
    document.getElementById("to-desc").value = "";
    document.getElementById("todo-date").value = "";
    document.getElementById("todo-priority").value = "medium";

    this.close();
  }
}