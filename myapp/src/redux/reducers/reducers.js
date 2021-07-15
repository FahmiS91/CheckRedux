import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/actions';
const initState={
    todos:[]
}


 let  reducer = (state =initState, action) => {
    let newTodos;
    switch (action.type) {
        default:return state
        case ADD_TODO:
            newTodos = [...state.todos];
            newTodos.push(action.payload);
            return {todos:newTodos};
        case DELETE_TODO:
            newTodos = [...state.todos];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return {todos:newTodos};
        case UPDATE_TODO:
            newTodos = [...state.todos];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return {todos:newTodos};
                
            }
    }
    
}

export default reducer 