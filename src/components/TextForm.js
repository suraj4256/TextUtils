import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("")


  const HandleChange=(event)=>{
   setText(event.target.value)
  }

  const HandleClick=()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success");
  }

  const HandleClick2=()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
  }

  // const capitalize=(word)=>{
  //   let lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1)
  // }
  
  return (
    <>
<div className="mb-3 " >
  <label for="exampleFormControlTextarea1" className={`form-label mt-3 text-${props.mode==="dark"?"light":"dark"}`}><b>Enter Text</b></label>
  <textarea className="form-control mt-2" placeholder='Enter Text Here' value={text} onChange={HandleChange} id="exampleFormControlTextarea1" rows="10" style={{backgroundColor: props.mode==="dark"? "grey":"white" }}></textarea>
  <br>
  </br>
  <button className={`btn btn primary text-${props.mode==="dark"?"light":"dark"}`} onClick={HandleClick}>Convert to Uppercase</button>
  <button className={`btn btn primary text-${props.mode==="dark"?"light":"dark"}`} onClick={HandleClick2}>Convert to Lowercase</button>
  <button className={`btn btn primary text-${props.mode==="dark"?"light":"dark"}`} onClick={props.HandleMode}>{props.text}</button>
</div>
<div className={`container text-${props.mode==="dark"?"light":"dark"}`} my="2">
  <p>{text.length} characters and {text.split(" ").filter((element)=>{
    return element.length!=0;
  }).length} words</p>
  <p>{0.008*text.split("").length} minutes required to read</p>
</div>
    </>
  )
}