import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/nav.component';
import Destination from './routes/destination/destination.component';
import Home from './routes/home/home.component';
import Crew from './routes/crew/crew.component';
import Technology from './routes/technology/technology.component';

function App() {

  return (
    <div className=' px-7 font-roboto text-white lg:px-16'>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='destination' element={<Destination />}/>
          <Route path='crew' element={<Crew />}/>
          <Route path='technology' element={<Technology />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
