import React from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './login.css'
const Login = () => {
  const {signinWithGoogle,setUser,setIsLoading}=useAuth()
  const history = useHistory()
  const location = useLocation()
  const Redirect_url = location.state?.from ||"/"

  const loginWithGoole = ()=>{
    signinWithGoogle()
    .then((result) => {

      setUser(result.user)
      history.push(Redirect_url)
  }).finally(() => setIsLoading(false));

  }

    return (
        <div className='login'>

          <div className='bg-s text-center'>
            <h4>Please login </h4>
         <form onSubmit=''>

         <input  className='my-1'  type="text" placeholder='Enter your Email Address'/> <br />
            <input  className='my-1'  type="password" placeholder='Enter your password'/> <br />
           <input type="submit" value="submit" />
         </form>
         <p>new user <Link to='/registation'>Create Account</Link></p>

         <div>------or-----</div>
         <button onClick={loginWithGoole} className='btn-regular'>Google sign in</button>
        </div>

        </div>
    );
};

export default Login;