import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      At Discava, we are committed to transforming the educational experience. Our
      groundbreaking platform <HighlightText text={"leverages cutting-edge technology"} />,{" "}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {" "}
        industry expertise
      </span>
      , and vibrant community to deliver an
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        exceptional learning
      </span>{" "}
      journey like no other.
    </div>
  );
}

export default Quote;
