import React, { useState, useEffect } from "react";
import InformationSlide from "./InformationSlide";

const texts = [
    {title: "History", information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image: ""},
    {title: "Our Work", information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna duis convallis convallis. Nunc sed velit dignissim sodales ut eu. Auctor augue mauris augue neque gravida in fermentum et. Nibh praesent tristique magna sit amet. Arcu dui vivamus arcu felis. Amet nulla facilisi morbi tempus iaculis. Venenatis a condimentum vitae sapien pellentesque. Purus semper eget duis at tellus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Ut venenatis tellus in metus vulputate. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Tellus integer feugiat scelerisque varius morbi. Elementum eu facilisis sed odio. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Augue mauris augue neque gravida in fermentum. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Felis imperdiet proin fermentum leo. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Ornare arcu odio ut sem nulla pharetra diam sit amet. Ac turpis egestas integer eget. Consequat semper viverra nam libero justo laoreet sit. Ut morbi tincidunt augue interdum velit. Orci phasellus egestas tellus rutrum. Et ultrices neque ornare aenean euismod elementum nisi. Lectus sit amet est placerat. Urna duis convallis convallis tellus id interdum velit laoreet id. Natoque penatibus et magnis dis parturient montes. Viverra mauris in aliquam sem fringilla ut morbi tincidunt."}
  ];

const InfoCarousel = ({ interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [information, setInformation] = useState([]);

  useEffect(() => {
    let placeholder = texts.map((data) => <InformationSlide title={data.title} information={data.information}/>);
    setInformation(placeholder);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % texts.length);
    }, interval);
    return () => clearTimeout(timer);
  }, [activeIndex, texts.length, interval]);

  const handlePrev = () => {
    setActiveIndex((i) => (i - 1 + texts.length) % texts.length);
  };

  const handleNext = () => {
    setActiveIndex((i) => (i + 1) % texts.length);
  };

  return (
    <div className="text-carousel">
      <div className="text-container">{information[activeIndex]}</div>
      <div className="navigation">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <style>{`
        .text-carousel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80vw;
          margin: 0 auto;
          font-size: 1.5rem;
        }
        .text-container {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          text-align: center;
          animation: fadeInOut ${interval}ms ease-in-out;
        }

        .navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        button {
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 3px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default InfoCarousel;