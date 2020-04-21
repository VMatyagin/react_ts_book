import React, {useCallback, useEffect, useState} from "react";
import {deleteTodo, fetchTodos, Todo} from "../actions";
import {StoreState} from "../store/mainReducer";
import {connect} from "react-redux";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: Function;
}

interface AppState {
    isLoading: boolean
}

export const _App = (props: AppProps): JSX.Element => {

    const {todos , fetchTodos, deleteTodo} = props

    const doFetch = useCallback((): void => {
        setLoading({isLoading: true})
        setTimeout(() => {
            fetchTodos()
        }, 2000)
    }, [fetchTodos])

    useEffect(() => {
        setLoading({isLoading: false})
    }, [todos])

    const [isLoading, setLoading] = useState<AppState>({isLoading: false})

    const onClick = (id: number):void => {
        deleteTodo(id)
    }
    console.log('render')

    return (
        <>
            <button onClick={doFetch}>Fetch</button>
            {isLoading.isLoading && <div>Loading</div>}
            {todos.map((item:Todo): JSX.Element => (
                <div onClick={() => onClick(item.id)} key={item.id}>${item.title}</div>
            ))}
        </>
    )

}

const mapStateToProps = ({todos}: StoreState): { todos: Todo[] } => {
    return {todos}
};

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo })(_App)