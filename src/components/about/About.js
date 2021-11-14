import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../doctor/Doctor';

const About = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
      fetch('./doctor.json')
          .then(res => res.json())
          .then(data => setDoctor(data))
  }
      , [])
    return (
        <div>
           <div>
                    <h3 className='bg-primary text-center text-white p-3'>Our specalist doctor</h3>
                    <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                        {
                            doctor.map(doctor => <Doctor
                                doctor={ doctor}
                            ></Doctor>)
                        }
                    </Row>
                </div> 
        </div>
    );
};

export default About;