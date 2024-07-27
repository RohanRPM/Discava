import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Unlock the Future of Learning",
    highliteText: "With Discava",
    description:
      "Discava partners with top institutions and industry leaders to offer innovative and flexible online courses tailored to the needs of today's professionals.",
    BtnText: "Explore Courses",
    BtnLink: "/courses",
  },
  {
    order: 1,
    heading: "Curriculum Designed for Success",
    description:
      "Our curriculum is crafted to align with the latest industry trends and demands, ensuring that you gain the skills employers are looking for.",
  },
  {
    order: 2,
    heading: "Innovative Learning Methods",
    description:
      "At Discava, we use cutting-edge technology and teaching methods to make learning engaging and effective, no matter where you are.",
  },
  {
    order: 3,
    heading: "Certification That Matters",
    description:
      "Earn credentials that are recognized and respected by employers around the globe. Our certifications validate your skills and enhance your career prospects.",
  },
  {
    order: 4,
    heading: "Real-Time Feedback and Evaluation",
    description:
      "Get instant feedback on your progress with our auto-grading system, designed to help you improve and succeed quickly.",
  },
  {
    order: 5,
    heading: "Career-Ready Skills",
    description:
      "Prepare for the future with skills that are in high demand. Discava’s courses are designed to equip you with practical knowledge that can be applied immediately in the workplace.",
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
