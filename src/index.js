import Project from "./project";
import TodoItem from "./todo-items";
import Popup from "./popup";
import UI from "./ui";
import "./styles.css";

const root = document.getElementById("content");
const ui = new UI(content);

const todoPopup = new Popup({
  popupId: "todo-popup",
  openBtnId: "create-todo-btn",
  closeBtnId: "todo-cancel",
  saveBtnId: "todo-save",
});

document.getElementById("todo-save").addEventListener("click", () => {
  const todo = todoPopup.save();
  if(todo) ui.renderTodo(todo);
})