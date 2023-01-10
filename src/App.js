
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from './components/CardDetails';

function App() {

  const [player, setPlayer] = useState();
 
  const getPlayers = async () => {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`)
    setPlayer(await res.json());

  }
  useEffect(() => {
    getPlayers();
  }, []);




  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <header className="App-header">
            <div className="container py-3">
              <div className="row">
                <Routes>
                  <Route  path="/"
                    element={
                      player && player.data.map((ele) => {
                        return (
                          <Card value={ele} key = {ele.id}/>
                        )
                      })
                    }
                  />
                </Routes>
              </div>
              <Routes>
                <Route path='/cardDetails/:pid' element={<CardDetails/> } />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </>
  );
}

export default App;

