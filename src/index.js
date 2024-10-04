import './style.css';  // Importa los estilos CSS

import { Todo } from './classes/todo.class.js';  // Importa la clase Todo desde el archivo correcto
import { TodoList } from './classes/todo-list.class.js';  // Importa la clase TodoList desde su archivo correspondiente
import { crearTodoHtml } from './js/componentes.js';  // Importa la función para crear el HTML de una tarea

// Crear una instancia de TodoList
export const todoList = new TodoList();

// Cargar las tareas del localStorage y mostrarlas en el DOM
todoList.todos.forEach(todo => {
    crearTodoHtml(todo);
});

// Evento para agregar nuevas tareas
const txtInput = document.querySelector('.new-todo');
txtInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && txtInput.value.trim().length > 0) {
        const nuevoTodo = new Todo(txtInput.value.trim());
        todoList.nuevoTodo(nuevoTodo);  // Añadir a la lista de tareas
        crearTodoHtml(nuevoTodo);  // Mostrar en el DOM
        txtInput.value = '';  // Limpiar el campo de entrada
    }
});
