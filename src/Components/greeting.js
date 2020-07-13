import React from "react"

const Greeting = (props) => {
    return (
        <div className="greeting">
            <h2>{props.ucapan}</h2>
        </div>
    )
}

export default Greeting