import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
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


let reduxStore = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default reduxStore;