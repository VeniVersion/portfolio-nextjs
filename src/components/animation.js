import Lottie from "lottie-react";
import React from "react";

const AnimationLottie = ({ AnimationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    AnimationData: AnimationPath,
    style: {
      width: '95%',
    }
  };


  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;