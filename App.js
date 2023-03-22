import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDOs] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onDelete = (event) => {
    const index = parseInt(event.target.className);
    setToDOs(toDos.filter((item,itemIndex) => 
      index !== itemIndex ))
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDOs((curr) => [...curr,toDo]);
    setToDo("");
  };

  useEffect(()=>{
    console.log(toDos);
  },[toDos]);
  return (
    <div >
      <h1 className={styles.title}>My To Dos :)</h1>
      <form onSubmit={onSubmit}>
        <input 
          maxLength = "10"
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write to do">
        </input>
        <button>Add</button>
      </form>
      <hr />
       <ul>
        {toDos.map((item,index) => <li key={index}>{item}
        <button id ={styles.delete} className={index} onClick={onDelete}>delete</button>
        </li>)}
       </ul>
    </div>
  );
}

export default App;
