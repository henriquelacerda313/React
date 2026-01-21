function Box ({cor, children}){
return (
    <div
        style={
            {border:`2px solid ${cor}`, 
            padding: "10 px",
            marginBottom: "10px"
              }
        }
        >
        
        {children}
    
    </div>
);
}

export default Box;