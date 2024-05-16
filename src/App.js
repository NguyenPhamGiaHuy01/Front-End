import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './Component/Navbar/Navbar';
import { Home } from './Component/Home/Home';
import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
import Cart from './Component/Cart/Cart';
import Profile from './Component/Profile/Profile';
import CustomerRoute from './Routers/CustomerRoute';
import AdminRoute from './Routers/AdminRoute';
import Admin from './AdminComponent/Admin/Admin';
import Routers from './Routers/Routers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Component/State/Authentication/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
<ThemeProvider theme={darkTheme}>
  <CssBaseline/>

  <CustomerRoute/>
{/*  <Routers/> */}
</ThemeProvider>
  );
}

export default App;
