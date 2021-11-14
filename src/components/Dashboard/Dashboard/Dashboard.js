import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  import { useHistory } from "react-router"

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ManageAllData from '../../ManageAllData/ManageAllData';
import MyOrders from '../../MyOrders/MyOrders';
import AddProduct from '../../AddProduct/AddProduct';
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="Admin">
        <NavItem eventKey="AddProduct">
            <NavText>
            <Link to={`${url}/addProduct`} className=""> Add Product</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="manageOrder">
            <NavText>
            <Link to={`${url}/manageOrder`} className=""> Manage Order</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="manageProducts">
            <NavText>
            <Link to={`${url}/manageProducts`} className=""> manage Product</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="makeAdmin">
            <NavText>
            <Link to={`${url}/makeAdmin`} className=""> make Admin</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="Pay">
            <NavText>
            <Link to={`${url}/pay`} className=""> Pay</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="myOrders">
            <NavText>
            <Link to={`${url}/myOrders`} className=""> My Order</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="review">
            <NavText>
            <Link to={`${url}/review`} className=""> Review</Link>
            </NavText>
        </NavItem>
    </SideNav.Nav>
    
</SideNav>



<div>
    {/* for dash content */}
    <Switch>
          <Route  path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/makeAdmin`}>
           <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageOrder`}>
          <ManageAllData></ManageAllData>
          </Route>
          <Route path={`${path}/myOrders`}>
        <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/manageProducts`}>
           <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
  </Switch>
</div>
            
        </div>
    );
};

export default Dashboard;