import { TodoStore } from "state/TodoStore";
import { Todo, TodoData } from "models/Todo";

type Props = {
    store: TodoStore;
}

export class AddTodoController {
    store: TodoStore;

    constructor({ store }: Props) {
        this.store = store;
    }

    execute(todo: TodoData) {
        const t = new Todo(todo);
        this.store.addTodo(t);
    }
}
