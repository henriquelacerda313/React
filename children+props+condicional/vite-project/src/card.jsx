function Card({mostrar, children}) {
    return (

        <div>

       {mostrar && children}

        </div>

    );
}

export default Card;