import {DeleteTodoAction, FetchTodosAction} from "./index";

export enum ActionTypes {
    fetchTodosDone = 'FETCH_TODO_DONE',
    fetchTodosFail = 'FETCH_TODO_FAIL',
    deleteTodo = 'TODO_DELETE',
}

export type TodoAction = FetchTodosAction | DeleteTodoAction