// NOTE: use this store variable to create a store.
import {legacy_createStore, applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer} from "./AuthReducer/reducer";
import {reducer as AppReducer} from "./AppReducer/reducer";

const rootReducer = combineReducers({AppReducer,AuthReducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
