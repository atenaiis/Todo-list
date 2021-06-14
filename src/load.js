import setLocalStorage from './storage';

let myProjects = [];
const pageInit = () => {
  if (localStorage.getItem('projects')) {
    myProjects = JSON.parse(localStorage.getItem('projects'));
  } else {
    myProjects = [{ title: 'Default', todos: [] }];
  }
  return myProjects;
};

const reload = () => {
  setLocalStorage(myProjects);
  document.location.reload();
};

export { pageInit, reload };
