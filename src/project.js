import TodoItem from "./todo-items";

export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    if (todo instanceof TodoItem) {
      this.todos.push(todo);
    } else {
      console.error("Can only add TodoItem objects.");
    }
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  getTodos() {
    return [this.todos];
  }
}