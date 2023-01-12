import React from 'react'
import {  Link } from "react-router-dom";
 




const Card = (props) => {
    return (
        <>
                <div className="col-sm col-md col-lg py-3 mx-auto " key={props.value.id}>
                    <Link to={`/cardDetails/${props.value.id}`} >
                        <div className="card" style={{ width: "15rem" }}>
                            <img src={props.value.images.small} className="card-img-top" alt={props.value.name} />
                            <div className="card-body">
                                <h5 className="card-title">{props.value.name}</h5>
                            </div>
                        </div>
                    </Link>
                </div>

        </>
    )
}

export default Card
