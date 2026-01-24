

function Wrapper ({children}) {
    return (
        <div style={{border:"2px solid black", padding: "10px"}}>
            <h2>qualquer titulo</h2>
        {children}
        
        </div>
    );
}

export default Wrapper;