import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrashAlt } from "react-icons/fa";
import { deleteTodo } from '../actions/todoActions';

export const TodoCards = () => {
    const { data } = useSelector(state => state.todo);
    console.log('todos ---------------> ', data);
    const dispatch = useDispatch()
    const onTextUpdate = () => {
        console.log('input text update');
    }

    const onTextBlur = (e) => {
        console.log('e: ', e.currentTarget.textContent);
        console.log('input text blur and update');
    }
    // const todos = [
    //     {
    //         heading: 'task to do sfasdfa asdfasdfa asdf',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     },
    //     {
    //         heading: 'task to do',
    //         description: 'a quick brown fox jumps over the lazy dog / a quick brown fox jumps over the lazy dog'
    //     }
    // ]
    return (
        <div className='main'>
            {data.map((a) => {
                return (
                    <div className='todoCard' key={a.id}>
                        <div className='todoCard__delete'>
                            <button className='btnDelete' onClick={() => dispatch(deleteTodo(a.id))}>
                                <FaTrashAlt />
                            </button>
                        </div>
                        <div
                            // onInput={onTextUpdate}
                            // onBlur={onTextBlur}
                            className='todo__heading'
                        // contentEditable={true}
                        // suppressContentEditableWarning={true}
                        >{a.todoItems}</div>
                        {/* <a href=''>Read More</a> */}
                    </div>
                )
            })}
        </div>
    )
}