import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css'
const Header = () => {
    const { user, singout } = useAuth();
    return (
      
      <div>  <nav class="navbar navbar-expand-lg navbar-light bg-light bg">
  <div class="container-fluid d-flex justify-content-between">
  <div><NavLink className='nav fw-bold fs-2 ms-3' to="/home"> <span> <i class="fas fa-car"></i> </span>Car4Everyone</NavLink></div>
  <div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/home">Home</NavLink>
       
        </li>
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/product">Product</NavLink>
       
        </li>
        <li class="nav-item">
        <NavLink className='nav fs-4' to="/dashboard">Dashboard</NavLink>
        </li>
       

     
     
        {
                user?.email ?<>
                    <button className='mx-3 bg-success text-white' onClick={singout}> Logout</button>
                   { user?.displayName}

                </>: <> 
                <NavLink className='nav fs-4' to="/login">Login</NavLink>
            <NavLink className='nav fs-4' to="/registation">Registation</NavLink>
                </>
            }
      </ul>
    </div>
  </div>
   
  </div>
</nav></div>


        
    );
};

export default Header;



