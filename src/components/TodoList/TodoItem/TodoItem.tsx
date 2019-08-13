import React from 'react';
import { Todo } from 'models/Todo';

type Props = {
    todo: Todo;
}

const TodoItem = (props: Props) => {
    return (
        <li key={props.todo.id}>
            {props.todo.text}
        </li>
    )
}

export default TodoItem;
