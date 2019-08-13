import React from "react";

import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";


export function AddTodoView() {
    return (
        <>
            <AddTodo />
            <TodoList />
        </>
    )
}
