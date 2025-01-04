import React ,{useState} from "react";
import "./App.css";

const App=()=>{
  const [display,setDisplay]=useState("0");
  const [expression,setExpression]=useState("");
  const [evaluated,setEvaluated]=useState(false);

  const handleClear=()=>{
    setDisplay("0");
    setExpression("");
    setEvaluated(false);
  };
  const handleInput=(value)=>{
    if(evaluated){
      if(/\d/.test(value)){
        setExpression(value);
        setDisplay(value);
      }
      else{
        setExpression(display+ value);
        setDisplay(display+value);
      }
      setEvaluated(false);
      return;
    }
    if(value==="." && display.includes("."))
      return;
    if(value==="0" && display==="0")
      return;
    const newExpression=display==="0" && value !=="."? value:expression+value;
    setExpression(newExpression);
    setDisplay(newExpression.split(/\+|\-|\*|\//).pop()||"0");
  };
  const handleOperator=(operator)=>{
    if(evaluated){
      setExpression(display+operator);
      setEvaluated(false);
    }
    else{
      setExpression(expression.replace(/[-+*/]+$/, "")+operator);
    }
    setDisplay(operator);
  };
  const handleEvaluate=()=>{
    try{
      const result=eval(expression.replace(/\-\-/g, "+"));
      setDisplay(result.toString());
      setExpression(result.toString());
      setEvaluated(true);
    }
    catch(error){
      setDisplay("Error");
      setEvaluated(false);
    }
  };

  return(
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-72 bg-gray-800 p-4 rounded-lg shadow-lg" >
        <div id="display" className="bg-gray-700 p-4 rounded text-right text-2xl mb-4">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex gap-2">
        <button id="clear" onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-700 p-4 rounded">AC</button>
        <button id="divide" onClick={()=>handleOperator("/")} className="bg-blue-500 hover:bg-blue-700 p-4 rounded">/</button>
        <button id="multiply" onClick={()=>handleOperator("*")} className="bg-blue-500 hover:bg-blue-700 p-4 rounded">*</button>
         {[
          {id:"seven",label:"7"},
          {id:"eight",label:"8"},
          {id:"nine",label:"9"},

        ].map((btn)=>(
          <button key={btn.id} id={btn.id} onClick={()=>handleInput(btn.label)} className="bg-gray-700 hover:bg-gray-900 p-4 rounded">{btn.label}</button>
        ))}
        </div>
        <div className="flex gap-2">

        <button id="subtract" onClick={()=>handleOperator("-")} className="bg-blue-500 hover:bg-blue-700 p-4 rounded">-</button>
        {[
            { id: "four", label: "4" },
            { id: "five", label: "5" },
            { id: "six", label: "6" },
          ].map((btn) => (
            <button
              key={btn.id}
              id={btn.id}
              onClick={() => handleInput(btn.label)}
              className="bg-gray-700 hover:bg-gray-900 p-4 rounded"
            >
              {btn.label}
            </button>
          ))}
          </div>
        <button
            id="add"
            onClick={() => handleOperator("+")}
            className="bg-blue-500 hover:bg-blue-700 p-4 rounded"
          >
            +
          </button>
          {[
            { id: "one", label: "1" },
            { id: "two", label: "2" },
            { id: "three", label: "3" },
          ].map((btn) => (
            <button
              key={btn.id}
              id={btn.id}
              onClick={() => handleInput(btn.label)}
              className="bg-gray-700 hover:bg-gray-900 p-4 rounded"
            >
              {btn.label}
            </button>
          ))}
          <button
            id="equals"
            onClick={handleEvaluate}
            className="row-span-2 bg-green-500 hover:bg-green-700 p-4 rounded"
          >
            =
          </button>
          <button
            id="zero"
            onClick={() => handleInput("0")}
            className="col-span-2 bg-gray-700 hover:bg-gray-900 p-4 rounded"
          >
            0
          </button>
          <button
            id="decimal"
            onClick={() => handleInput(".")}
            className="bg-gray-700 hover:bg-gray-900 p-4 rounded"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;