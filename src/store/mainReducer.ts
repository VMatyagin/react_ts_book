import {combineReducers} from "redux";
import {todosReducer} from "./todos-reducer";
import {Todo} from "../actions";

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
})