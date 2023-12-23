// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>

      <PROPS name="tawfik" age="33" profession="frontend developer"></PROPS>
      <PROPS name="ali" age="35" profession="backend developer"></PROPS>
      <PROPS name="omar" age="40" profession="software tester"></PROPS>
      <PROPS name="ahmed" age="45" profession=" programmer"></PROPS>
    </div>
  );
}

//create a function first , call this from the app
// function

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="card-1">
      <h2>react simple counter app</h2>
      <h2>{count}</h2>
      <button onClick={increase}>add</button>
      <button onClick={decrease}>minuse</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

function PROPS(props) {
  console.log(PROPS)
  return(
    <div className="cards">
      <h4>name:{props.name}</h4>
      <p>age:{props.age}</p>
      <p>profession:{props.profession}</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
    </div>
  )
}

export default App;
