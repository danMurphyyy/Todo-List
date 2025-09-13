import Project from "./project";

export default class ProjectManager {
  constructor() {
    this.projects = [];
    this.currentProject = null;

    this.addProject("Unassigned");
  }

  addProject(name) {
    const project = new Project(name)
    this.projects.push(project);
    if (!this.currentProject) this.currentProject = project;
    return project
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(id) {
    return this.projects.find(project => project.id === id)
  }

  setCurrentProject(project) {
    this.currentProject = project;
    console.log("Switched to project:", project.name)
  }

  getCurrentProject() {
    return this.currentProject;
  }
}