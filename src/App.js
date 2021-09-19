import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './actions/todoActions'
import './App.css';
import { TodoCards } from './components/todo'
import { FaPlusCircle } from "react-icons/fa";

function App() {
  const [inputTodo, setInputTodo] = useState()
  const dispatch = useDispatch()


  return (
    <div>
      <TodoCards />
      <input type='text' value={inputTodo} placeholder='enter your todos' onChange={e => setInputTodo(e.target.value)} />
      <button
        className='btnAdd'
        // disabled={!inputTodo}
        onClick={() => dispatch(addTodo(inputTodo), setInputTodo(''))}><FaPlusCircle /></button>
    </div>
  );
}

export default App;
