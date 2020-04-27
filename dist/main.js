/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayWithout; });
function arrayWithout(array, ...valuesToExclude) {
    return array.filter((value) => {
        return !valuesToExclude.includes(value);
    });
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js":
/*!************************************************************************!*\
  !*** ./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectWithout; });
function objectWithout(object, ...keysToRemove) {
    const entries = Object.entries(object);
    return entries.reduce((newObject, [currentKey, currentValue]) => {
        if (keysToRemove.includes(currentKey)) {
            return newObject;
        }
        return Object.assign(Object.assign({}, newObject), { [currentKey]: currentValue });
    }, {});
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/uuid/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@bakkerjoeri/uuid/dist/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uuid; });
function uuid() {
    let seed = Date.now();
    if (window.performance && typeof window.performance.now === 'function') {
        seed += performance.now();
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (seed + Math.random() * 16) % 16 | 0;
        seed = Math.floor(seed / 16);
        return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16);
    });
    return uuid;
}


/***/ }),

/***/ "./node_modules/heks/dist/EventEmitter.js":
/*!************************************************!*\
  !*** ./node_modules/heks/dist/EventEmitter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/array-without */ "./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js");
/* harmony import */ var _bakkerjoeri_object_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bakkerjoeri/object-without */ "./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js");


class EventEmitter {
    constructor() {
        this.eventHandlers = {};
    }
    on(eventType, handler) {
        this.eventHandlers = Object.assign(Object.assign({}, this.eventHandlers), { [eventType]: [
                ...this.eventHandlers[eventType] || [],
                handler,
            ] });
    }
    remove(eventType, handler) {
        this.eventHandlers = Object.assign(Object.assign({}, this.eventHandlers), { [eventType]: Object(_bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__["default"])(this.eventHandlers[eventType], handler) });
    }
    removeEventType(eventType) {
        this.eventHandlers = Object(_bakkerjoeri_object_without__WEBPACK_IMPORTED_MODULE_1__["default"])(this.eventHandlers, eventType);
    }
    emit(eventType, initialState, event) {
        if (!this.eventHandlers.hasOwnProperty(eventType)) {
            return initialState;
        }
        const handlers = this.eventHandlers[eventType];
        return handlers.reduce((newState, currentHandler) => {
            return currentHandler(newState, event);
        }, initialState);
    }
}


/***/ }),

/***/ "./node_modules/heks/dist/Game.js":
/*!****************************************!*\
  !*** ./node_modules/heks/dist/Game.js ***!
  \****************************************/
/*! exports provided: defaultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _tick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tick.js */ "./node_modules/heks/dist/tick.js");
/* harmony import */ var _setupGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupGame.js */ "./node_modules/heks/dist/setupGame.js");


const defaultState = {
    entities: {},
    sprites: {},
};
class Game {
    constructor(size, eventEmitter, { initialState = defaultState, scale = 1, containerSelector = 'body' }) {
        this.eventEmitter = eventEmitter;
        const { canvas, context } = Object(_setupGame_js__WEBPACK_IMPORTED_MODULE_1__["setupGame"])(containerSelector, size, scale);
        this.canvas = canvas;
        this.context = context;
        this.scale = scale;
        this.state = Object.assign({}, initialState);
    }
    start() {
        this.state = this.eventEmitter.emit('start', this.state, {});
        Object(_tick_js__WEBPACK_IMPORTED_MODULE_0__["start"])((time) => {
            this.state = this.eventEmitter.emit('beforeUpdate', this.state, { time });
            this.state = this.eventEmitter.emit('update', this.state, { time });
            this.state = this.eventEmitter.emit('afterUpdate', this.state, { time });
            this.state = this.eventEmitter.emit('beforeDraw', this.state, { time });
            this.state = this.eventEmitter.emit('draw', this.state, { time, context: this.context, scale: this.scale });
            this.state = this.eventEmitter.emit('afterDraw', this.state, { time });
        });
    }
}


/***/ }),

/***/ "./node_modules/heks/dist/entities.js":
/*!********************************************!*\
  !*** ./node_modules/heks/dist/entities.js ***!
  \********************************************/
/*! exports provided: addEntity, getEntity, getEntities, findEntities, findEntity, doesEntityValueMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntity", function() { return addEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntities", function() { return findEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntity", function() { return findEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesEntityValueMatch", function() { return doesEntityValueMatch; });
/* harmony import */ var _bakkerjoeri_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/uuid */ "./node_modules/@bakkerjoeri/uuid/dist/index.js");

const addEntity = (components) => (state) => {
    const entity = Object.assign({ id: components.id || Object(_bakkerjoeri_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])() }, components);
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [entity.id]: entity }) });
};
function getEntity(state, entityId) {
    if (!state.entities.hasOwnProperty(entityId)) {
        throw new Error(`Entity with id ${entityId} doesn't exist.`);
    }
    return state.entities[entityId];
}
function getEntities(state) {
    return Object.values(state.entities).reduce((entities, entity) => {
        return [
            ...entities,
            entity,
        ];
    }, []);
}
function findEntities(entities, filters) {
    return entities.filter(entity => {
        return doesEntityValueMatch(entity, filters);
    });
}
function findEntity(entities, filters) {
    return entities.find(entity => {
        return doesEntityValueMatch(entity, filters);
    });
}
function doesEntityValueMatch(entity, filters) {
    return Object.entries(filters).every(([componentName, filterValue]) => {
        if (typeof filterValue === 'function' && entity.hasOwnProperty(componentName)) {
            return filterValue(entity[componentName]);
        }
        if (typeof filterValue === 'boolean' && !filterValue) {
            return !entity.hasOwnProperty(componentName) || !entity[componentName];
        }
        if (typeof filterValue === 'boolean' && filterValue) {
            return entity.hasOwnProperty(componentName) && !!entity[componentName];
        }
        return entity.hasOwnProperty(componentName) && filterValue === entity[componentName];
    });
}


/***/ }),

/***/ "./node_modules/heks/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/heks/dist/index.js ***!
  \*****************************************/
/*! exports provided: Game, EventEmitter, defaultState, addSprite, getSprite, drawSprite, getImageForFilePath, addEntity, getEntity, getEntities, findEntities, findEntity, doesEntityValueMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./node_modules/heks/dist/Game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return _Game_js__WEBPACK_IMPORTED_MODULE_0__["defaultState"]; });

/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventEmitter.js */ "./node_modules/heks/dist/EventEmitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprites_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites.js */ "./node_modules/heks/dist/sprites.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["addSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["getSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["drawSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageForFilePath", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["getImageForFilePath"]; });

/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities.js */ "./node_modules/heks/dist/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["addEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["getEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["getEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["findEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["findEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesEntityValueMatch", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["doesEntityValueMatch"]; });








/***/ }),

/***/ "./node_modules/heks/dist/setupGame.js":
/*!*********************************************!*\
  !*** ./node_modules/heks/dist/setupGame.js ***!
  \*********************************************/
/*! exports provided: setupGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupGame", function() { return setupGame; });
function setupGame(containerSelector, size, scale = 1) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', (size.width * scale * window.devicePixelRatio).toString());
    canvas.setAttribute('height', (size.height * scale * window.devicePixelRatio).toString());
    canvas.style.width = `${size.width * scale}px`;
    canvas.style.height = `${size.height * scale}px`;
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Couldn\'t create context from canvas');
    }
    context.imageSmoothingEnabled = false;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
    const gameElement = document.documentElement.querySelector(containerSelector);
    if (!gameElement) {
        throw new Error(`Couldn't find element with selector ${containerSelector} to mount canvas on.`);
    }
    gameElement.appendChild(canvas);
    return {
        context,
        canvas,
    };
}


/***/ }),

/***/ "./node_modules/heks/dist/sprites.js":
/*!*******************************************!*\
  !*** ./node_modules/heks/dist/sprites.js ***!
  \*******************************************/
/*! exports provided: addSprite, getSprite, drawSprite, getImageForFilePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSprite", function() { return addSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSprite", function() { return getSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSprite", function() { return drawSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageForFilePath", function() { return getImageForFilePath; });
const addSprite = (sprite) => (state) => {
    return Object.assign(Object.assign({}, state), { sprites: Object.assign(Object.assign({}, state.sprites), { [sprite.name]: sprite }) });
};
function getSprite(state, name) {
    if (!state.sprites.hasOwnProperty(name)) {
        throw new Error(`No sprite with name ${name} found.`);
    }
    return state.sprites[name];
}
function drawSprite(sprite, context, position, { scale = 1, offset = { x: 0, y: 0 } } = {}) {
    context.drawImage(getImageForFilePath(sprite.path), sprite.origin.x, sprite.origin.y, sprite.size.width, sprite.size.height, (position.x + offset.x) * scale, (position.y + offset.y) * scale, sprite.size.width * scale, sprite.size.height * scale);
}
const imageCache = {};
function getImageForFilePath(filePath, cached = true) {
    if (cached && imageCache[filePath]) {
        return imageCache[filePath];
    }
    const image = new Image();
    image.src = filePath;
    imageCache[filePath] = image;
    return image;
}


/***/ }),

/***/ "./node_modules/heks/dist/tick.js":
/*!****************************************!*\
  !*** ./node_modules/heks/dist/tick.js ***!
  \****************************************/
/*! exports provided: start, scheduleNextTick, tick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleNextTick", function() { return scheduleNextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
function start(callback) {
    scheduleNextTick(callback);
}
function scheduleNextTick(callback) {
    window.requestAnimationFrame((time) => {
        tick(callback, time);
    });
}
function tick(callback, time) {
    callback(time);
    scheduleNextTick(callback);
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/choose.js":
/*!****************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/choose.js ***!
  \****************************************************/
/*! exports provided: choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony import */ var _getRandomNumberInRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNumberInRange */ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js");

function choose(choices) {
    if (choices.length === 0) {
        throw new Error('Cannot choose from 0 choices.');
    }
    return choices[Object(_getRandomNumberInRange__WEBPACK_IMPORTED_MODULE_0__["getRandomNumberInRange"])(0, choices.length - 1)];
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js":
/*!********************************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/getRandomNumberInRange.js ***!
  \********************************************************************/
/*! exports provided: getRandomNumberInRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumberInRange", function() { return getRandomNumberInRange; });
function getRandomNumberInRange(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound + 1 + lowerBound));
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/index.js ***!
  \***************************************************/
/*! exports provided: getRandomNumberInRange, choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getRandomNumberInRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNumberInRange.js */ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomNumberInRange", function() { return _getRandomNumberInRange_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumberInRange"]; });

/* harmony import */ var _choose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose.js */ "./node_modules/roll-the-bones/dist/choose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return _choose_js__WEBPACK_IMPORTED_MODULE_1__["choose"]; });





/***/ }),

/***/ "./src/assets/spritesheet.ts":
/*!***********************************!*\
  !*** ./src/assets/spritesheet.ts ***!
  \***********************************/
/*! exports provided: spritesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spritesheet", function() { return spritesheet; });
const spritesheet = [
    {
        name: 'bird-blue-idle-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 0, y: 0 },
    },
    {
        name: 'bird-blue-idle-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 16, y: 0 },
    },
    {
        name: 'bird-blue-singing-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 32, y: 0 },
    },
    {
        name: 'bird-blue-singing-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 48, y: 0 },
    },
    {
        name: 'bird-blue-pecking-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 64, y: 0 },
    },
    {
        name: 'bird-blue-pecking-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 80, y: 0 },
    },
    {
        name: 'bird-red-idle-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 0, y: 16 },
    },
    {
        name: 'bird-red-idle-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 16, y: 16 },
    },
    {
        name: 'bird-red-singing-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 32, y: 16 },
    },
    {
        name: 'bird-red-singing-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 48, y: 16 },
    },
    {
        name: 'bird-red-pecking-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 64, y: 16 },
    },
    {
        name: 'bird-red-pecking-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 80, y: 16 },
    },
    {
        name: 'bird-black-idle-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 0, y: 32 },
    },
    {
        name: 'bird-black-idle-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 16, y: 32 },
    },
    {
        name: 'bird-black-singing-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 32, y: 32 },
    },
    {
        name: 'bird-black-singing-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 48, y: 32 },
    },
    {
        name: 'bird-black-pecking-left',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 64, y: 32 },
    },
    {
        name: 'bird-black-pecking-right',
        path: 'src/assets/sprites/birds.png',
        size: { width: 16, height: 16 },
        origin: { x: 80, y: 32 },
    },
];


/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var heks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! heks */ "./node_modules/heks/dist/index.js");
/* harmony import */ var _assets_spritesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/spritesheet */ "./src/assets/spritesheet.ts");
/* harmony import */ var _utilities_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/pipe */ "./src/scripts/utilities/pipe.ts");
/* harmony import */ var roll_the_bones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! roll-the-bones */ "./node_modules/roll-the-bones/dist/index.js");




const backgroundColor = '#e7f0ce';
const scale = 3;
const width = 320;
const height = 180;
const eventEmitter = new heks__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
const game = new heks__WEBPACK_IMPORTED_MODULE_0__["Game"]({ width, height }, eventEmitter, { containerSelector: '.game', scale });
function createBird() {
    return {
        isBird: true,
        color: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_3__["choose"])(['blue', 'red', 'black']),
        behaviour: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_3__["choose"])(['idle', 'singing', 'pecking']),
        facing: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_3__["choose"])(['left', 'right']),
        position: {
            x: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_3__["getRandomNumberInRange"])(0, width - 16),
            y: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_3__["getRandomNumberInRange"])(0, height - 16),
        },
    };
}
eventEmitter.on('start', (state) => {
    return Object(_utilities_pipe__WEBPACK_IMPORTED_MODULE_2__["default"])(..._assets_spritesheet__WEBPACK_IMPORTED_MODULE_1__["spritesheet"].map(heks__WEBPACK_IMPORTED_MODULE_0__["addSprite"]), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(createBird()))(state);
});
eventEmitter.on('beforeDraw', (state) => {
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), Object(heks__WEBPACK_IMPORTED_MODULE_0__["findEntities"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getEntities"])(state), { isBird: true }).reduce((newBirds, bird) => {
            return Object.assign(Object.assign({}, newBirds), { [bird.id]: Object.assign(Object.assign({}, bird), { sprite: `bird-${bird.color}-${bird.behaviour}-${bird.facing}` }) });
        }, {})) });
});
eventEmitter.on('draw', (state, { context, scale }) => {
    context.clearRect(0, 0, width * scale, height * scale);
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width * scale, height * scale);
    const drawableEntities = Object(heks__WEBPACK_IMPORTED_MODULE_0__["findEntities"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getEntities"])(state), { sprite: true, position: true });
    drawableEntities.sort((a, b) => {
        return a.position.y - b.position.y;
    });
    drawableEntities.forEach(entity => {
        const sprite = Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, entity.sprite);
        Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(sprite, context, entity.position, { scale });
    });
    return state;
});
game.start();
console.log(game);


/***/ }),

/***/ "./src/scripts/utilities/pipe.ts":
/*!***************************************!*\
  !*** ./src/scripts/utilities/pipe.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pipe; });
function pipe(...functions) {
    return functions.reduce((pipedFunction, nextFunction) => {
        return (value) => nextFunction(pipedFunction(value));
    }, value => value);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWtrZXJqb2VyaS9hcnJheS13aXRob3V0L2Rpc3QvYXJyYXlXaXRob3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFra2Vyam9lcmkvb2JqZWN0LXdpdGhvdXQvZGlzdC9vYmplY3RXaXRob3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFra2Vyam9lcmkvdXVpZC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3QvRXZlbnRFbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3QvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVrcy9kaXN0L2VudGl0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hla3MvZGlzdC9zZXR1cEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hla3MvZGlzdC9zcHJpdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3QvdGljay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm9sbC10aGUtYm9uZXMvZGlzdC9jaG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvbGwtdGhlLWJvbmVzL2Rpc3QvZ2V0UmFuZG9tTnVtYmVySW5SYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcm9sbC10aGUtYm9uZXMvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Nwcml0ZXNoZWV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njcmlw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LENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RIbEI7QUFBQTtBQUFlLFNBQVMsSUFBSSxDQUFhLEdBQUcsU0FBbUQ7SUFDOUYsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxLQUFpQixFQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEIsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlXaXRob3V0KGFycmF5LCAuLi52YWx1ZXNUb0V4Y2x1ZGUpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gIXZhbHVlc1RvRXhjbHVkZS5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvYmplY3RXaXRob3V0KG9iamVjdCwgLi4ua2V5c1RvUmVtb3ZlKSB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9iamVjdCk7XG4gICAgcmV0dXJuIGVudHJpZXMucmVkdWNlKChuZXdPYmplY3QsIFtjdXJyZW50S2V5LCBjdXJyZW50VmFsdWVdKSA9PiB7XG4gICAgICAgIGlmIChrZXlzVG9SZW1vdmUuaW5jbHVkZXMoY3VycmVudEtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbmV3T2JqZWN0KSwgeyBbY3VycmVudEtleV06IGN1cnJlbnRWYWx1ZSB9KTtcbiAgICB9LCB7fSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1dWlkKCkge1xuICAgIGxldCBzZWVkID0gRGF0ZS5ub3coKTtcbiAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlICYmIHR5cGVvZiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNlZWQgKz0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIGNvbnN0IHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGNvbnN0IHIgPSAoc2VlZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICAgIHNlZWQgPSBNYXRoLmZsb29yKHNlZWQgLyAxNik7XG4gICAgICAgIHJldHVybiAoYyA9PT0gJ3gnID8gciA6IHIgJiAoMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICAgIHJldHVybiB1dWlkO1xufVxuIiwiaW1wb3J0IGFycmF5V2l0aG91dCBmcm9tICdAYmFra2Vyam9lcmkvYXJyYXktd2l0aG91dCc7XG5pbXBvcnQgb2JqZWN0V2l0aG91dCBmcm9tICdAYmFra2Vyam9lcmkvb2JqZWN0LXdpdGhvdXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0ge307XG4gICAgfVxuICAgIG9uKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXZlbnRIYW5kbGVycyksIHsgW2V2ZW50VHlwZV06IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgXSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXZlbnRIYW5kbGVycyksIHsgW2V2ZW50VHlwZV06IGFycmF5V2l0aG91dCh0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSwgaGFuZGxlcikgfSk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50VHlwZShldmVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gb2JqZWN0V2l0aG91dCh0aGlzLmV2ZW50SGFuZGxlcnMsIGV2ZW50VHlwZSk7XG4gICAgfVxuICAgIGVtaXQoZXZlbnRUeXBlLCBpbml0aWFsU3RhdGUsIGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudEhhbmRsZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzLnJlZHVjZSgobmV3U3RhdGUsIGN1cnJlbnRIYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEhhbmRsZXIobmV3U3RhdGUsIGV2ZW50KTtcbiAgICAgICAgfSwgaW5pdGlhbFN0YXRlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBzdGFydCB9IGZyb20gJy4vdGljay5qcyc7XG5pbXBvcnQgeyBzZXR1cEdhbWUgfSBmcm9tICcuL3NldHVwR2FtZS5qcyc7XG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGVudGl0aWVzOiB7fSxcbiAgICBzcHJpdGVzOiB7fSxcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBldmVudEVtaXR0ZXIsIHsgaW5pdGlhbFN0YXRlID0gZGVmYXVsdFN0YXRlLCBzY2FsZSA9IDEsIGNvbnRhaW5lclNlbGVjdG9yID0gJ2JvZHknIH0pIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBldmVudEVtaXR0ZXI7XG4gICAgICAgIGNvbnN0IHsgY2FudmFzLCBjb250ZXh0IH0gPSBzZXR1cEdhbWUoY29udGFpbmVyU2VsZWN0b3IsIHNpemUsIHNjYWxlKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnc3RhcnQnLCB0aGlzLnN0YXRlLCB7fSk7XG4gICAgICAgIHN0YXJ0KCh0aW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnYmVmb3JlVXBkYXRlJywgdGhpcy5zdGF0ZSwgeyB0aW1lIH0pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ3VwZGF0ZScsIHRoaXMuc3RhdGUsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdhZnRlclVwZGF0ZScsIHRoaXMuc3RhdGUsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdiZWZvcmVEcmF3JywgdGhpcy5zdGF0ZSwgeyB0aW1lIH0pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLCB0aGlzLnN0YXRlLCB7IHRpbWUsIGNvbnRleHQ6IHRoaXMuY29udGV4dCwgc2NhbGU6IHRoaXMuc2NhbGUgfSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnYWZ0ZXJEcmF3JywgdGhpcy5zdGF0ZSwgeyB0aW1lIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXVpZCBmcm9tICdAYmFra2Vyam9lcmkvdXVpZCc7XG5leHBvcnQgY29uc3QgYWRkRW50aXR5ID0gKGNvbXBvbmVudHMpID0+IChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IE9iamVjdC5hc3NpZ24oeyBpZDogY29tcG9uZW50cy5pZCB8fCB1dWlkKCkgfSwgY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGVudGl0aWVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmVudGl0aWVzKSwgeyBbZW50aXR5LmlkXTogZW50aXR5IH0pIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnRpdHkoc3RhdGUsIGVudGl0eUlkKSB7XG4gICAgaWYgKCFzdGF0ZS5lbnRpdGllcy5oYXNPd25Qcm9wZXJ0eShlbnRpdHlJZCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbnRpdHkgd2l0aCBpZCAke2VudGl0eUlkfSBkb2Vzbid0IGV4aXN0LmApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuZW50aXRpZXNbZW50aXR5SWRdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudGl0aWVzKHN0YXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMpLnJlZHVjZSgoZW50aXRpZXMsIGVudGl0eSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uZW50aXRpZXMsXG4gICAgICAgICAgICBlbnRpdHksXG4gICAgICAgIF07XG4gICAgfSwgW10pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFbnRpdGllcyhlbnRpdGllcywgZmlsdGVycykge1xuICAgIHJldHVybiBlbnRpdGllcy5maWx0ZXIoZW50aXR5ID0+IHtcbiAgICAgICAgcmV0dXJuIGRvZXNFbnRpdHlWYWx1ZU1hdGNoKGVudGl0eSwgZmlsdGVycyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEVudGl0eShlbnRpdGllcywgZmlsdGVycykge1xuICAgIHJldHVybiBlbnRpdGllcy5maW5kKGVudGl0eSA9PiB7XG4gICAgICAgIHJldHVybiBkb2VzRW50aXR5VmFsdWVNYXRjaChlbnRpdHksIGZpbHRlcnMpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRvZXNFbnRpdHlWYWx1ZU1hdGNoKGVudGl0eSwgZmlsdGVycykge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhmaWx0ZXJzKS5ldmVyeSgoW2NvbXBvbmVudE5hbWUsIGZpbHRlclZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbHRlclZhbHVlID09PSAnZnVuY3Rpb24nICYmIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlclZhbHVlKGVudGl0eVtjb21wb25lbnROYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBmaWx0ZXJWYWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICFmaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICFlbnRpdHkuaGFzT3duUHJvcGVydHkoY29tcG9uZW50TmFtZSkgfHwgIWVudGl0eVtjb21wb25lbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZpbHRlclZhbHVlID09PSAnYm9vbGVhbicgJiYgZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuaGFzT3duUHJvcGVydHkoY29tcG9uZW50TmFtZSkgJiYgISFlbnRpdHlbY29tcG9uZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSAmJiBmaWx0ZXJWYWx1ZSA9PT0gZW50aXR5W2NvbXBvbmVudE5hbWVdO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IEdhbWUsIHsgZGVmYXVsdFN0YXRlIH0gZnJvbSAnLi9HYW1lLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9FdmVudEVtaXR0ZXIuanMnO1xuZXhwb3J0IHsgR2FtZSwgRXZlbnRFbWl0dGVyLCBkZWZhdWx0U3RhdGUgfTtcbmV4cG9ydCAqIGZyb20gJy4vc3ByaXRlcy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2VudGl0aWVzLmpzJztcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXR1cEdhbWUoY29udGFpbmVyU2VsZWN0b3IsIHNpemUsIHNjYWxlID0gMSkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgKHNpemUud2lkdGggKiBzY2FsZSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKS50b1N0cmluZygpKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAoc2l6ZS5oZWlnaHQgKiBzY2FsZSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKS50b1N0cmluZygpKTtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHtzaXplLndpZHRoICogc2NhbGV9cHhgO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtzaXplLmhlaWdodCAqIHNjYWxlfXB4YDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGRuXFwndCBjcmVhdGUgY29udGV4dCBmcm9tIGNhbnZhcycpO1xuICAgIH1cbiAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIGNvbnRleHQuc2NhbGUod2luZG93LmRldmljZVBpeGVsUmF0aW8sIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zdCBnYW1lRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBpZiAoIWdhbWVFbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCBlbGVtZW50IHdpdGggc2VsZWN0b3IgJHtjb250YWluZXJTZWxlY3Rvcn0gdG8gbW91bnQgY2FudmFzIG9uLmApO1xuICAgIH1cbiAgICBnYW1lRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNhbnZhcyxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGFkZFNwcml0ZSA9IChzcHJpdGUpID0+IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBzcHJpdGVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnNwcml0ZXMpLCB7IFtzcHJpdGUubmFtZV06IHNwcml0ZSB9KSB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlKHN0YXRlLCBuYW1lKSB7XG4gICAgaWYgKCFzdGF0ZS5zcHJpdGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc3ByaXRlIHdpdGggbmFtZSAke25hbWV9IGZvdW5kLmApO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuc3ByaXRlc1tuYW1lXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkcmF3U3ByaXRlKHNwcml0ZSwgY29udGV4dCwgcG9zaXRpb24sIHsgc2NhbGUgPSAxLCBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfSB9ID0ge30pIHtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShnZXRJbWFnZUZvckZpbGVQYXRoKHNwcml0ZS5wYXRoKSwgc3ByaXRlLm9yaWdpbi54LCBzcHJpdGUub3JpZ2luLnksIHNwcml0ZS5zaXplLndpZHRoLCBzcHJpdGUuc2l6ZS5oZWlnaHQsIChwb3NpdGlvbi54ICsgb2Zmc2V0LngpICogc2NhbGUsIChwb3NpdGlvbi55ICsgb2Zmc2V0LnkpICogc2NhbGUsIHNwcml0ZS5zaXplLndpZHRoICogc2NhbGUsIHNwcml0ZS5zaXplLmhlaWdodCAqIHNjYWxlKTtcbn1cbmNvbnN0IGltYWdlQ2FjaGUgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWFnZUZvckZpbGVQYXRoKGZpbGVQYXRoLCBjYWNoZWQgPSB0cnVlKSB7XG4gICAgaWYgKGNhY2hlZCAmJiBpbWFnZUNhY2hlW2ZpbGVQYXRoXSkge1xuICAgICAgICByZXR1cm4gaW1hZ2VDYWNoZVtmaWxlUGF0aF07XG4gICAgfVxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gZmlsZVBhdGg7XG4gICAgaW1hZ2VDYWNoZVtmaWxlUGF0aF0gPSBpbWFnZTtcbiAgICByZXR1cm4gaW1hZ2U7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3RhcnQoY2FsbGJhY2spIHtcbiAgICBzY2hlZHVsZU5leHRUaWNrKGNhbGxiYWNrKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU5leHRUaWNrKGNhbGxiYWNrKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4ge1xuICAgICAgICB0aWNrKGNhbGxiYWNrLCB0aW1lKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aWNrKGNhbGxiYWNrLCB0aW1lKSB7XG4gICAgY2FsbGJhY2sodGltZSk7XG4gICAgc2NoZWR1bGVOZXh0VGljayhjYWxsYmFjayk7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21OdW1iZXJJblJhbmdlIH0gZnJvbSAnLi9nZXRSYW5kb21OdW1iZXJJblJhbmdlJztcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoY2hvaWNlcykge1xuICAgIGlmIChjaG9pY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjaG9vc2UgZnJvbSAwIGNob2ljZXMuJyk7XG4gICAgfVxuICAgIHJldHVybiBjaG9pY2VzW2dldFJhbmRvbU51bWJlckluUmFuZ2UoMCwgY2hvaWNlcy5sZW5ndGggLSAxKV07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVySW5SYW5nZShsb3dlckJvdW5kLCB1cHBlckJvdW5kKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlckJvdW5kICsgMSArIGxvd2VyQm91bmQpKTtcbn1cbiIsImV4cG9ydCB7IGdldFJhbmRvbU51bWJlckluUmFuZ2UgfSBmcm9tICcuL2dldFJhbmRvbU51bWJlckluUmFuZ2UuanMnO1xuZXhwb3J0IHsgY2hvb3NlIH0gZnJvbSAnLi9jaG9vc2UuanMnO1xuIiwiZXhwb3J0IGNvbnN0IHNwcml0ZXNoZWV0ID0gW1xuXHR7XG5cdFx0bmFtZTogJ2JpcmQtYmx1ZS1pZGxlLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiAwLCB5OiAwIH0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmlyZC1ibHVlLWlkbGUtcmlnaHQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiAxNiwgeTogMCB9LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2JpcmQtYmx1ZS1zaW5naW5nLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiAzMiwgeTogMCB9LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2JpcmQtYmx1ZS1zaW5naW5nLXJpZ2h0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogNDgsIHk6IDAgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLWJsdWUtcGVja2luZy1sZWZ0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogNjQsIHk6IDAgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLWJsdWUtcGVja2luZy1yaWdodCcsXG5cdFx0cGF0aDogJ3NyYy9hc3NldHMvc3ByaXRlcy9iaXJkcy5wbmcnLFxuXHRcdHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sXG5cdFx0b3JpZ2luOiB7IHg6IDgwLCB5OiAwIH0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmlyZC1yZWQtaWRsZS1sZWZ0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogMCwgeTogMTYgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLXJlZC1pZGxlLXJpZ2h0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogMTYsIHk6IDE2IH0sXG5cdH0sXG5cblx0e1xuXHRcdG5hbWU6ICdiaXJkLXJlZC1zaW5naW5nLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiAzMiwgeTogMTYgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLXJlZC1zaW5naW5nLXJpZ2h0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogNDgsIHk6IDE2IH0sXG5cdH0sXG5cblx0e1xuXHRcdG5hbWU6ICdiaXJkLXJlZC1wZWNraW5nLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiA2NCwgeTogMTYgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLXJlZC1wZWNraW5nLXJpZ2h0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogODAsIHk6IDE2IH0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmlyZC1ibGFjay1pZGxlLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiAwLCB5OiAzMiB9LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2JpcmQtYmxhY2staWRsZS1yaWdodCcsXG5cdFx0cGF0aDogJ3NyYy9hc3NldHMvc3ByaXRlcy9iaXJkcy5wbmcnLFxuXHRcdHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sXG5cdFx0b3JpZ2luOiB7IHg6IDE2LCB5OiAzMiB9LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2JpcmQtYmxhY2stc2luZ2luZy1sZWZ0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogMzIsIHk6IDMyIH0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmlyZC1ibGFjay1zaW5naW5nLXJpZ2h0Jyxcblx0XHRwYXRoOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JpcmRzLnBuZycsXG5cdFx0c2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogMTYgfSxcblx0XHRvcmlnaW46IHsgeDogNDgsIHk6IDMyIH0sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnYmlyZC1ibGFjay1wZWNraW5nLWxlZnQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiA2NCwgeTogMzIgfSxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdiaXJkLWJsYWNrLXBlY2tpbmctcmlnaHQnLFxuXHRcdHBhdGg6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYmlyZHMucG5nJyxcblx0XHRzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuXHRcdG9yaWdpbjogeyB4OiA4MCwgeTogMzIgfSxcblx0fSxcbl1cbiIsImltcG9ydCB7XG5cdEdhbWUsXG5cdEdhbWVTdGF0ZSxcblx0R2FtZUV2ZW50cyxcblx0RXZlbnRFbWl0dGVyLFxuXHRhZGRFbnRpdHksXG5cdGdldEVudGl0aWVzLFxuXHRhZGRTcHJpdGUsXG5cdGdldFNwcml0ZSxcblx0ZHJhd1Nwcml0ZSxcblx0ZmluZEVudGl0aWVzLFxufSBmcm9tICdoZWtzJztcblxuaW1wb3J0IHsgc3ByaXRlc2hlZXQgfSBmcm9tICcuLi9hc3NldHMvc3ByaXRlc2hlZXQnO1xuaW1wb3J0IHBpcGUgZnJvbSAnLi91dGlsaXRpZXMvcGlwZSc7XG5pbXBvcnQgeyBjaG9vc2UsIGdldFJhbmRvbU51bWJlckluUmFuZ2UgfSBmcm9tICdyb2xsLXRoZS1ib25lcyc7XG5cbmNvbnN0IGJhY2tncm91bmRDb2xvciA9ICcjZTdmMGNlJztcbmNvbnN0IHNjYWxlID0gMztcbmNvbnN0IHdpZHRoID0gMzIwO1xuY29uc3QgaGVpZ2h0ID0gMTgwO1xuXG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbWVFdmVudHM+KCk7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShcblx0eyB3aWR0aCwgaGVpZ2h0IH0sXG5cdGV2ZW50RW1pdHRlcixcblx0eyBjb250YWluZXJTZWxlY3RvcjogJy5nYW1lJywgc2NhbGUgfVxuKTtcblxuZnVuY3Rpb24gY3JlYXRlQmlyZCgpIHtcblx0cmV0dXJuIHtcblx0XHRpc0JpcmQ6IHRydWUsXG5cdFx0Y29sb3I6IGNob29zZShbJ2JsdWUnLCAncmVkJywgJ2JsYWNrJ10pLFxuXHRcdGJlaGF2aW91cjogY2hvb3NlKFsnaWRsZScsICdzaW5naW5nJywgJ3BlY2tpbmcnXSksXG5cdFx0ZmFjaW5nOiBjaG9vc2UoWydsZWZ0JywgJ3JpZ2h0J10pLFxuXHRcdHBvc2l0aW9uOiB7XG5cdFx0XHR4OiBnZXRSYW5kb21OdW1iZXJJblJhbmdlKDAsIHdpZHRoIC0gMTYpLFxuXHRcdFx0eTogZ2V0UmFuZG9tTnVtYmVySW5SYW5nZSgwLCBoZWlnaHQgLSAxNiksXG5cdFx0fSxcblx0fVxufVxuXG5ldmVudEVtaXR0ZXIub24oJ3N0YXJ0JywgKHN0YXRlOiBHYW1lU3RhdGUpID0+IHtcblx0cmV0dXJuIHBpcGUoXG5cdFx0Li4uc3ByaXRlc2hlZXQubWFwKGFkZFNwcml0ZSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdFx0YWRkRW50aXR5KGNyZWF0ZUJpcmQoKSksXG5cdCkoc3RhdGUpO1xufSk7XG5cbmV2ZW50RW1pdHRlci5vbignYmVmb3JlRHJhdycsIChzdGF0ZTogR2FtZVN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Li4uc3RhdGUsXG5cdFx0ZW50aXRpZXM6IHtcblx0XHRcdC4uLnN0YXRlLmVudGl0aWVzLFxuXHRcdFx0Li4uZmluZEVudGl0aWVzKGdldEVudGl0aWVzKHN0YXRlKSwgeyBpc0JpcmQ6IHRydWUgfSkucmVkdWNlKChuZXdCaXJkcywgYmlyZCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLm5ld0JpcmRzLFxuXHRcdFx0XHRcdFtiaXJkLmlkXToge1xuXHRcdFx0XHRcdFx0Li4uYmlyZCxcblx0XHRcdFx0XHRcdHNwcml0ZTogYGJpcmQtJHtiaXJkLmNvbG9yfS0ke2JpcmQuYmVoYXZpb3VyfS0ke2JpcmQuZmFjaW5nfWAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdH0sIHt9KSxcblx0XHR9XG5cdH1cbn0pO1xuXG5ldmVudEVtaXR0ZXIub24oJ2RyYXcnLCAoc3RhdGU6IEdhbWVTdGF0ZSwgeyBjb250ZXh0LCBzY2FsZSB9KSA9PiB7XG5cdGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoICogc2NhbGUsIGhlaWdodCAqIHNjYWxlKTtcblx0Y29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3I7XG5cdGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgd2lkdGggKiBzY2FsZSwgaGVpZ2h0ICogc2NhbGUpO1xuXG5cdGNvbnN0IGRyYXdhYmxlRW50aXRpZXMgPSBmaW5kRW50aXRpZXMoZ2V0RW50aXRpZXMoc3RhdGUpLCB7IHNwcml0ZTogdHJ1ZSwgcG9zaXRpb246IHRydWUgfSk7XG5cdGRyYXdhYmxlRW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG5cdH0pO1xuXG5cdGRyYXdhYmxlRW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xuXHRcdGNvbnN0IHNwcml0ZSA9IGdldFNwcml0ZShzdGF0ZSwgZW50aXR5LnNwcml0ZSk7XG5cblx0XHRkcmF3U3ByaXRlKHNwcml0ZSwgY29udGV4dCwgZW50aXR5LnBvc2l0aW9uLCB7IHNjYWxlIH0pO1xuXHR9KTtcblxuXHRyZXR1cm4gc3RhdGU7XG59KTtcblxuZ2FtZS5zdGFydCgpO1xuXG5jb25zb2xlLmxvZyhnYW1lKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpcGU8UmV0dXJuVHlwZT4oLi4uZnVuY3Rpb25zOiAoKGFyZ3VtZW50OiBSZXR1cm5UeXBlKSA9PiBSZXR1cm5UeXBlKVtdKTogKGFyZ3VtZW50OiBSZXR1cm5UeXBlKSA9PiBSZXR1cm5UeXBlIHtcblx0cmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoKHBpcGVkRnVuY3Rpb24sIG5leHRGdW5jdGlvbikgPT4ge1xuXHRcdHJldHVybiAodmFsdWU6IFJldHVyblR5cGUpOiBSZXR1cm5UeXBlID0+IG5leHRGdW5jdGlvbihwaXBlZEZ1bmN0aW9uKHZhbHVlKSk7XG5cdH0sIHZhbHVlID0+IHZhbHVlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=