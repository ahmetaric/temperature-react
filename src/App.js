import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(10);


  const plus = () =>{
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }
 const background = ()=> {
   let bgColor;
   
   if(count > 5 && count < 16){
    bgColor = "yellow";
   }
   else if(count > 15 && count < 26){
    bgColor = "darkblue"
   }
   else if( count > 25 && count < 36){
    bgColor = "purple"
   }
   return bgColor;
   
 }

 const newColor = ()=>{
    let Color;
   
   if(count > 5 && count < 16){
    Color = "red";
   }
   else if(count > 15 && count < 26){
    Color = "black";
   }
   else if (count > 25 && count < 36) {
     Color = "yellow";
   }
   return Color;
   
 
 }

  return (
    <div className="App" style = {{backgroundColor:background()}}>
      <div className="derece">
        <p className="paragraf" style = {{color:newColor()}}>{count}ºC</p>
        
      </div>
      <div className="buttons">
        <button className="plus btn" onClick = {plus}>+</button>
        <button className="minus btn" onClick= {minus}>-</button>
      </div>
    </div>
  );
}

export default App;
