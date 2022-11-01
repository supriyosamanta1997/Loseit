import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 }
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];
const image = [
  {
    image:"https://assets.loseit.com/website/home/Features_WaterTracking.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    image:"https://assets.loseit.com/website/home/Features_Macros.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    image:"https://assets.loseit.com/website/home/Features_DeviceIntegration.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    image:"https://assets.loseit.com/website/home/Features_PatternsReports.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    image:"https://assets.loseit.com/website/home/Features_Barcode.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  {
    image:"https://assets.loseit.com/website/home/Features_SnapIt.svg",
    title:"Water Tracking",
    desc:"Track your water intake to make sure you're getting the recommended amount daily."
  },
  
];

function CarouselComponent() {
  const [items] = useState(image);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>
              <div className="carousel-data">

              <div style={{width:"23%",margin:"auto",marginTop:"-8%"}}>
              <img src={item.image} alt="img" className="carousel-image"  />
              </div>
              <br/>
              <div className="carousel-title">{item.title}</div>
              <br/>
              <div className="carousel-desc">{item.desc}</div>
              </div>
              
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default CarouselComponent;


