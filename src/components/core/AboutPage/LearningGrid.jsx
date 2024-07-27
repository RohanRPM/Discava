import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Transform Your Shopping Experience",
    highliteText: "With Discava",
    description:
      "Discover how Discava’s innovative technology enhances your eCommerce journey. From advanced object detection to finding the nearest stores, we bring you a smarter way to shop.",
    BtnText: "Explore Features",
    BtnLink: "/features",
  },
  {
    order: 1,
    heading: "Advanced Object Detection",
    description:
      "Utilize our cutting-edge object detection technology to accurately identify products and get detailed information instantly. Enhance your shopping efficiency with precision.",
  },
  {
    order: 2,
    heading: "Find Stores Nearby",
    description:
      "Easily locate stores in your vicinity with the products you're interested in. Our smart search feature connects you with nearby retailers to make your shopping seamless.",
  },
  {
    order: 3,
    heading: "Seamless Shopping Experience",
    description:
      "Enjoy a streamlined and intuitive shopping experience. Our platform is designed to make product discovery and purchase easy and enjoyable.",
  },
  {
    order: 4,
    heading: "Real-Time Product Updates",
    description:
      "Stay informed with real-time updates on product availability and store offers. Get the latest information at your fingertips and never miss out on great deals.",
  },
  {
    order: 5,
    heading: "Customer-Centric Features",
    description:
      "Experience features tailored to enhance your shopping journey. From personalized recommendations to easy store navigation, we prioritize your convenience and satisfaction.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
