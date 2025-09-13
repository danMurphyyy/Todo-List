import Project from "./project";
import ProjectManager from "./projectManager";
import TodoItem from "./todo-items";
import Popup from "./popup";
import UI from "./ui";
import "./styles.css";

const root = document.getElementById("content");
const ui = new UI(root);
const projectManager = new ProjectManager();

function refreshUI() {
  ui.renderProjectDropdown(projectManager.getProjects(), projectSelect);
  ui.renderProjects(projectManager.getProjects(), (project) => {
    projectManager.setCurrentProject(project);
  })
}

const todoPopup = new Popup({
  popupId: "todo-popup",
  openBtnId: "create-todo-btn",
  closeBtnId: "todo-cancel",
  saveBtnId: "todo-save",
  onSave: (data) => {
    const todo = new TodoItem(data.title, data.description, data.dueDate, data.priority, data.project);
    projectManager.getCurrentProject().addTodo(todo);
    ui.renderTodo(todo);
  },
});

const projectSelect = document.getElementById("todo-project");
refreshUI();