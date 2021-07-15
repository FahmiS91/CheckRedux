import { useSelector } from "react-redux"

import ListTask from "./components/ListTask"

import Addtask from "./components/Addtask"
import 'bootstrap/dist/css/bootstrap.css';

const App=()=>{
 
  const todos = useSelector(state => state.todos)

  return(
    <div className="w-50 m-auto" >
      <Addtask/>
      
      <ListTask todos={todos}/>
    </div>
  )
}
export default App