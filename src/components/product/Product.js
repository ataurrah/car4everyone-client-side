import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
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
            <Header/>
            <div>
                <h3 className=' text-center my-3 p-3'>Our Populer products</h3>
                <h5>total product:{product.length}</h5>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        product.map(product => <Special
                            product={product}
                        ></Special>)
                    }
                </Row>
            </div>

<Footer/>
        </div>
    );
};

export default Product;












