import Project from "./project";
import TodoItem from "./todo-items";
import Popup from "./popup";
import UI from "./ui";
import "./styles.css";

const root = document.getElementById("content");
const ui = new UI(root);

const unassignedProject = new Project("Default Project");

const todoPopup = new Popup({
  popupId: "todo-popup",
  openBtnId: "create-todo-btn",
  closeBtnId: "todo-cancel",
  saveBtnId: "todo-save",
  onSave: (data) => {
    const todo = new TodoItem(data.title, data.description, data.dueDate, data.priority);
    unassignedProject.addTodo(todo);
    ui.renderTodo(todo);
  },
});