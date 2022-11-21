"use strict";

// Quand on importe quelque chose exporté par défaut, on peut au passage le renommer dont store correspond bien à createStore()
import store from "./tests/store.js";

store.setState(9);

console.log("store.state : ", store.getState());