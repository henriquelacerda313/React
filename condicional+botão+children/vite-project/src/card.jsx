// o Card não decide nada, ele só exibe o conteúdo

function Card({children}) {
    return(
        <div style={{border:"2px solid black", padding:"10px", marginTop:"10px"}}>
            {children} 
        </div>
    );
}

export default Card;