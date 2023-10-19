import {useForm} from 'react-hook-form'


const DispetchersPage = ()=>{
    const {register,handleSubmit,reset}=useForm()
    function onSubmit(data) {
        console.log(data);
      
    }
    return(
        <>
        <div>
            <h2>Страница диспетчеров</h2>
            <form onSubmit={handleSubmit(onSubmit) }>
                <label>
                <input {...register('name')}/>
                </label>
                <label>
                <input type='file' {...register('file')}/>
                </label>
               <button>send</button>
            </form>
        </div>
        </>
    )
}
export {DispetchersPage}