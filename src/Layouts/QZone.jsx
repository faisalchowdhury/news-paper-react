import React from "react";
import classImg from "/class.png";
import playground from "/playground.png";
import swimming from "/swimming.png";
import ad from "/ad.mp4";
const QZone = () => {
  return (
    <div className="bg-secondary p-5 space-y-5">
      <h3 className="text-xl font-semibold">Q-Zone</h3>
      <img src={classImg} alt="" />
      <img src={playground} alt="" />
      <img src={swimming} alt="" />

      <div>
        <video src={ad} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default QZone;
