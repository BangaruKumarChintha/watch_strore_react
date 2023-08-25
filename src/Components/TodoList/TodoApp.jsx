import React,{useState} from 'react'
import TodoList from './TodoList';
import './Todo.css';

const TodoApp = () => {
  const [list,setList] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setList(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,list];
    setTodos(newTodos);
    setList("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">TodoList Applicaton</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={list} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/> <br/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default TodoApp


