import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions/actions';

function Task({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 w-50 ">
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default Task