
// import { useEffect } from 'react';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
 
 


  
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="container py-3">
          <div className="row">
            <div className="col-sm col-md col-lg  py-3 mx-auto ">
                  <Card/>
            </div>
            <div className="col-sm col-md col-lg  py-3 mx-auto ">
                  <Card/>
            </div>
         
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;