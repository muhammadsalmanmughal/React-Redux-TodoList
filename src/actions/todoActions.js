export const addTodo = (todoItems) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todoItems,
            id: new Date().getTime().toString()
        }
    }
}

export const deleteTodo = (id) => {
    console.log('id from action ', id);

    return {
        type: 'DELETE_TODO',
        payload: id
    }
}