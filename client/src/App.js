
import { useEffect } from 'react';
import './App.css';


import { ListDrivers } from './components/drivers/drivers';
import SearchForm from './components/searchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from './store/driverSlice';


function App() {
 
  const {error,status,drivers}= useSelector(state=>state.drivers)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchDrivers())
  },[])

  return (
    <div className="App">
      <div className='main '>
        <SearchForm/>
       {/* {console.log("in return"+store)} */}
       {status==='loading'&&'заерузка данных'}
     { (status==='rejected')?error:<ListDrivers drivers = {drivers} />}
      </div>
     

    </div>
  );
}

export default App;
