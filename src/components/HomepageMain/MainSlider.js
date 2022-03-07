import React, { useEffect, useRef, useState } from "react";

import CommonType from "components/slide/CommonType";
const MainSlider = (props) => {
  const [nowPosit, setNowPosit] = useState(0);

  return (
    <>
      <div className="slider_descriptsion">common</div>
      <CommonType nowPosit={nowPosit} setNowPosit={setNowPosit} />
      <div className="slider_descriptsion">Slick Library</div>
    </>
  );
};
export default MainSlider;
