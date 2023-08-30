import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import "./Slider.css";
import Before1 from "../images/before-img-1.jpeg"
import Before2 from "../images/before-img-2.jpeg"
import Before3 from "../images/before-img-3.jpeg"
import Before4 from "../images/before-img-4.jpeg"
import Before5 from "../images/before-img-5.jpeg"
import Before6 from "../images/before-img-6.jpeg"
import Before7 from "../images/before-img-7.jpeg"
import After1 from "../images/after-img-1.jpeg"
import After2 from "../images/after-img-2.jpeg"
import After3 from "../images/after-img-3.jpeg"
import After4 from "../images/after-img-4.jpeg"
import After5 from "../images/after-img-5.jpeg"
import After6 from "../images/after-img-6.jpeg"
import After7 from "../images/after-img-7.jpeg"

function App() {
  const images=[{
  before:Before1,
  after:After1
},
{
  before:Before2,
  after:After2
},
{
  before:Before3,
  after:After3
},
{
  before:Before4,
  after:After4
},
{
  before:Before5,
  after:After5
},
{
  before:Before6,
  after:After6
},
{
  before:Before7,
  after:After7
},

]
  // You can use the useState hook to manage the state
  const [hasError, setHasError] = useState(false);

  // You don't need getDerivedStateFromError and componentDidCatch hooks in functional components

  return (
    <div className="container">
      <div className="contentWrapper">
        <ReactCompareImage width={"500px"} leftImage={images[0]?.before} rightImage={images[0]?.after} />
         <ReactCompareImage leftImage={images[1]?.before} rightImage={images[1]?.after} />
        <ReactCompareImage leftImage={images[2].before} rightImage={images[2].after} />
        <ReactCompareImage leftImage={images[3].before} rightImage={images[3].after} />
        <ReactCompareImage leftImage={images[4].before} rightImage={images[4].after} />
        <ReactCompareImage leftImage={images[5].before} rightImage={images[5].after} />
        <ReactCompareImage leftImage={images[6].before} rightImage={images[6].after} />



      </div>
    </div>
  );
}

export default App;
