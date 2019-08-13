import React from 'react';
import './App.css';
import { TodoStoreProvider } from 'state/TodoStore';
import { AddTodoView } from "views/AddTodo/AddTodoView";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoStoreProvider>
        <AddTodoView /> 
      </TodoStoreProvider>
    </div>
  );
}

export default App;
