'use strict';

/* your code goes here! */
class Task {
  constructor(des,boolean){
    this.description = des;
    this.complete = boolean;
  }
  toggleFinished() {
    this.complete = !this.complete;
  }

  render(){
    let element = document.createElement("li");
    element.textContent = this.description;
    if (this.complete) {
      element.classList.add("font-strike");
    }
    element.addEventListener('click', () => {
      this.toggleFinished();
      if (!this.complete) {
        element.classList.remove("font-strike");
      }
    })
    return element;
  }

}

//var test = new Task("abc", true);
class TaskList {
  constructor(task) {
    this.tasks = task;
  }
  addTask(des) {
    let temp = new Task(des, false);
    this.tasks.push(temp);
  }
  render() {
    let wrapper = document.createElement("ol");
    this.tasks.forEach((element)=> {
      let ta = new Task(element.description, element.complete);
      wrapper.appendChild(ta.render());
    });
    return wrapper;
  }
}

class NewTaskForm{
  constructor(fun){
    this.submitCallback = fun;
  }
  render() {
      let form = document.createElement("form");
      let inp = document.createElement("input");
      inp.classList.add("form-control", "mb-3");
      inp.setAttribute("placeholder", "What else do you have to do?");
      form.appendChild(inp);
      let but  = document.createElement("button");
      but.classList.add("btn", "btn-primary");
      but.textContent = "Add task to list";
      form.appendChild(but);
      but.addEventListener("click", (event) => {
        event.preventDefault();
        this.submitCallback(inp.value)})
      return form;
    }
}

class App {
  constructor(parentElement, taskList) {
    this.parentElement = parentElement;
    this.taskList = taskList;
  }
  addTaskToList(tas){
    this.taskList.addTask(tas);
    this.parentElement.innerHTML = "";
    this.render();
  }
  render() {
    this.parentElement.appendChild(this.taskList.render());
    this.parentElement.appendChild(new NewTaskForm((string) =>{
      return this.addTaskToList(string)}).render());
  }

}
let apps = new App(document.querySelector("#app"), new TaskList([{
  description: "Add task to list", complete: true
}, {description: "Arrow some functions", complete: false}]));
apps.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
