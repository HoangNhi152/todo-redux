import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { tasksReducer } from "./components/Store";
import { legacy_createStore as createStore } from "redux";
function App() {
  const store = createStore(tasksReducer);
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
