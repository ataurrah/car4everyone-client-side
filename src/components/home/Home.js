import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Carosol from '../carsol/Carosol';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import Special from '../special/Special';
import Showreview from './showreview/Showreview';


import Topbrand from './topbrand/Topbrand';


const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-inlet-82514.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }
        , [])



    return (
        <div>
            <Header />
            <Carosol />


            <div>
                <h3 className=' text-center text-success my-3'>Most recent cars for sale in Bangladesh</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        product.map(product => <Special
                            product={product}
                        ></Special>)
                    }
                </Row>
            </div>

            <div>
               
            </div>

            <div>
                <Topbrand />
            </div>

            <Showreview />





            <Footer />
        </div>
    );
};

export default Home;
