import * as load from './load';
import page from './page';
import setLocalStorage from './storage';


const Project = (title, todos = []) => ({ title, todos });

const addProject = (myProjects, title) => {
  let result = '';
  if (title) {
    const newProject = Project(title);
    myProjects.push(newProject);
    setLocalStorage(myProjects);
    load.reload();
    result = newProject;
  } else {
    page.displayWarning('project-warning');
    result = 'Fail';
  }
  return result;
};


const removeToDo = (myProjects, idxProject, idxToDo) => {
  const newMyProjects = [...myProjects];
  newMyProjects[idxProject].todos.splice(idxToDo, 1);
  setLocalStorage(newMyProjects);
  return newMyProjects;
};

export { addProject, removeToDo };
