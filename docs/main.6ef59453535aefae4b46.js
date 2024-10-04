/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoList: () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class.js */ \"./src/classes/todo.class.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n // Importa correctamente la clase Todo\n\nvar TodoList = /*#__PURE__*/function () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n    this.cargarLocalStorage(); // Cargar las tareas desde localStorage al iniciar\n  }\n\n  // Añade una nueva tarea\n  return _createClass(TodoList, [{\n    key: \"nuevoTodo\",\n    value: function nuevoTodo(todo) {\n      this.todos.push(todo);\n      this.guardarLocalStorage(); // Guarda la lista actualizada en localStorage\n    }\n\n    // Elimina una tarea por su ID\n  }, {\n    key: \"eliminarTodo\",\n    value: function eliminarTodo(id) {\n      this.todos = this.todos.filter(function (todo) {\n        return todo.id !== id;\n      });\n      this.guardarLocalStorage(); // Guarda la lista actualizada en localStorage\n    }\n\n    // Marca una tarea como completada o no completada\n  }, {\n    key: \"marcarCompletado\",\n    value: function marcarCompletado(id) {\n      var _iterator = _createForOfIteratorHelper(this.todos),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var todo = _step.value;\n          if (todo.id === id) {\n            todo.completado = !todo.completado;\n            this.guardarLocalStorage(); // Guarda la lista actualizada en localStorage\n            break;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n\n    // Elimina todas las tareas que estén marcadas como completadas\n  }, {\n    key: \"eliminarCompletados\",\n    value: function eliminarCompletados() {\n      this.todos = this.todos.filter(function (todo) {\n        return !todo.completado;\n      });\n      this.guardarLocalStorage(); // Guarda la lista actualizada en localStorage\n    }\n\n    // Marca todas las tareas como completadas o no completadas\n  }, {\n    key: \"marcarTodasCompletadas\",\n    value: function marcarTodasCompletadas(completado) {\n      this.todos.forEach(function (todo) {\n        todo.completado = completado;\n      });\n      this.guardarLocalStorage(); // Guarda la lista actualizada en localStorage\n    }\n\n    // Guarda las tareas en localStorage\n  }, {\n    key: \"guardarLocalStorage\",\n    value: function guardarLocalStorage() {\n      localStorage.setItem('todos', JSON.stringify(this.todos)); // Usa 'todos' como clave para almacenar las tareas\n    }\n\n    // Carga las tareas desde localStorage o inicializa con un array vacío si no hay nada almacenado\n  }, {\n    key: \"cargarLocalStorage\",\n    value: function cargarLocalStorage() {\n      this.todos = localStorage.getItem('todos') // Usa 'todos' como clave para cargar las tareas\n      ? JSON.parse(localStorage.getItem('todos')).map(_todo_class_js__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJson) // Convierte de JSON y mapea usando fromJson\n      : []; // Si no hay tareas guardadas, inicializa con un array vacío\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo),\n/* harmony export */   TodoList: () => (/* binding */ TodoList)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// Clase Todo\n// Clase Todo\nvar Todo = /*#__PURE__*/function () {\n  function Todo(tarea) {\n    _classCallCheck(this, Todo);\n    this.tarea = tarea;\n    this.id = new Date().getTime(); // ID único basado en el tiempo actual\n    this.completado = false; // Inicialmente, la tarea no está completada\n    this.creado = new Date(); // Fecha de creación\n  }\n  return _createClass(Todo, null, [{\n    key: \"fromJson\",\n    value: function fromJson(_ref) {\n      var id = _ref.id,\n        tarea = _ref.tarea,\n        completado = _ref.completado,\n        creado = _ref.creado;\n      var tempTodo = new Todo(tarea);\n      tempTodo.id = id;\n      tempTodo.completado = completado;\n      tempTodo.creado = creado;\n      return tempTodo;\n    }\n  }]);\n}();\n\n// Clase TodoList\nvar TodoList = /*#__PURE__*/function () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n    this.todos = []; // Correctamente definido como `todos`\n  }\n  return _createClass(TodoList, [{\n    key: \"nuevoTodo\",\n    value: function nuevoTodo(todo) {\n      this.todos.push(todo); // Añade la nueva tarea al array\n    }\n  }, {\n    key: \"eliminarTodo\",\n    value: function eliminarTodo(id) {\n      this.todos = this.todos.filter(function (todo) {\n        return todo.id !== id;\n      }); // Elimina una tarea por id\n    }\n  }, {\n    key: \"marcarCompletado\",\n    value: function marcarCompletado(id) {\n      var _iterator = _createForOfIteratorHelper(this.todos),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var todo = _step.value;\n          if (todo.id === id) {\n            todo.completado = !todo.completado; // Alterna el estado de completado\n            break;\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"eliminarCompletados\",\n    value: function eliminarCompletados() {\n      this.todos = this.todos.filter(function (todo) {\n        return !todo.completado;\n      }); // Elimina todas las tareas completadas (cambiado a `todos`)\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://webpack-inicial/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _classes_todo_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/todo.class.js */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _classes_todo_list_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/todo-list.class.js */ \"./src/classes/todo-list.class.js\");\n/* harmony import */ var _js_componentes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/componentes.js */ \"./src/js/componentes.js\");\n // Importa los estilos CSS\n\n // Importa la clase Todo desde el archivo correcto\n // Importa la clase TodoList desde su archivo correspondiente\n // Importa la función para crear el HTML de una tarea\n\n// Crear una instancia de TodoList\nvar todoList = new _classes_todo_list_class_js__WEBPACK_IMPORTED_MODULE_2__.TodoList();\n\n// Cargar las tareas del localStorage y mostrarlas en el DOM\ntodoList.todos.forEach(function (todo) {\n  (0,_js_componentes_js__WEBPACK_IMPORTED_MODULE_3__.crearTodoHtml)(todo);\n});\n\n// Evento para agregar nuevas tareas\nvar txtInput = document.querySelector('.new-todo');\ntxtInput.addEventListener('keyup', function (event) {\n  if (event.key === 'Enter' && txtInput.value.trim().length > 0) {\n    var nuevoTodo = new _classes_todo_class_js__WEBPACK_IMPORTED_MODULE_1__.Todo(txtInput.value.trim());\n    todoList.nuevoTodo(nuevoTodo); // Añadir a la lista de tareas\n    (0,_js_componentes_js__WEBPACK_IMPORTED_MODULE_3__.crearTodoHtml)(nuevoTodo); // Mostrar en el DOM\n    txtInput.value = ''; // Limpiar el campo de entrada\n  }\n});\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crearTodoHtml: () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n // Importa correctamente la instancia de TodoList\n\n// Función para crear el HTML de una tarea\nvar crearTodoHtml = function crearTodoHtml(todo) {\n  var htmlTodo = \"\\n        <li class=\\\"\".concat(todo.completado ? 'completed' : '', \"\\\" data-id=\\\"\").concat(todo.id, \"\\\">\\n            <div class=\\\"view\\\">\\n                <input class=\\\"toggle\\\" type=\\\"checkbox\\\" \").concat(todo.completado ? 'checked' : '', \">\\n                <label>\").concat(todo.tarea, \"</label>\\n                <button class=\\\"destroy\\\"></button>\\n            </div>\\n        </li>\\n    \");\n  var div = document.createElement('div');\n  div.innerHTML = htmlTodo;\n  document.querySelector('.todo-list').append(div.firstElementChild);\n};\n\n// Botones para los filtros y acciones\nvar btnTodos = document.querySelector('#filter-all');\nvar btnPendientes = document.querySelector('#filter-pending');\nvar btnCompletados = document.querySelector('#filter-completed');\nvar btnBorrarCompletados = document.querySelector('#clear-completed');\n\n// Filtros de las tareas\nbtnTodos.addEventListener('click', function () {\n  mostrarTodos(); // Muestra todas las tareas\n});\nbtnPendientes.addEventListener('click', function () {\n  mostrarPendientes(); // Muestra solo las tareas pendientes\n});\nbtnCompletados.addEventListener('click', function () {\n  mostrarCompletados(); // Muestra solo las tareas completadas\n});\n\n// Eliminar todas las tareas completadas\nbtnBorrarCompletados.addEventListener('click', function () {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.eliminarCompletados(); // Elimina las tareas completadas de la lista\n  actualizarVista(); // Actualiza la vista\n});\n\n// Evento para eliminar tarea individual o marcar como completada\ndocument.querySelector('.todo-list').addEventListener('click', function (event) {\n  var elementoNombre = event.target.localName; // 'input', 'button', etc.\n  var todoElemento = event.target.parentElement.parentElement; // El elemento 'li' que contiene la tarea\n  var todoId = todoElemento.getAttribute('data-id'); // Obtiene el ID de la tarea\n\n  // Eliminar tarea al hacer clic en el botón de eliminar\n  if (elementoNombre === 'button') {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.eliminarTodo(todoId); // Elimina la tarea de la lista\n    todoElemento.remove(); // Elimina la tarea del DOM\n  }\n\n  // Marcar como completado\n  if (elementoNombre === 'input') {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.marcarCompletado(todoId); // Cambia el estado de completado\n    todoElemento.classList.toggle('completed'); // Alterna la clase 'completed'\n  }\n});\n\n// Evento para marcar todas las tareas como completadas o no completadas\ndocument.querySelector('#toggle-all').addEventListener('click', function (event) {\n  var completado = event.target.checked; // Estado del checkbox (si está marcado o no)\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.marcarTodasCompletadas(completado); // Marca todas las tareas como completadas o no\n  var todoElementos = document.querySelectorAll('.todo-list li');\n\n  // Actualiza la clase 'completed' en el DOM para todas las tareas\n  todoElementos.forEach(function (todoElemento) {\n    if (completado) {\n      todoElemento.classList.add('completed');\n    } else {\n      todoElemento.classList.remove('completed');\n    }\n  });\n});\n\n// Funciones de filtro\nfunction mostrarTodos() {\n  actualizarVista();\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.todos.forEach(crearTodoHtml); // Muestra todas las tareas\n}\nfunction mostrarPendientes() {\n  actualizarVista();\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.todos.filter(function (todo) {\n    return !todo.completado;\n  }) // Filtrar solo las tareas pendientes\n  .forEach(crearTodoHtml);\n}\nfunction mostrarCompletados() {\n  actualizarVista();\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.todos.filter(function (todo) {\n    return todo.completado;\n  }) // Filtrar solo las tareas completadas\n  .forEach(crearTodoHtml);\n}\n\n// Función para limpiar y actualizar el HTML de las tareas\nfunction actualizarVista() {\n  var divTodoList = document.querySelector('.todo-list');\n  while (divTodoList.firstChild) {\n    divTodoList.removeChild(divTodoList.firstChild); // Elimina todos los elementos del DOM\n  }\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.todos.forEach(crearTodoHtml); // Vuelve a renderizar las tareas actualizadas\n}\n\n// Evento para eliminar todas las tareas completadas\ndocument.querySelector('#clear-completed').addEventListener('click', function () {\n  _index_js__WEBPACK_IMPORTED_MODULE_0__.todoList.eliminarCompletados(); // Elimina las tareas completadas de la lista\n  var todoElementos = document.querySelectorAll('.todo-list li.completed');\n\n  // Elimina del DOM las tareas que están completadas\n  todoElementos.forEach(function (todoElemento) {\n    return todoElemento.remove();\n  });\n});\n\n//# sourceURL=webpack://webpack-inicial/./src/js/componentes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  font-family: Arial, sans-serif;\r\n  background-color: #f5f5f5;\r\n  color: #333;\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  color: #b53e3e;\r\n  font-size: 4rem;\r\n  margin-top: 2rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.todoapp {\r\n  background-color: white;\r\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  margin: 2rem auto;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.new-todo {\r\n  width: 100%;\r\n  padding: 1rem;\r\n  font-size: 1.5rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.todoapp label {\r\n  font-size: 1.1rem;\r\n  color: #777;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.todoapp input[type=\"checkbox\"] {\r\n  margin-right: 0.5rem;\r\n  transform: scale(1.5);\r\n}\r\n\r\n.todoapp ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.todoapp ul li {\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: 1px solid #ddd;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.filters {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 1rem 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.filters li {\r\n  margin-right: 10px;\r\n}\r\n\r\n.filter-button {\r\n  background-color: #f0f0f0;\r\n  border: 1px solid #ddd;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filter-button:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.filter-button:active {\r\n  background-color: #ccc;\r\n}\r\n\r\n.footer {\r\n  margin-top: 2rem;\r\n  font-size: 0.9rem;\r\n  color: #999;\r\n}\r\n\r\n.footer a {\r\n  color: #b53e3e;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.completed label {\r\n  text-decoration: line-through;\r\n  color: #d9d9d9;\r\n}\r\n\r\n.completed .toggle {\r\n  background-color: #55c57a; /* Color del check */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-inicial/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-inicial/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-inicial/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;