export default class UI {
  constructor(container) {
    this.container = container;
  }

  renderTodo(todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-card");
    todoDiv.innerHTML = `
    <h4>${todo.title}</h4>
    <p>${todo.description}</p>
    <small>Due: ${todo.dueDate} | Priority: ${todo.priority}</small>
    `;
    this.container.appendChild(todoDiv);
  }
}