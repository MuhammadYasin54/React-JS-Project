import React, {useState} from "react";

const Todo = () =>{

    const [todoInput, setTodoInput] = useState("");
    const [todoArr, setTodoArr] =  useState([]);
    const [editInput, setEditInput] = useState(null)

    const addItem = () =>{
        console.log(todoInput);
        const cloneTodos = [...todoArr]
        cloneTodos.push(todoInput);
        setTodoArr(cloneTodos);
        setTodoInput("")

    }
    const editText =(index)=>{
        setTodoInput(todoArr[index]) 
        setEditInput(index)
    }
    const updateItem = ()=>{
        const cloneTodos =  [...todoArr]
        cloneTodos[editInput]=todoInput;
        setTodoArr(cloneTodos);
        setTodoInput("")
        setEditInput(null)
    }
    const deleteItem = (key) =>{
        const cloneTodos = [...todoArr]
        cloneTodos.splice(key, 1)
        setTodoArr(cloneTodos);
    }
    return (
        <div>
            <h1>Todo Input List</h1>
            <input type="text" placeholder="Type Something" value={todoInput} onChange={(e)=> setTodoInput(e.target.value)} />
            <button onClick={addItem}>Add Data</button>
            <button onClick={updateItem}>Update</button>
            <ul> 
                {
                    todoArr?.map((item, index)=>{
                        return <li key={index}>{item}
                        <button onClick={()=>editText(index)}>Edit</button>
                        <button onClick={()=> deleteItem(index)}>Delete Item</button>
                        </li>
                        

                    })
                }
            </ul>
        </div>
    )

}
export default Todo;