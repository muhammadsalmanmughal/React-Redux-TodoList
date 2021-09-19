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
            console.log('todo id from reducer ---->', action.payload)
            const updatedList = state.data.filter((tid) => tid.id !== action.payload)
            // console.log('updatedList: ', updatedList);
            return {
                ...state,
                data: updatedList
            }
        default:
            return state;
    }
}
export default todoReducers