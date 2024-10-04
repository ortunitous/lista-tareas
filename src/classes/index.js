import { Todo } from './todo.class.js';
import { TodoList } from './todo-list.class.js';
import { crearTodoHtml } from '../js/componentes.js';

// Crear una instancia de TodoList
const todoList = new TodoList();

// Crear una nueva tarea
const tarea = new Todo('Aprende Javascript');

// Agregar la nueva tarea a la lista de tareas
todoList.nuevoTodo(tarea);

console.log(tarea);

// Renderizar el HTML de la nueva tarea
crearTodoHtml(tarea);
