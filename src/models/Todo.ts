export type TodoData = {
    id: string;
    text: string;
}

export class Todo {
    id: string;
    text: string;

    constructor({id = "", text = ""}: TodoData) {
        this.id = id;
        this.text = text;
    }
}
