import { children } from "react";

function Card ({titulo, children}) {
    return (

        <div style={{border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
        <h2>{titulo}</h2>

            {children}
        </div>

    );
}

export default Card;