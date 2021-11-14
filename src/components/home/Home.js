import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Carosol from '../carsol/Carosol';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import Special from '../special/Special';

import Spare from './spare/Spare';


const Home = () => {
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
            <Carosol />


            <div>
                <h3 className='bg-primary text-center text-white p-3'>Most recent cars for sale in Bangladesh</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        product.map(product => <Special
                            product={product}
                        ></Special>)
                    }
                </Row>
            </div>
<div>
    <Spare></Spare>
</div>

            <div>
            
            </div>







<Footer/>
        </div>
    );
};

export default Home;
