import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import pic1 from './pic 3.jpg'
const Topbrand = () => {
    return (
        <div className='my-5'>
            <h3 className='my-5 text-success' >Top car brand</h3>
 
            <NavLink  to="/product"> <img src={pic1} className="d-block img w-100 h-20" alt="..."/></NavLink>

  <Row className='bg-success text-white py-3'>
    <Col xs={{ order: 'first' }}><h4>DO NOT FORGET
</h4><p>to wear seat belts while driving</p></Col>
    <Col xs><h4>CONCENTRATION
</h4><p>drive vehicle with full concentration</p></Col>
    <Col xs> <h4>RESPECT LAW </h4>
<p>respect local law while driving </p></Col>
    <Col xs={{ order: 'last' }}><h4>UPDATED PAPERS </h4>
<p>all the related papers keep with you</p></Col>
  </Row>

        </div>
    );
};

export default Topbrand;