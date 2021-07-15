import  { useState } from 'react';
import { addTodo } from '../redux/actions/actions';
import {v4 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
function Addtask() {
    let [name, setName] = useState('');
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row w-50 m-2">
                <input
                
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default Addtask