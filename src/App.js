import './App.css';
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  console.log(todo)
  return (
    <>
      <div className="body-container">
        <div className="main-container">
          <div className="heading">
            <h1> todo app</h1>
            <div> <input value={value} type="text" onChange={(e) => { setValue(e.target.value) }} placeholder="Enter the value" />
              <button onClick={() => {
                setTodo([{ value, edit: false }, ...todo])
                setValue("")
              }}>addtodo </button>
              <button onClick={() => { setTodo([]) }}>Delete All</button>
            </div>
            <div className="list-set">
              <ul>
                {todo.map((v, i) => <li key={i}>
                  {v.edit ? <input type="text" onChange={(e) => {
                    todo[i].value = e.target.value;
                    console.log(todo)
                  }} defaultValue={v.value} /> : v.value}

                  {v.edit ?
                  <button onClick = {() => {
                    const arr = [...todo]
                    arr[i].edit = false
                    setTodo(arr)
                  }}>Update</button>

                  : <button onClick = {()=> {
                    const arr = [...todo]
                    arr[i].edit = true
                    setTodo(arr)
                  }}>Edit</button>}

                  <button onClick = {()=> {
                    todo.splice(i, 1)
                    console.log(todo)
                    const arr = [...todo]
                    arr.splice(i, 1)
                    setTodo(arr)
                  }}>Delete</button>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
