
import './App.css';

import { useEffect, useState } from 'react';
import { ListDrivers } from './components/drivers/drivers';


function App() {
  let [store,setStore] = useState([])
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
.then(drivers => {

  setStore([...store,...drivers])
  console.log(store);
  
}
  )
 },[])

  return (
    <div className="App">
      <div className='main'>
      {
      // console.log("in return"+store)
      store.length===0?"Not drivers":<ListDrivers drivers = {store} setStore={setStore}/>}
      </div>
     

    </div>
  );
}

export default App;
