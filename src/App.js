import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Tayform from './components/Tayform';
import React , {useState} from 'react'



function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled" , "success");
    }
  }

  return (
    <>
    {/**<BrowserRouter> */}
      <Navbar
        title="TayVerse"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        {/**<Routes> */}
          {/**<Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={ */}
              <Tayform
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            {/**}
          ></Route> */}
        {/**</Routes> */}
      </div>
   {/** </BrowserRouter> */}
  </>
);
}

export default App;
