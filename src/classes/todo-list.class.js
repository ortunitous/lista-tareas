import { Todo } from './todo.class.js';  // Importa correctamente la clase Todo

export class TodoList {
    constructor() {
        this.cargarLocalStorage();  // Cargar las tareas desde localStorage al iniciar
    }

    // Añade una nueva tarea
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();  // Guarda la lista actualizada en localStorage
    }

    // Elimina una tarea por su ID
    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.guardarLocalStorage();  // Guarda la lista actualizada en localStorage
    }

    // Marca una tarea como completada o no completada
    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id === id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();  // Guarda la lista actualizada en localStorage
                break;
            }
        }
    }

    // Elimina todas las tareas que estén marcadas como completadas
    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();  // Guarda la lista actualizada en localStorage
    }

    // Marca todas las tareas como completadas o no
    marcarTodasCompletadas(completado) {
        this.todos.forEach(todo => {
            todo.completado = completado;  // Marca todas las tareas como completadas o no
        });
        this.guardarLocalStorage();  // Guarda la lista actualizada en localStorage
    }

    // Guarda las tareas en localStorage
    guardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));  // Usa 'todos' como clave para almacenar las tareas
    }

    // Carga las tareas desde localStorage o inicializa con un array vacío si no hay nada almacenado
    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todos'))  // Usa 'todos' como clave para cargar las tareas
            ? JSON.parse(localStorage.getItem('todos')).map(Todo.fromJson)  // Convierte de JSON y mapea usando fromJson
            : [];  // Si no hay tareas guardadas, inicializa con un array vacío
    }
}
