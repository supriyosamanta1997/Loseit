import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item2";
import "./carousel2.css";
// import { Button } from "@chakra-ui/react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 }
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];
const image = [
  {
    image:"https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-119.png?w=1010&ssl=1",
    title:"Setting Macronutrient Goals: How Many Macros do You Need?"
  },
  {
    image:"https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/02/Quick-tips-to-make-healthier-choices.png?w=1010&ssl=1",
    title:"Quick Tips to Mak Healthier Decisions"
  },
  {
    image:"https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-132.png?w=1010&ssl=1",
    title:"12 Protein-Packed Snacks to Curb Hunger Quick",
  },
  {
    image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/health-benefits-of-seltzer-water.png?w=1010&ssl=1",
    title:"Is Drinking sitzler actually healthy?",
   
  },
  {
    image:"https://i2.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-135.png?w=1010&ssl=1",
    title:"Fun 20-Mintue Treadmill Workouts",
  },
  {
    image:"https://i1.wp.com/loseitblog.com/wp-content/uploads/2019/01/Seven-benefits-of-sleep.png?w=1010&ssl=1",
    title:"Seven Stategies for better Night Sleeps",
    
  },
  {
    image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/01/Intuitive-Eating.png?w=1010&ssl=1",
    title:"The Secret Behind Intuitive Eating",
    
  },
  {
    image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/08/Untitled-design-83.png?w=1010&ssl=1",
    title:"5 Ways You’re Sabotaging Your Weight Loss",
    
  },
  {
    image:"https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/09/Untitled-design-126.png?w=1010&ssl=1",
    title:"10 Tips For Making Healthier Choices When Dining Out",
    
  },
  
];

function CarouselComponent2() {
  const [items] = useState(image);

  return (
    <div className="Carousel">
        <h2 className="carousel-balanced">A Balanced Approach to Weight Loss</h2>
        <p className="carousel-motivated">Get motivated with these nutrition and wellness tips and user success stories!</p>
      <div className="carousel-Wrapper">
        <Carousel breakPoints={breakPoints} enableAutoPlay >
          {items.map((item) => (
            <Item key={item} >
              <div className="carousel-Data">
                <img src={item.image} alt="img" className="carousel-Image" />
                <div className="carousel-Title">{item.title}</div> 
              </div>
            </Item>
            

          ))}
        </Carousel>
      </div>
      <div className="carousel-button">
        <button className="carousel-x">Get Weight Loss Tips</button>
      </div>
    </div>
  );
}
export default CarouselComponent2;


