import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };
  const resetfnc = () => {
    let newText ='';
    setText(newText);
    props.showAlert("Text Box Cleared", "success");
  };
  const copyfnc = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied On ClickBoard", "success")
  };
  const Removefnc=()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra Spaces Are Removed", "success")
  };
  const handlefirstwordCapitalClick = (event) => {
    let newtext = (text)=>{
        var splitStr = text.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' ');
       
    }
    setText(newtext);
    props.showAlert("First Latters Are Capitalized", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };
  const [text, setText] = useState("");

  return (
    <div className="container"style={{color:props.Mode==='dark'?'white':'black'}} >
      <h1 className="my-2">Type Your Text Below The Box</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert To LowerCase
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={handlefirstwordCapitalClick}
      >
        Convert First Latter To Capital
      </button>
      <button className="btn btn-primary mx-2" onClick={Removefnc}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-2" onClick={copyfnc}>
        Copy
      </button>
      <button className="btn btn-primary mx-2" onClick={resetfnc}>
        Reset
      </button>
      <div className="container my-3" >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words And {text.length}
        </p>
        <p>
          This will take {0.008 * text.split(" ").length} Minutes to Read it..
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text Above The Box To Preview It Here.."}</p>
      </div>
    </div>
  );
}
