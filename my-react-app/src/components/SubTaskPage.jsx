import { useState } from "react";
import { useParams } from "react-router-dom";
import "./BasicTodoList.css"

function SubTaskPage() {

    const { id } = useParams(); //match route

    const [subtask, setSubtask] = useState("");
    const [subtaskList, setSubtaskList] = useState([]);


    const addSubtask = () => {
        if (subtask.trim() === "") return;
        setSubtaskList([...subtaskList, subtask]);
        setSubtask("");
    };

    const deleteSubtask = (index) => {
        const updated = subtaskList.filter((_, i) => i !== index);
        setSubtaskList(updated);
    };


    return (
        <>
            <h1 className="headerline">Subtasks of Task #{id}</h1>
            <div className="todo-main-container">
                <h1 className="main-header">SUB TASK LIST </h1>

                <input type="text" placeholder="Enter Subtask" value={subtask} onChange={(e) => setSubtask(e.target.value)} />

                <button onClick={addSubtask} className="addtaskbtn">
                    Add
                </button>

                {subtaskList.length === 0 ? (
                    <p>No Subtasks Yet</p>
                ) : (
                    <ol>
                        {subtaskList.map((item, i) => (
                            <li key={i}>
                                {item}
                                <button
                                    className="deletebtn"
                                    onClick={() => deleteSubtask(i)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ol>
                )}

            </div>



        </>
        );
}
export default SubTaskPage;
