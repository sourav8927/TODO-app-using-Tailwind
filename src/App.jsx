import { useState ,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
   
    if(todoString!=null){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)

    }
  }, [])

  const saveToLS=(params)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished=(params)=>{
    setshowFinished(!showFinished)
  }

  const handleEdit=(e,id)=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete=(e,id)=>{
    let newTodos=todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(), todo,isCompleted:false}])
    setTodo("")
    saveToLS()
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
const handleCheckbox=(e) => {
 let id= e.target.name;
let index=todos.findIndex(item=>{
  return item.id===id;
});
let newTodos=[...todos];
newTodos[index].isCompleted=!newTodos[index].isCompleted;
setTodos(newTodos)
saveToLS()
}

  return (
    <>
      <Navbar/>
      <div className="md:container  mx-3 md:mx-auto rounded-xl md:w-[40%] sm:mx-auto sm:w-[60%] min-h-[80vh] my-10">
        <div className="addTodo bg-slate-800 p-8 rounded-xl ">
          <h1 className='text-3xl text-white mb-2 text-center'>Add Todo</h1>
          <input onChange={handleChange}  value={todo} type="text" className='outline-none w-full h-[5vh] px-2 rounded-md' />
          <button onClick={handleAdd} disabled={todo.length<=3} className="bg-violet-800 hover:bg-violet-950 disabled:bg-black text-white p-1 text-sm font-bold rounded-md mt-5 w-full ">Save</button>
        </div>
        <div className='mt-[2%] font-medium text-slate-600'>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> Show Finished
        </div>
        <h2 className='text-2xl font-bold  text-center'>Your Todos</h2>
        <div className='w-[70%] h-1.5 rounded-lg m-auto mt-2 bg-slate-400'></div>
        <div className='todos my-10  mx-auto '>
          {todos.length===0 && <div className='m-2'>No Todos to display</div>}
          {todos.map(item=>{

        return (showFinished||!item.isCompleted) && <div key={item.id} className="todo flex my-3 items-center justify-between bg-slate-400 p-5 rounded-lg">
          <div className="flex gap-5 ">
          <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
          <div  className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
        <div className="buttons gap-2  flex h-full p-auto ">
          <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 text-white p-1 text-sm font-bold rounded-md mx-2 '><FaEdit /></button>
          <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 text-white p-1 text-sm font-bold rounded-md mx-2'><MdDelete /></button>
        </div>
        </div>
          })}

        </div>
      </div>
    </>
  )
}

export default App
