import Project from "./project";
import TodoItem from "./todo-items";
import Popup from "./popup";
import "./styles.css";

const defaultProject = new Project("Default");

const myTodo = new TodoItem("clean Room", "clean it all", "2025-09-15", "high-priority");

defaultProject.addTodo(myTodo);

console.log(defaultProject);

const root = document.getElementById("content");
root.innerHTML = "<p>Hello from Webpack Starter 🚀</p>";