function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState("0")
  const display = (Symbol)=>{
    setExpression(prev => prev + Symbol)
    if(expression(expression.length-1) === "="){
      if(/[1-9]/.test(Symbol)){
        setExpression(Symbol)
      }else{
        setExpression(answer + Symbol);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev)=>prev + "=")
  };
  
  const allClear = ()=>{
setExpression("");
setAnswer("");
  }
  const clear = () => {
    setExpression(prev => prev.split("").slice(0, prev.length - 1).join(""));
    setAnswer("0");
  };
  
    return (
      <div className="container">
        <div className="grid">
          <div className="display">
<input type="text" value={expression} placeholder="0" disabled></input>
<div className="Total">{answer}</div>
          </div>
          <button onClick={allClear} className="padbutton AC natty">AC</button>
          <button onClick={clear} className="padbutton C natty">C</button>
          <button onClick={()=>display("/")} className="padbutton divide">/</button>
          <button onClick={()=>display("*")} className="padbutton times">*</button>
          <button onClick={()=>display("7")} className="padbutton seven dark-gray">7</button>
          <button onClick={()=>display("8")} className="padbutton eight dark-gray">8</button>
          <button onClick={()=>display("9")} className="padbutton nine dark-gray">9</button>
          <button onClick={()=>display("-")} className="padbutton minus dark-gray">-</button>
          <button onClick={()=>display("4")} className="padbutton four dark-gray">4</button>
          <button onClick={()=>display("5")} className="padbutton five dark-gray">5</button>
          <button onClick={()=>display("6")} className="padbutton six dark-gray">6</button>
          <button onClick={()=>display("+")} className="padbutton plus dark-gray">+</button>
          <button onClick={()=>display("1")} className="padbutton one dark-gray">1</button>
          <button onClick={()=>display("2")} className="padbutton two dark-gray">2</button>
          <button onClick={()=>display("3")} className="padbutton three dark-gray">3</button>
          <button onClick={calculate} className="padbutton equals Agang">=</button>
          <button onClick={()=>display("0")} className="padbutton zero">0</button>
          <button onClick={()=>display(".")} className="padbutton dot">.</button>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  