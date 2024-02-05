
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { ListDrivers } from './components/drivers/listDrivers/ListDrivers.js';
// import SearchForm from './components/drivers/searchForm/SearchForm';

import { fetchDrivers } from './store/driverSlice.js';
// import {FormDriver} from './components/drivers/form/formDriver';
import { DriversPage } from './components/drivers/DriversPage.js';
import { DispetchersPage } from './components/dispetchers/DispetchersPage.js';
import { HomePage } from './components/homePage/HomePage.js';
import {  MainPage } from './components/layout/Layout.js';
import { UiModal } from './ui/ui-modal/UiModal.tsx';
import { UiModalField } from './ui/ui-modal/UiModalField';

function App() {
 
  const {error,city,drivers}= useSelector(state=>state.drivers)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchDrivers(city))
  },[])

  return (
    
    <div className="App">
                
     
      <Routes>
        <Route path='/'element={<MainPage/>} >
            <Route path='/drivers' element={<DriversPage />}/>
            <Route path='/dispetchers' element={<DispetchersPage/>}/>
            <Route path='*' element={<h2>такой страницы пока нет</h2>}/>
            <Route path='/T' element={<h2>такой страницы пока нет</h2>}/>
            <Route path='/V' element={<UiModal uiModalField={<UiModalField/>}/>}/>
            <Route path='/home' element={<HomePage/>}/>
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
