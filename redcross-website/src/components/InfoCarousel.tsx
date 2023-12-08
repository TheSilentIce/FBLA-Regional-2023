import React, { useState, useEffect } from "react";
import InformationSlide from "./InformationSlide";
import ClaraBarton from "../assets/Clara-Barton-photograph-Mathew-B-Brady-1866.jpeg";
import RedCrossWork from "../assets/red-cross-work.jpeg";
import RedCrossWhatWeAre from "../assets/what-we-are.jpeg";
const texts = [
    {title: "History", information: "Clara Barton, a Civil War nurse, witnessed the suffering of soldiers firsthand. Inspired by the Red Cross in Europe, she returned home determined to bring its mission to America. Despite facing skepticism, she tirelessly campaigned and finally founded the American Red Cross in 1881. Under her leadership, the Red Cross expanded its reach beyond war relief, providing aid during natural disasters and advocating for public health initiatives. Today, Clara Barton's legacy lives on through the Red Cross, a global symbol of hope and compassion that continues to help those in need.", image: ClaraBarton},
    {title: "What We Are About", information: "From disaster relief to blood donation, the Red Cross provides a global safety net for humanity. They offer immediate support in crises, like in Nepal's earthquake, and long-term aid in war-torn regions. Beyond emergencies, they empower individuals through first aid and CPR training, reuniting families separated by conflict, and advocating for peace and understanding. The Red Cross's enduring legacy is one of hope and resilience, built upon the unwavering compassion of countless volunteers and supporters.", image: RedCrossWhatWeAre},
    {title: "Our Work", information: "The Red Cross stands as a pillar of support in times of need. From disaster relief and blood services to community programs and international aid, their reach extends far and wide. They provide essential resources and support, empowering individuals and communities to face challenges and build a brighter future. With unwavering dedication and compassion, the Red Cross makes a tangible difference in the lives of millions across the globe.", image: RedCrossWork},
  ];

const InfoCarousel = ({ interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [information, setInformation] = useState([]);

  useEffect(() => {
    let placeholder = texts.map((data) => <InformationSlide title={data.title} information={data.information} img={data.image}/>);
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
        <button className="carousel-button btn btn-danger" onClick={handlePrev}>Previous</button>
        <button className="carousel-button btn btn-danger" onClick={handleNext}>Next</button>
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
          margin-bottom: 5vh;
        }
        .text-container {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          text-align: center;
          animation: fadeInOut 1000ms ease-in-out;
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
        .carousel-button {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default InfoCarousel;