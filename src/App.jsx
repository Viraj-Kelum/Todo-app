import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoList } from "./Component/TodoList";
import { nanoid } from "nanoid";
import moment from 'moment';
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [todo, setTodo] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [todoData, setTodoData] = useState([]);

  const addTodo = () => {

    if(todo == '' ){
      toast.error('Please enter details')
    }else{
      const currentDateTime = moment().format('DD-MM-YYYY HH:mm:ss');

      const newTodo = {
        id: nanoid(),
        todoTitle: todo,
        todoDetails: todoDetail,
        date:currentDateTime,
        isCompleted:false,
      };
  
      setTodoData((prevTodoData) => [...prevTodoData, newTodo]);

      toast.success('Todo Added Successfully')
  
      setTodo("");
      setTodoDetail("");
    }

  
  };

  const handleComplete = (id, status) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: status } : todo
      )
    );
  };
  
  const handleDelete = (id) => {
    setTodoData((prevTodoData) => prevTodoData.filter((todo) => todo.id !== id));
    toast.success('Todo Removed')
  };
 

  return (
    <div className="col-12">
      <ToastContainer/>
      <div className="col-lg-6 text-center col-12 offset-lg-3">
        <label className="fs-1 col-12">My Todo List </label>

        <div className="col-12 mt-5">
          <div className="row">
            <div className="col-lg-6 col-12">
              <input
                className="form-control text-center"
                placeholder="Enter Todo"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                className="form-control text-center"
                placeholder="Enter Details    (Optional)"
                value={todoDetail}
                onChange={(event) => setTodoDetail(event.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-3 mt-3  d-grid">
            <button
              className="btn d-grid btn-warning"
              onClick={() => addTodo()}
            >
              Add Todo
            </button>
          </div>
        </div>

        <hr className="mb-5"></hr>

        {todoData.map((data) => {
         return <TodoList key={data.id} data={data} onComplete={handleComplete} onDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default App;
