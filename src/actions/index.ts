import {Dispatch} from "redux";
import {axiosInstance} from "../API";
import {ActionTypes} from "./actionTypes";
import {AxiosResponse} from "axios";

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodosDone | ActionTypes.fetchTodosFail
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo
    payload: number
}

const setFetchDataDone = (isSuccess: Todo[]): FetchTodosAction => ({type: ActionTypes.fetchTodosDone, payload: isSuccess})
// здесь вместо payload нужно поместить код ошибки или типа того
const setFetchDataFail = (): FetchTodosAction => ({type: ActionTypes.fetchTodosFail, payload: []})
const setDeleteTodo = (id: number): DeleteTodoAction => ({type: ActionTypes.deleteTodo, payload: id})

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
            await axiosInstance.get<Todo[]>('/todos')
                .then((response: AxiosResponse):FetchTodosAction => dispatch<FetchTodosAction>(setFetchDataDone(response.data)))
                .catch((err):FetchTodosAction => {
                    console.log(err)
                    return dispatch(setFetchDataFail())})
    }
}

export const deleteTodo = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setDeleteTodo(id))
    }
}