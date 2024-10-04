// Clase Todo
export class Todo {

    static fromJson({ id, tarea, completado, creado }) {
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = new Date(creado); // Asegura que `creado` sea un objeto Date
        return tempTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();  // ID único basado en el tiempo actual
        this.completado = false;  // Inicialmente, la tarea no está completada
        this.creado = new Date();  // Fecha de creación
    }
}

// Clase TodoList
export class TodoList {
    constructor() {
        this.todos = [];  // Correctamente definido como `todos`
    }

    nuevoTodo(todo) {
        this.todos.push(todo);  // Añade la nueva tarea al array
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);  // Elimina una tarea por id
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id === id) {
                todo.completado = !todo.completado;  // Alterna el estado de completado
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);  // Elimina todas las tareas completadas
    }
}
