import React from 'react';
import ReactDOM from 'react-dom';

import CarouselPage from 'react-leaf-carousel';

ReactDOM.render(
  <CarouselPage

    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/GiQ9Yck2h3E'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/PtPKb0okndw'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/gt3qT1h86bM'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/GiQ9Yck2h3E'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/PtPKb0okndw'
      />
    </div>
    <div>
      <img
        alt=''
        src='https://unsplash.com/photos/gt3qT1h86bM'
      />
      </div>
       </CarouselPage>
, 
document.getElementById('root'));