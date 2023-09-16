import React,{useState} from 'react'

export default function Tayform(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked"+text);
        let newtext=text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick=()=>{
        console.log("Upper case was clicked"+text);
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearClick=()=>{
        console.log("Upper case was clicked"+text);
        let newtext='';
        settext(newtext)
        props.showAlert("All text cleared","success")
    }
    const handleOnChange=(event)=>{
        console.log("On change was clicked");
        settext(event.target.value);
    }
    const[text,settext] =useState('');
  return (
    
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'#042743' }}>
    <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey':'white' , color: props.mode === 'dark'? 'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowe Case</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'#042743' }}>
        <h2>Your Text Summary</h2>
        <p>Words-:{text.split(" ").length} and Characters-:{text.length}</p>
        <p>Time to read-:{0.008*text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something in the text area above to preview"}</p>
    </div>
    </>
  )
}
