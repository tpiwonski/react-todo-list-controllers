import React, { createContext } from "react"
import { decorate, observable, IObservableArray, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Todo } from "models/Todo";


export class TodoStore {
    todos: IObservableArray<Todo> = observable.array([]);

    addTodo(todo: Todo) {
        this.todos.push(todo);
    }

    get todosCount() {
        return this.todos.length;
    }
}

decorate(TodoStore, {
    todosCount: computed
})

const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);

type TodoStoreProviderProps = {}

export const TodoStoreProvider: React.FC<TodoStoreProviderProps> = ({children}) => {
    return (
        <TodoStoreContext.Provider value={todoStore}>
            {children}
        </TodoStoreContext.Provider>
    )
}

// export type TodoStoreInjectedProps = {
//     store: TodoStore;
// }

// export const withTodoStoreProps = <P extends object>(Component: React.ComponentType<P & TodoStoreInjectedProps>) => {
//     const WrappedComponent = observer(Component);
//     type Props = Omit<P, keyof TodoStoreInjectedProps>;

//     return (props: Props) => {
//         return (
//             <TodoStoreContext.Consumer>
//                 {value => <WrappedComponent {...props as P} store={value}/> }
//             </TodoStoreContext.Consumer>
//         )
//     }
// }
