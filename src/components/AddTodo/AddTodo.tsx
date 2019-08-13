import React from 'react';

import EditTodo from 'components/EditTodo';
import { AddTodoInjectedProps } from './AddTodoContainer';

type Props = AddTodoInjectedProps;

export const AddTodo = (props: Props) => {
    return (
        <EditTodo todo={props.todo} onSaveTodo={props.onAddTodo} />
    )
}
