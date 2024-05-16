import React from 'react'
/* import lib slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselItem from './CarouselItem';
import { topProduct } from './topProduct';



const MultiItemCarousel = () => {
    /* setup để chạy carousel */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
      };
  return (
    <div>
      {/* <Slider {...settings}>
            {topProduct.map((item)=>(
                 <CarouselItem image={item.image} title={item.title}/>))}
      </Slider> */}
      <Slider {...settings}>
        {topProduct.map((item)=>(
                 <CarouselItem image={item.image} title={item.title}/>))}
      </Slider>
    </div>
  )
}

export default MultiItemCarousel
