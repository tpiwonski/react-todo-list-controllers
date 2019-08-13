import React, { useState, useContext } from 'react';

import { TodoData } from "models/Todo";
import { TodoStoreContext } from "state/TodoStore";
import { AddTodoController } from 'controllers/AddTodoController';

export type AddTodoInjectedProps = {
    todo: TodoData;
    onAddTodo: (data: TodoData) => void;
}

type State = TodoData;

const emptyTodo = function(): TodoData {
    return {
        id: "", 
        text: ""
    }
}

const withAddTodoProps = <P extends object>(Component: React.ComponentType<P & AddTodoInjectedProps>) => {
    type Props = Omit<P, keyof AddTodoInjectedProps>;

    return (props: Props) => {
        const store = useContext(TodoStoreContext);
        const [state, setState] = useState<State>(emptyTodo());
        const controller = new AddTodoController({ store });

        function handleAddTodo(data: TodoData) {
            controller.execute(data);
            setState(emptyTodo());
        }

        return (
            <Component {...props as P} todo={state} onAddTodo={handleAddTodo} />
        )
    }
}

export default withAddTodoProps;
