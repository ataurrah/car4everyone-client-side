import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

import './login.css'
const Login = () => {
  const { register, handleSubmit } = useForm();
  const {signinWithGoogle,setUser,setIsLoading,signin}=useAuth()
  const history = useHistory()
  const location = useLocation()
  const Redirect_url = location.state?.from ||"/"

  const loginWithGoole = ()=>{
    setIsLoading(true)
    signinWithGoogle()
    .then((result) => {
      setIsLoading(false)

      setUser(result.user)
      history.push(Redirect_url)
  }).finally(() => setIsLoading(false));

  }
  
  
  const onSubmit = data =>{
    setIsLoading(true)
    signin(data.email,data.password)
    .then(res=>{
      setIsLoading(false)
      history.push(Redirect_url)

    })
  };

    return (
        <div className='login'>

          <div className='bg-s text-center'>
            <h4>Please login </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} placeholder="email" type="email" /> <br />
            <input {...register("password" )} placeholder="password" type="password" /> <br />
         
            <input type="submit" />
    </form>
         <p>new user <Link to='/registation'>Create Account</Link></p>

         <div>------or-----</div>
         <button onClick={loginWithGoole} className='btn-regular'>Google sign in</button>
        </div>

        </div>
    );
};

export default Login;