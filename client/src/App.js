import { useState } from 'react';


import DataProvider from './context/DataProvider';

import { BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';

// components
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import Header from './components/header/Header';

const PrivateRoute = ({ isAuthenticated, ...props }) =>{
  return isAuthenticated?
    <>
      <Header />
      <Outlet />
    </>

    : <Navigate replace to='/login' />
}


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
      {/* style={{marginTop:64}} */}
        <div >
          
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
