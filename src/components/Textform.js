import React,{useState} from 'react'

export default function Textform() {
    const handleUpClick= () =>{
         console.log("Uppercase was clicked" + text);
         let newText = text.toUpperCase();
         setText(newText);
    }

    const handleLoClick= () =>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
 }

    const handleOnChange= (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
     
    const clearText= (event) =>{
      console.log("Text cleared");
      let newText = ' '
      setText(newText);
  }
    
    const [text, setText] = useState("Enter your text here");

   // setText("this is the new entity");

  return (
    <>
    <div>
      
<div className='ab-3'>
  <label htmlFor="my-Box" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="my-Box" rows="8"></textarea>
  <div className="nootan my-2">
    
  </div>
</div>
<button className='btn.btn.primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn.btn.secondary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn.btn.ternary' onClick={clearText}>clearText</button>

    </div>
    <div className='container'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} and {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2> {text} .....</h2>
    </div>
    </>
  )
}
