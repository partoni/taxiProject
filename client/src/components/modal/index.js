
const Modal = ({error})=>{
return(
    
    <div className="bg-opacity-50 bg-slate-800 border-2 border-red-300 absolute top-0 left-0 right-0 bottom-0">
        <h2>ERROR</h2>
        <span>{error}</span>
    </div>
    
)
}
export default Modal