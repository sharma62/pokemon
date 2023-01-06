import React from 'react'
import {  Link } from "react-router-dom";
const CardDetails = (props) => {
    console.log(props.currPlayer);

     return (
        <>
            <div className="card mt-4">
                <h5 className="card-header">{props.currPlayer.supertype} Card</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col border">
                            <img src={props.currPlayer.images.small} alt="" />
                        </div>

                        <div className="col border text-center ">
                            <div className="row">
                                <caption className='text-center'>Info</caption>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Name</label>
                                    <input type="text" value={props.currPlayer.name} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>ID</label>
                                    <input type="text" value={props.currPlayer.id} disabled style={{width:"5vmax"}}  />
                                    <label htmlFor="" className='mx-2'>Hp</label>
                                    <input type="text" value={props.currPlayer.hp} disabled style={{width:"7vmax"}} />

                                </div>
                            </div>
                            <div className="row">
                                <caption className='text-center'>Weaknesses</caption>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Type</label>
                                    <input type="text" value={props.currPlayer.weaknesses[0].type} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>value</label>
                                    <input type="text" value={props.currPlayer.weaknesses[0].value} disabled />

                                </div>
                            </div>
                            <div className="row">
                                <caption className='text-center'>Attack</caption>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Name</label>
                                    <input type="text" value={props.currPlayer.attacks[0].name} disabled />

                                </div>
                                <div className="col">
                                    <label htmlFor="" className='mx-2'>Damage</label>
                                    <input type="text" value={props.currPlayer.attacks[0].damage} disabled style={{width:"10vmax"}} />

                                </div>
                            </div>
                            <div className="row">
                                <caption className='text-center'>About</caption>
                                
                                <div className="col">
                                    <label htmlFor="" className='mx-2 text-success'>{props.currPlayer.flavorText}</label>
 
                                </div>
                            </div>
                        </div>

                    </div>
                  
                       <Link to="/" className='btn btn-primary mt-3 ml-none'>Back</Link> 
                </div>
            </div>
        </>
    )
}

export default CardDetails
