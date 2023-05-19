
import React, { useState } from 'react';
import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
import { BrowserRouter,
   Routes,
    Route,
     } from 'react-router-dom';

function App() { 
  const [Mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode activated", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor ='transparent' 
      showAlert("Light mode activated", "success"); 
    }
  }
  
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtil" Home="Home" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='About' element={<About Mode={Mode}/>}></Route>
          <Route exact path='/' element={<TextForm Mode={Mode} showAlert={showAlert} />}>

          </Route>
           </Routes>
              
        </div>
  
      </BrowserRouter>
    </>
  );
}

export default App;
