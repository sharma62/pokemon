
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from './components/CardDetails';

function App() {

  const [player, setPlayer] = useState();
  const [currPlayer, setCurrPlayer] = useState();

  const getPlayers = async () => {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`)
    setPlayer(await res.json());

  }
  useEffect(() => {
    getPlayers();
 
  }, [player]);

  const sandData =  (val) => {
    
    setCurrPlayer(val)
    
  }


  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <div className="container py-3">
              <div className="row">
                <Routes>
                  <Route exact path="/" element={
                    player && player.data.map((ele, idx) => {
                      return (
                        <Card value={ele} key={idx} sandData={sandData} />
                      )
                    })
                  }
                  />
                </Routes>
              </div>
              <Routes>
                <Route exact path='/cardDetails' element={<CardDetails currPlayer = {currPlayer} />} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </>
  );
}

export default App;

