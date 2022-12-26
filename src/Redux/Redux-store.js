import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import AppReducer from './Reducers/AppReducer';
import ProfileReducer from './Reducers/ProfileReducer';
import DialogReducer from './Reducers/DialogReducer';
import UsersReducer from './Reducers/UsersReducer';
import SidebarReducer from './Reducers/SidebarReducer';
import AuthReducer from './Reducers/AuthReducer';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    app: AppReducer,
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    usersPage: UsersReducer,
    sidebarPage: SidebarReducer,
    auth: AuthReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;