import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import ManageAllData from './components/ManageAllData/ManageAllData';
import MyOrders from './components/MyOrders/MyOrders';
import Notfound from './components/notfound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registation from './components/registation/Registation';
import Service from './components/product/Product';
import AuthProvider from './contex/authProvider';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Product from './components/product/Product';



function App() {
  return (
    <div className="App">
<AuthProvider>
  <BrowserRouter>

<Switch>
  <Route exact path='/'>
    <Home></Home>
  </Route>
  <Route exact path='/home'>
    <Home></Home>
  </Route>
  <PrivateRoute path='/product'>
             <Product/>
            </PrivateRoute>
            <PrivateRoute path='/addProduct'>
              <AddProduct></AddProduct>
              </PrivateRoute>
              <PrivateRoute exact path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
             <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageData">
              <ManageAllData></ManageAllData>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registation'>
             <Registation></Registation>
            </Route>
            <Route path='/dashboard'>
             <Dashboard></Dashboard>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
</Switch>

  </BrowserRouter>

</AuthProvider>
    </div>
  );
}

export default App;