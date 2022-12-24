import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Hi'), new Todo('Hello')];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
