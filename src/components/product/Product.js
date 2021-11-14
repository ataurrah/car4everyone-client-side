import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Special from '../special/Special';


const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
        , [])

    return (
        <div>
            <div>
                <h3 className='bg-primary text-center text-white p-3'>Our Populer products</h3>
                <h1>total product{product.length}</h1>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        product.map(product => <Special
                            product={product}
                        ></Special>)
                    }
                </Row>
            </div>


        </div>
    );
};

export default Product;












