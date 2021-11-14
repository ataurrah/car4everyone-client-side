import React from 'react';
import { Link } from 'react-router-dom';
import notfound from './Page-not-found.png'
const Notfound = () => {
    return (
        <div>
         <div> <img src={notfound} alt="" /> </div>
          <Link to ='/'><button className='my-3'>Go Back</button></Link>
        </div>
    );
};

export default Notfound;