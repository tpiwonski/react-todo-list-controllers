import React from 'react';

import { Todo } from 'models/Todo';
import TodoItem from './TodoItem';
import { TodoListInjectedProps } from './TodoListContainer';

type Props = TodoListInjectedProps;

const TodoList = ({ todos }: Props) => {

    let items = todos.map((value: Todo, index: number, array: Todo[]) => 
        <TodoItem todo={value} />
    )

    return (
        <div>
            <span>* Todos *</span>
            <ul>
                {items}
            </ul>
        </div>
    )
}


export default TodoList;
