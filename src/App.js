import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions/todoActions'
import './App.css';
import { TodoCards } from './components/todo'


function App() {
  const [inputTodo, setInputTodo] = useState()
  const [txtError, setTxtError] = useState(false)
  const dispatch = useDispatch()

  const checkError = () => {
    if (!inputTodo) return setTxtError(true)
    else {
      dispatch(addTodo(inputTodo))
      setInputTodo('')
      setTxtError(false)
    }
  }

  return (
    <div className='mainDiv'>
      {txtError ?
        <div className='error'>
          Oopss you left todo empty.
        </div> : ''}
      <h1>Todo App</h1>
      <div className='inputFields'>
        <input type='text' value={inputTodo} placeholder='enter your todos' onChange={e => setInputTodo(e.target.value)} />
        <button
          className='btnAdd'
          onClick={checkError}>Add Todo</button>
      </div>
      <TodoCards />
    </div>
  );
}

export default App;
