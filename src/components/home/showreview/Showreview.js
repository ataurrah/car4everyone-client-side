import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { RatingView } from 'react-simple-star-rating'
const Showreview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://murmuring-inlet-82514.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2>our client review</h2>
            <Row xs={1} md={2} lg={3} className="g-4 ms-3">
                {
                    reviews.map(review =>
                        <div className="col">

                            <Card>

                                <Card.Body>
                                    <div className="d-flex mx-3">
                                        <img src={review.img} style={{ height: "60px", widows: "60px", borderRadius: "50%" }} alt="" />
                                        <Card.Title>{review.name}</Card.Title>

                                    </div>
                                    <RatingView ratingValue={review.rating} /* RatingView Props */ />



                                    <Card.Text>
                                        {review.review}
                                    </Card.Text>
                                </Card.Body>
                                
                            </Card>

                        </div>)
                }
            </Row>
        </div>
    );
};

export default Showreview;