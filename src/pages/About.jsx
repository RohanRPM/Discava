import React from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Footer from "../components/Common/Footer";
import ReviewSlider from "../components/Common/ReviewSlider";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Revolutionizing Online Shopping with 
            <HighlightText text={"Discava"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Discava is at the forefront of revolutionizing online shopping. We are passionate about creating a seamless shopping experience by offering a wide range of products, leveraging cutting-edge technologies, and nurturing a vibrant customer community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="Banner 1" />
            <img src={BannerImage2} alt="Banner 2" />
            <img src={BannerImage3} alt="Banner 3" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Discava was born out of a desire to transform the eCommerce landscape. Our journey started with a group of passionate individuals who recognized the need for an accessible, user-friendly, and high-quality online shopping platform in an increasingly digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With our extensive experience in retail and technology, we set out to create a platform that breaks down the barriers of traditional shopping. We envisioned a space where customers could explore a vast array of products from the comfort of their homes and receive unparalleled service and convenience.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our vision is to revolutionize online shopping by combining cutting-edge technology with an extensive range of products. We aim to create a dynamic and engaging shopping experience that meets the needs of modern consumers.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond offering products online. We strive to create a vibrant community of shoppers who can connect, share, and learn from each other. We believe in the power of community and foster this spirit through customer reviews, live chats, and interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviews from Customers */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from our Customers
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
};

export default About;
