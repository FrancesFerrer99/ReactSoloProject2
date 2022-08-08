import React from "react"
import '../index.css'

function Card(props){
    return(
        <div className="item-content">
            <div className="item-content-img">
                <img src={props.imageUrl}/>
            </div>
            <div className="item-content-text">
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;