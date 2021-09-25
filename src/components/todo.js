import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";
import { deleteTodo } from '../actions/todoActions';

export const TodoCards = () => {
    const { data } = useSelector(state => state.todo);
    const dispatch = useDispatch()
    return (
        <div className='cardsDiv'>
            {data.length ? data.map((a) => {

                return (
                    <div className='todoCard' key={a.id}>
                        <div className='todoCard__delete'>
                            <a className='btnDelete' onClick={() => dispatch(deleteTodo(a.id))}>
                                <FaTrashAlt />
                            </a>
                        </div>
                        <div
                            // onInput={onTextUpdate}
                            // onBlur={() => dispatch(updateTodo(a))}
                            // onBlur={() => onTextBlur(a)}
                            className='todo__heading'
                        // contentEditable={true}
                        // suppressContentEditableWarning={true}
                        >{a.todoItems}</div>
                    </div>
                )
            }) : <span className='relaxText'>Relax boy you have nothing to do<span className='relaxEmoji'>😉</span> </span>
            }
        </div>
    )
}