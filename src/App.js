import logo from './logo.svg';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoDisplay } from './components/TodoDisplay'

function App() {
  return (
    <div className="App">
      <h2>TodoApp</h2>
      <h1>
      <TodoDisplay />
      </h1>
    </div>
  );
}

export default App;
