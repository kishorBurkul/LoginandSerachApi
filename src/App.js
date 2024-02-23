import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import Search from './Search';
import LoginUser from './LoginUser';
import { useState } from 'react';
function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };
  return (
  <>
  <h3 className='text-center'>Star Wars</h3>

    <BrowserRouter>
  <Routes>
  <Route path='/' element={<LoginUser/>}></Route>
  <Route path='/search' element={<Search/>}></Route>
  </Routes>

  </BrowserRouter>
    </>
  );
}

export default App;
