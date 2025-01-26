import React, {useState} from 'react'

export default function TextForm() {
  const handleUpClick = ()=> {
    console.log("Uppercase button was clicked" + text)
  }
  const handleOnChange = ()=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter your text")
  return (
    <form className="row g-3">
    <h1>Sign up for </h1>
  <div className="mb-3">
    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
    </div>
    <button type='submit' className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
</form>
  )
}

