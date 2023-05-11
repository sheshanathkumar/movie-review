import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../src/component/mystyle.css'

function CarouselImage(imageUrls) {
  const [index, setIndex] = useState(0);

  console.log(imageUrls);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="main-image">
          <img
            className="main-image-img"
            src="https://sm.ign.com/t/ign_in/news/j/john-wick-/john-wick-4-digital-release-date-revealed_84jc.1280.jpg"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="main-image">
          <img
            className="main-image-img"
            src="https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202303/copy-of-g2-cover240323054145.png?size=*:480"
            alt="Second slide"
          /> </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="main-image">
          <img
            className="main-image-img"
            src="https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202303/screenshot-2023-03-24-172400240323053045.png?size=720:*"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselImage;