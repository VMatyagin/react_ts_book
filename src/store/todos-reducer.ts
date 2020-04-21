import {Todo} from "../actions";
import {ActionTypes, TodoAction} from "../actions/actionTypes";


export const todosReducer = (state: Todo[] = [], action: TodoAction):Todo[] => {
    console.log('actionChecker', action)
    switch (action.type) {
        case ActionTypes.fetchTodosDone:
            return action.payload
        case ActionTypes.fetchTodosFail:
             return action.payload
        case ActionTypes.deleteTodo:
            return state.filter( item => item.id !== action.payload )
        default:
            return state
    }
}