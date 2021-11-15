import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './speical.css'

const Special = (props) => {
    const { productName
        ,shoreTitle,
        img,_id,price } = props.product
    console.log(props);
 
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='card-image' variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <p>{shoreTitle.slice(0,25)}...</p>
                        <p>price: ${price}</p>
                   <Link to={`/details/${_id}`}>
                   <button className='bg-primary text-white'>Buy Now</button>
                   
                   </Link>
                       
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Special;