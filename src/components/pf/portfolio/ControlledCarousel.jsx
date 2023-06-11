import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



const ControlledCarousel = ({images}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} id="pf-carousel" className="carousel slide" interval={null}>

        {images.map( (image, i) => 

          <Carousel.Item key={i}>
            <img className="d-block w-100"
                 src={image}
                 alt="First slide"/>
          </Carousel.Item>

        )}

      </Carousel>


      <div className="carousel-thumbs">

          {images.map( (image, i) => 
              <img src={image}
                   key={i}
                   onClick={()=>setIndex(i)}
                   className={i===index ? "active" : ""}
                   alt={"thumbnail "+i}/>
          )}

      </div>


    </>
  );
}


export default ControlledCarousel