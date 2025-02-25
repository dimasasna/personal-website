import Spline from "@splinetool/react-spline";
import React from "react";

type Props = {};

const SplineComponent = (props: Props) => {
  return (
    <div className="bg-black">
      <Spline scene="https://prod.spline.design/0MUpO-PGdX4panHm/scene.splinecode" />
    </div>
  );
};

export default SplineComponent;
