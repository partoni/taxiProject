
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { ListDrivers } from './components/drivers/listDrivers/ListDrivers';
// import SearchForm from './components/drivers/searchForm/SearchForm';

import { fetchDrivers } from './store/driverSlice';
// import {FormDriver} from './components/drivers/form/formDriver';
import { DriversPage } from './components/drivers/DriversPage';
import { DispetchersPage } from './components/dispetchers/DispetchersPage';
import { HomePage } from './components/homePage/HomePage';
import {  MainPage } from './components/layout/Layout.js';

function App() {
 
  // const {error,status,drivers}= useSelector(state=>state.drivers)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchDrivers())
  },[])

  return (
    
    <div className="App">
     
      <Routes>
        <Route path='/' element={<MainPage/>}>
            <Route path='/drivers' element={<DriversPage />}/>
            <Route path='/dispetchers' element={<DispetchersPage/>}/>
            <Route path='*' element={<h2>такой страницы пока нет</h2>}/>
            <Route index element={<HomePage/>}/>
         </Route>
    </Routes>
        {/* <FormDriver/>*/}
        {/* <SearchForm/> */}
       {/* {console.log("in return"+store)} */}
       {/*status==='loading'&&'заерузка данных'}*/}

     {/* (status==='rejected')?error:<ListDrivers drivers = {drivers} />} */}
     
     

    </div>
  )
  }

export default App;
