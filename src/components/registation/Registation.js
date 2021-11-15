import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './reg.css'
const Registation = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {registration,setUser,saveUser,setAdmin,user,updateName
    }=useAuth();


    const manulayRegister = (e)=>{
        e.preventDefault()
        registration(email,password)
        .then(res=>{
          
            alert("Your are succesfuly REgister pleas login")
            saveUser(email,name,"post")
            updateName(name)
            history.push("/login")
            
            setUser({})
        })
    }


    
    const handleName = (e)=>{
        e.preventDefault()
        setName(e.target.value)

    }
    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)

    }
    const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }


    return (
        <div className=' login'>
          
            <div className="container">
            <form onSubmit={manulayRegister}>
            <h4>Please Registation </h4><br />
            <input className='mb-2' type="text" onBlur={handleName} placeholder='Enter your full name'/> <br />
            <input onBlur={handleEmail}  className='my-1'  type="text" placeholder='Enter your Email Address'/> <br />
            <input onBlur={handlePassword}  className='my-1'  type="password" placeholder='Enter your password'/> <br />
            <button onClick={manulayRegister} className='bg-success text-white'>Submit</button> <br />
            <p>already have an account ? <Link to='/login'>login</Link></p> 
            <div>------or-----</div>
         <button className='btn-regular'><span><i class="fab fa-google"></i></span> Google sign in</button>
    
            </form>
          
            </div> 
            <div>
           
            </div>
        </div>


    );
};

export default Registation;



