import React from 'react'

const Card = (props) => {
    console.log(props.value)

    return (
        <>
            <div className="col-sm col-md col-lg py-3 mx-auto " >
                <a href="/">
                    <div className="card" style={{ width: "15rem" }}>
                        <img src={props.value.images.small} className="card-img-top" alt={props.value.name} />
                        <div className="card-body">
                            <h5 className="card-title">{props.value.name}</h5>
                        </div>
                    </div>

                </a>

            </div>
        
        </>
    )
}

export default Card
