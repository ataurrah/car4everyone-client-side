import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './speical.css'

const Special = (props) => {
    const { ProductName,shoreTitle,
        img,_id } = props.product
    console.log(props);
 
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='card-image' variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{ProductName}</Card.Title>
                        <p>{shoreTitle.slice(0,25)}...</p>
                   <Link to={`/details/${_id}`}>
                   <button className='bg-primary text-white'>Booking Now</button>
                   
                   </Link>
                       
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Special;