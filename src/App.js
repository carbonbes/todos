import TodoListComponent from "./components/TodoListComponent";
import "./styles/style.scss";

function App() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6">
          <TodoListComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
