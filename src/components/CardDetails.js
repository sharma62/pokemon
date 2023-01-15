import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
const CardDetails = () => {

    const { pid } = useParams();

    //  console.log(pid)
    const [currPlayer, setCurrPlayer] = useState();

    const getCurrPlayers = async () => {
        const res = await fetch(`https://api.pokemontcg.io/v2/cards/${pid}?page=1&pageSize=1`)
        // console.log(res.json())
        setCurrPlayer(await res.json());

    }
    useEffect(() => {
        getCurrPlayers();
    }, );




    // currPlayer && console.log(currPlayer)
    // task insert the data in card 

    return (
        <>

            {currPlayer && <div className="card mt-4" >
                <h5 className="card-header">{currPlayer.data.supertype} Card</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col border">
                            <img src={currPlayer.data.images.small} alt="" />
                        </div>

                        <div className="col border text-center ">
                            <div className="row">
                                <p className='text-center py-1'>Info</p>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Name</label>
                                    <input type="text" value={currPlayer.data.name} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>ID</label>
                                    <input type="text" value={currPlayer.data.id} disabled style={{ width: "5vmax" }} />
                                    <label htmlFor="" className='mx-2'>Hp</label>
                                    <input type="text" value={currPlayer.data.hp} disabled style={{ width: "7vmax" }} />

                                </div> 
                            </div>
                            <div className="row">
                                <p className='text-center py-1'>Weaknesses</p>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Type</label>
                                    <input type="text" value={currPlayer.data.weaknesses[0].type} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>value</label>
                                    <input type="text" value={currPlayer.data.weaknesses[0].value} disabled />

                                </div>
                            </div>
                            <div className="row">
                                <p className='text-center py-1'>Attack</p>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Mode</label>
                                    <input type="text" value={currPlayer.data.attacks[0].name} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Damage</label>
                                    <input type="text" value={currPlayer.data.attacks[0].damage} disabled style={{ width: "10vmax" }} />

                                </div>
                            </div>
                            <div className="row">
                                <p className='text-center py-1'>About</p>

                                <div className="col">
                                    <label htmlFor="" className='mx-2 text-success'>{currPlayer.data.attacks[0].text}</label>

                                </div>
                            </div>
                        </div>

                    </div>

                    <Link to="/" className='btn btn-primary mt-3 ml-none'>Back</Link>
                </div>
            </div>
            }
        </>
    )
}

export default CardDetails
