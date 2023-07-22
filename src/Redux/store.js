import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/user.reducer";
import { noteReducer } from "./notes/note.reducer";


let rootReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))