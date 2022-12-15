import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  let[prevOperand,setPrevOperand]=useState(0);
  let[currOperand,setCurrOperand]=useState(0);
  let[currOperator,setCurrOperator]=useState("");

  useEffect(()=>{

  },[currOperand,prevOperand]);

  const handleClickOperand=(e)=>{
    currOperand=currOperand+e.target.innerText;
    
    setCurrOperand(Number(currOperand));
    console.log('currOperand111: ', currOperand);

  }
  const handleClickOperator=(e)=>{
    console.log('e.target.innerText: ', e.target.innerText);
    let calculationSign=e.target.innerText;
    switch(calculationSign){
      case '+':
          if(prevOperand===0){
            setPrevOperand(currOperand);
            setCurrOperand(0);
          }
          console.log('currOperand: ', currOperand);
          console.log('prevOperand: ', prevOperand);
          let sum=Number(prevOperand)+Number (currOperand);
          setPrevOperand(sum);
          setCurrOperand(0);
          setCurrOperator("+")

        break;
      case '-':
          if(prevOperand===0){
            setPrevOperand(currOperand);
            setCurrOperand(0);
            setCurrOperator("-");
            return;
          }
          let sub=Number(prevOperand)-Number(currOperand);
          setPrevOperand(sub);
          setCurrOperand(0);
          setCurrOperator("-");
        break;
      case '*':
          // console.log('currOperator: ', currOperator);
          // console.log('prevOperand: ', prevOperand);
          if(prevOperand===0 && currOperand!==0){
            setPrevOperand(currOperand);
            setCurrOperand(0);
            setCurrOperator("*");
            return;
          }
          let mul=Number(prevOperand) * Number(currOperand);
          setPrevOperand(mul);
          setCurrOperand(0);
          setCurrOperator("*");
        break;
      case '/':
          if(prevOperand===0 && currOperand!==0){
            setPrevOperand(currOperand);
            setCurrOperand(0);
            setCurrOperator("/");
            return;
          }
          let divide=Number(prevOperand) / Number (currOperand);
          setPrevOperand(divide);
          setCurrOperand(0);
          setCurrOperator("/");
        break;
      case '=':
        let result=0;
        console.log('currOperator: ', currOperator);
        console.log('prevOperand: ', prevOperand);
        console.log('currOperand: ', currOperand);
          // let result=eval(`${(prevOperand)} ${currOperator} ${(currOperand)}`);
          if(currOperator==="+"){
            result=Number(prevOperand)+Number (currOperand);
          }
          else if(currOperator==="-"){
            result=Number(prevOperand)- Number(currOperand);
          }
          else if(currOperator==="*"){
            result=Number(prevOperand)*Number (currOperand);
          }
          else if(currOperator==="/"){
            result=Number(prevOperand)/Number (currOperand);
            
          }
          console.log('result: ', result);
          setPrevOperand(0);
          setCurrOperand(result);
          setCurrOperator("");
        break;
      case "DEL":
          let currOperandStr=currOperand.toString().slice(0,-1);
          console.log('currOperandStr: ', currOperandStr);
          currOperand=Number(currOperandStr);
          setCurrOperand(currOperand);
          // currOperand= Math.floor(currOperand / 10);
          // setCurrOperand(currOperand);
        break;
      case "AC":
          setPrevOperand(0);
          setCurrOperand(0);
        break;
      default:
        break;
    }

  }
  return (
    <div className="App">
        <div className="calculator">
        <div className="output">
          <div data-previous-operand id="previous-operand">{prevOperand}</div>
          <div data-current-operand id="current-operand">{currOperand}</div>
        </div>
        <div className="row" id="row2">
          <button className="two-span" onClick={(e)=>handleClickOperator(e)} >AC</button>
          <button data-delete onClick={(e)=>handleClickOperator(e)}>DEL</button>
          <button data-operation onClick={(e)=>handleClickOperator(e)}>/</button>
        </div>
        <div className="row" id="row3">
          <button data-number onClick={(e)=>handleClickOperand(e)}>1</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>2</button>
          <button data-number onClick={(e)=>handleClickOperand(e)} >3</button>
          <button data-operation onClick={(e)=>handleClickOperator(e)}>*</button>
        </div>
        <div className="row" id="row4">
          <button data-number onClick={(e)=>handleClickOperand(e)}>4</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>5</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>6</button>
          <button data-operation onClick={(e)=>handleClickOperator(e)}>+</button>
        </div>
        <div className="row" id="row5">
          <button data-number onClick={(e)=>handleClickOperand(e)}>7</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>8</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>9</button>
          <button data-operation onClick={(e)=>handleClickOperator(e)}>-</button>
        </div>
        <div className="row" id="row6">
          <button data-number onClick={(e)=>handleClickOperand(e)}>.</button>
          <button data-number onClick={(e)=>handleClickOperand(e)}>0</button>
          <button data-equals className="two-span" onClick={(e)=>handleClickOperator(e)}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
