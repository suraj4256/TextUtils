// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
// import About from './components/About.js'
// import Contact from './components/Contact.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom


function App() {

const [mode,NewMode]= useState("light")
const [text,NewText]= useState("Switch To Dark")
const [alert,NewAlert]=useState(null)

let modestyle={
  backgroundColor: mode==="light"? "white":"blue",
}

const showAlert = (message, type)=>{
         NewAlert({
          msg: message,
          type: type
         })
         /*
         In this below modified version of the showAlert function:

We store the reference to the setTimeout function in a variable timeoutId.
Inside the setTimeout callback, we clear the timeout by calling clearTimeout(timeoutId). This ensures that the setAlert(null) is only called after the specified timeout duration, and it avoids attempting to remove the Alert component from the DOM if it has already been removed.
By implementing this change, you should be able to prevent the "Failed to execute 'removeChild' on 'Node'" error from occurring in your code.
         */
       const timeoutId =  setTimeout(()=>{
             NewAlert(null);
             clearTimeout(timeoutId);
         },3000)
}

const HandleMode=()=>{
if(mode==="light"){
  NewMode("dark");
  NewText("Switch To Light");
  document.body.style.backgroundColor="#121212";
  showAlert("Dark mode activated","success");
  
}else{
  NewMode("light");
  NewText("Switch To Dark");
  document.body.style.backgroundColor="white";
  showAlert("Light mode activated","success");
}}

  return ( 
    <>
     {/* <Router> */}
      {/* <> */}
        <Navbar mode={mode} name="Text Utils" about="About Us" contact="Contact Us"></Navbar>
        <div>
          <Alert alert={alert}></Alert>
        </div>
        <div className='container'>
          {/* <Routes> */}
            <TextForm showAlert={showAlert} HandleMode={HandleMode} text={text} mode={mode}/>
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </> */}
    {/* </Router> */}
    </>
  );
}

export default App;
