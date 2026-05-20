import React, { useState } from "react";

const Todo = () => {

    const [todoInput, setTodoInput] = useState("");
    const [todoArr, setTodoArr] = useState([]);
    const [targetKey, setTargetKey] = useState("")
    const [isEdit, setIsEdit] = useState(false)

    const addItem = () => {
        console.log(todoInput);
        const cloneTodos = [...todoArr]
        cloneTodos.push(todoInput);
        setTodoArr(cloneTodos);
        setTodoInput("")

    }
    const deleteItem = (key) => {
        const cloneTodos = [...todoArr]
        cloneTodos.splice(key, 1)
        setTodoArr(cloneTodos);
    }

    const editItem = (key) => {
        const targetVal = todoArr[key]
        setTargetKey(key)
        setTodoInput(targetVal);
        setIsEdit(true)
    }
    const updateItem = () => {
        const cloneTodos = [...todoArr]
        // cloneTodos[isEdit]=todoInput;
        cloneTodos.splice(targetKey, 1, todoInput);
        setTodoArr(cloneTodos);
        setTodoInput("")
        setIsEdit(false);
        setTargetKey("")
    }
    const undoItem = () => {
        setTodoInput("")
        setIsEdit(false)
    }

    return (
        <div className="container">
            <h1>Todo Input List</h1>
            <input type="text" placeholder="Type Something" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            {
                (isEdit)
                    ?
                    (<div>
                        <button onClick={undoItem}> Undo</button>
                        <button onClick={updateItem}>Update</button>
                    </div>)
                    :
                    (<div>
                        <button onClick={addItem}>Add Data</button>
                        <button onClick={() => setTodoArr([])}>Delete All</button>
                    </div>)
            }

            <ul>
                {
                    todoArr?.map((item, index) => {
                        return <li key={index}>{item}
                            <button onClick={() => editItem(index)}>Edit</button>
                            <button onClick={() => deleteItem(index)}>Delete Item</button>
                        </li>


                    })
                }
            </ul>
        </div>
    )

}
export default Todo;