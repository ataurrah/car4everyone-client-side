import React from 'react';

import pic1 from './pic 1.jpeg'
import pic2 from './pic 2.jpeg'
import pic3 from './pic 3.jpeg'
import pic4 from './pic 4.jpeg'
import pic5 from './pic 5.jpeg'
import pic6 from './pic 6.jpeg'
import pic7 from './pic 7.jpeg'

const Tour = () => {
    return (
        <div className='m-3'>
            <h4 className='fw-bolder' >Why you visit bangladesh</h4>
            <p className='text-primary fw-bolder'>
                Bangladesh is situated in the north-east part of South Asia which is blessed with natural beauty, ranging from mountains, rivers, beaches, biodiversity, ancient archaeological sites, medieval monasteries to temples, pagodas, mosques, churches and many more. The majestic Himalayas locate some distance to the north, while in the south lays the Bay of Bengal. This big delta is marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains and the monsoon brings the necessary rain to soothe the hot summer making a charming weather round the year. Bangladesh has been ranked seventh out of ‘top ten best value’ travel destinations for 2019 launched by Lonely Planet, a global leader of travel guidebook publisher. But in true sense, the whole Bangladesh is a classic hotspot of eco-tourism with diverse beauty and natural wonders.</p>







                <div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={pic1} class="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic2} class="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic3} class="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic4}class="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic5}class="card-img-top" alt="..."/>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={pic7}class="card-img-top" alt="..."/>
      
    </div>
  </div>
</div>
                </div>
        </div>
    );
};

export default Tour;