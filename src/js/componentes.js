import { todoList } from '../index.js';  // Importa correctamente la instancia de TodoList

// Función para crear el HTML de una tarea
export const crearTodoHtml = (todo) => {
    const htmlTodo = `
        <li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    document.querySelector('.todo-list').append(div.firstElementChild);
    actualizarContadorPendientes();  // Actualizar el contador de tareas pendientes
};

// Botones para los filtros y acciones
const btnTodos = document.querySelector('#filter-all');
const btnPendientes = document.querySelector('#filter-pending');
const btnCompletados = document.querySelector('#filter-completed');
const btnBorrarCompletados = document.querySelector('#clear-completed');
const btnMarcarTodoCompletado = document.querySelector('#toggle-all');  // Botón para marcar todas como completadas
const contadorPendientes = document.querySelector('#todo-count');  // Elemento donde se muestra el número de pendientes

// Filtros de las tareas
btnTodos.addEventListener('click', () => {
    actualizarVista();  // Limpia el DOM antes de renderizar
    todoList.todos.forEach(crearTodoHtml);  // Muestra todas las tareas
});

btnPendientes.addEventListener('click', () => {
    actualizarVista();  // Limpia el DOM antes de renderizar
    todoList.todos
        .filter(todo => !todo.completado)  // Filtrar solo las tareas pendientes
        .forEach(crearTodoHtml);
});

btnCompletados.addEventListener('click', () => {
    actualizarVista();  // Limpia el DOM antes de renderizar
    todoList.todos
        .filter(todo => todo.completado)  // Filtrar solo las tareas completadas
        .forEach(crearTodoHtml);
});

// Eliminar todas las tareas completadas
btnBorrarCompletados.addEventListener('click', () => {
    todoList.eliminarCompletados();  // Elimina las tareas completadas de la lista
    actualizarVista();  // Actualiza la vista
    actualizarContadorPendientes();  // Actualizar el contador de pendientes
});

// Marcar todas las tareas como completadas o no completadas
btnMarcarTodoCompletado.addEventListener('click', (event) => {
    const completado = event.target.checked;  // Estado del checkbox (si está marcado o no)
    todoList.marcarTodasCompletadas(completado);  // Marca todas las tareas como completadas o no
    actualizarVista();  // Actualiza la vista
    todoList.guardarLocalStorage();  // Guarda el estado actualizado en localStorage
    actualizarContadorPendientes();  // Actualizar el contador de tareas pendientes
});

// Evento para eliminar tarea individual o marcar como completada
document.querySelector('.todo-list').addEventListener('click', (event) => {
    const elementoNombre = event.target.localName;  // 'input', 'button', etc.
    const todoElemento = event.target.parentElement.parentElement;  // El elemento 'li' que contiene la tarea
    const todoId = todoElemento.getAttribute('data-id');  // Obtiene el ID de la tarea

    // Eliminar tarea al hacer clic en el botón de eliminar
    if (elementoNombre === 'button') {
        todoList.eliminarTodo(todoId);  // Elimina la tarea de la lista
        todoElemento.remove();  // Elimina la tarea del DOM
        actualizarContadorPendientes();  // Actualizar el contador de pendientes
    }

    // Marcar como completado
    if (elementoNombre === 'input') {
        todoList.marcarCompletado(todoId);  // Cambia el estado de completado
        todoElemento.classList.toggle('completed');  // Alterna la clase 'completed'
        todoList.guardarLocalStorage();  // Guarda el estado en localStorage
        actualizarContadorPendientes();  // Actualizar el contador de pendientes
    }
});

// Función para limpiar y actualizar el HTML de las tareas
function actualizarVista() {
    const divTodoList = document.querySelector('.todo-list');
    while (divTodoList.firstChild) {
        divTodoList.removeChild(divTodoList.firstChild);  // Elimina todos los elementos del DOM
    }
}

// Función para actualizar el contador de tareas pendientes
function actualizarContadorPendientes() {
    const pendientes = todoList.todos.filter(todo => !todo.completado).length;  // Cuenta cuántas tareas no están completadas
    contadorPendientes.textContent = `${pendientes} pendiente(s)`;  // Actualiza el contenido del contador
}
