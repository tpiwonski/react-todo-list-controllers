import React from 'react';

import { TodoData } from 'models/Todo';

type Props = {
    todo: TodoData;
    onSaveTodo: (data: TodoData) => void;
}

type State = {
    text: string;
}

class EditTodo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            text: props.todo.text
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleTextChange(e: any) {
        this.setState({text: e.target.value});
    }

    handleSave(e: any) {
        if (this.state.text) {
            this.props.onSaveTodo({id: this.props.todo.id, text: this.state.text});
            this.setState({text: ""});
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button onClick={this.handleSave}>Save</button>
            </div>
        )
    }
}

export default EditTodo;
