export default class UI {
  constructor(container) {
    this.container = container;
    this.projectList = document.getElementById("projects-list");
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

  renderProjectDropdown(projects, selectElement) {
    selectElement.innerHTML = "";
    projects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.textContent = project.name;
      selectElement.appendChild(option);
    });
  }

  renderProjects(projects, onSelect) {
    this.projectList.innerHTML = "";

    projects.forEach((project) => {
      const li = document.createElement("li");
      li.textContent = project.name;
      li.dataset.id = project.id;
      li.classList.add("project-item");

      li.addEventListener("click", () => {
        if (onSelect) onSelect(project);
      });

      this.projectList.appendChild(li);
    })
  }
}