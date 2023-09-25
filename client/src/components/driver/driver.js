

function Driver(props) {
   const removeDriver=()=>{

    }
    return(
        <div className="driverCell" style={{display:"flex"}} key={Date.now()}>
            <p4>{props.name}</p4>
            <div onClick={removeDriver} style={{border:"1px solid #000",cursor:"pointer",display:"inline-block"}}>delete</div>
        </div>
    )
}
export default Driver