import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { Todo } from 'models/Todo';
import { TodoStoreContext} from "state/TodoStore";


export type TodoListInjectedProps = {
    todos: Todo[];
}

const withTodoListProps = <ComponentProps extends object>(Component: React.ComponentType<ComponentProps & TodoListInjectedProps>) => {
    const ObservedComponent = observer(Component);
    type Props = Omit<ComponentProps, keyof TodoListInjectedProps>;

    return observer((props: Props) => {
        const store = useContext(TodoStoreContext);

        return (
            <ObservedComponent {...props as ComponentProps} todos={store.todos} />
        )
    });
}

export default withTodoListProps;
