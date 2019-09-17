import { createStore, applyMiddleware, compose } from 'redux';

// needed to implement redux-localstorage
// import persistState from 'redux-localstorage';

// needed to implement thunk
// import thunk from "redux-thunk";

import initial from './initial';
import reducer from './reducer';

// needed to implement redux-localstorage && thunk with redux devtools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initial, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // needed to implement redux-localstorage
    // composeEnhancers(persistState()),
    // needed to implement thunk
    // composeEnhancers(applyMiddleware(thunk)),
);

export default store;