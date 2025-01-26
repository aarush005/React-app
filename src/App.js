import './App.css';
import { Navbar } from './Navbar';
import { useState } from 'react';
import TextForm from './TextForm';
// import About from './About';
function App() {
  const [mode, setmode] = useState('light')

  const [btntext, setBtntext] = useState(false );

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#212529';
      
  }
  else{
    setmode ('light');
    document.body.style.backgroundColor = 'white';
  }
}
  return (
      <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <TextForm />
       {/* <About /> */}

       
      </>
  );
}

export default App;
