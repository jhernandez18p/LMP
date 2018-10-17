import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';

// Reducers
import userReducer from './reducers/userReducer';
import carReducer from './reducers/carReducer';
import carsTypeReducer from './reducers/carsTypeReducer';
import brandReducer from './reducers/brandReducer';
import siteReducer from './reducers/siteReducer';

import data from '../data';

// const loggerMiddleware = createLogger();

const allReducers = combineReducers({
    site: siteReducer,
    user: userReducer,
    cars: carReducer,
    cars_type: carsTypeReducer,
    brands: brandReducer,
});

const initialData = data;

const composeEnhancers =  compose(
    applyMiddleware(
        thunk,
        // loggerMiddleware
    ),
    // window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers,
    initialData,
    composeEnhancers
);

export default store;