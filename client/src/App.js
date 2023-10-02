
import './App.css';

import { useEffect, useState } from 'react';
import { ListDrivers } from './components/drivers/drivers';
import SearchForm from './components/searchForm/SearchForm';
import { useSelector } from 'react-redux';


function App() {
  let [store,setStore] = useState([])
  const drivers = useSelector(state=>state.drivers.drivers)
  
//  useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
// .then(drivers => {
  
//   setStore([...drivers])
  
  
// }
//   )
//  },[])
console.log(`DRIVERS in  App---------${JSON.stringify(drivers)}`);
  return (
    <div className="App">
      <div className='main '>
        <SearchForm/>
       {/* {console.log("in return"+store)} */}
     { drivers.length===0?"Not drivers":<ListDrivers drivers = {drivers} setStore={setStore}/>}
      </div>
     

    </div>
  );
}

export default App;
