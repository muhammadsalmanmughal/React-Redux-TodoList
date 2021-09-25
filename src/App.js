import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './actions/todoActions'
import './App.css';
import { TodoCards } from './components/todo'
import { FaPlus } from "react-icons/fa";


function App() {
  const { data } = useSelector(state => state.todo);
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
          Don't you think you are missing something 🤔.
        </div> : ''}
      <div className=''>
        <div className='inputFields col m10'>
          <input type='text' value={inputTodo} placeholder='Enter Todos' onChange={e => setInputTodo(e.target.value)} />
          <button
            className='btnAdd'
            onClick={checkError}>
            <FaPlus />
          </button>
        </div>
        <div className='numberOfTodos col m2'>
          {data.length ?
            <h3>No. of Todos: {data.length}</h3> : ''}
          <div>
            {data.length >= 5 ? <h5>Boy you have a lot of work todo 😕</h5> : ''}
          </div>
        </div>
      </div>

      <TodoCards />

    </div>
  );
}

export default App;
