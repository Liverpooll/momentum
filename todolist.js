const todo_input = document.querySelector('.todo-input'),
todo_form = document.querySelector('.todo-form'),
todo_list = document.querySelector('.todo-list'),
todos_co = 'toDos';

let toDos_arr = [];


function delete_todo(event) {
  const li = event.target.parentNode;
  todo_list.removeChild(li);
  const cleanToDos = toDos_arr.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  })
  toDos_arr = cleanToDos;
  saveToDos();
}

function saveToDos () {
  localStorage.setItem(todos_co, JSON.stringify(toDos_arr));
}

function Create_todo (text) {
  const create_li = document.createElement('li');
  const create_btn = document.createElement('button');
  const newId = toDos_arr.length + 1;
  create_btn.innerHTML = 'X';
  create_btn.setAttribute("onclick", 'delete_todo(event)');
  const create_span = document.createElement('span');
  create_span.innerText = text;

  create_li.appendChild(create_span);
  create_li.appendChild(create_btn);
  todo_list.appendChild(create_li);
  create_li.id = newId;


  const toDos_obj = {
    text: text,
    id: newId
  } ;
  toDos_arr.push(toDos_obj);
  saveToDos();

}



function submit_function(event) {
  event.preventDefault();
  const input_value = todo_input.value;
  Create_todo(input_value);
  todo_input.value = null; 
}

function getTodo() {
  const Load_toDos = localStorage.getItem('toDos');
  if (Load_toDos !== null) {
    const parse_toDos = JSON.parse(Load_toDos);
    parse_toDos.forEach(function(toDo){
      Create_todo(toDo.text);
    })


  }
}

function init() {
  getTodo();
  todo_form.addEventListener('submit', submit_function);

}

init();





