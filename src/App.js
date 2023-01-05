
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  const [player, setPlayer] = useState([]);

  const getPlayers = async () => {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`)
    setPlayer(await res.json());

  }
  useEffect(() => {
    getPlayers();
   
  }, [player]);



  return (
    <>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="container py-3">
            <div className="row">

            {
                player.data.map((ele,idx) => {
                  return (
                    <Card value={ele} key={idx} />
                  )

                })
              
              }

            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;

