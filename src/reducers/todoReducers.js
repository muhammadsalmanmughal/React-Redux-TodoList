const initState = {
    data: []
}
const todoReducers = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { todoItems, id } = action.payload
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        todoItems,
                        id
                    }
                ]
            }
        case 'DELETE_TODO':
            const updatedList = state.data.filter((tid) => tid.id !== action.payload)
            return {
                ...state,
                data: updatedList
            }
        default:
            return state;
    }
}
export default todoReducers