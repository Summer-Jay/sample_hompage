import React, { useEffect, useRef, useState } from "react";

import cheezeCat from "styles/img/cheezeCat.jpg";
import cuteDog from "styles/img/cuteDog.jpg";
import toast from "styles/img/toast.jpg";
import tulips from "styles/img/tulips.jpg";
import arrowLeft from "styles/img/arrow_left.svg";
import arrowRight from "styles/img/arrow_right.svg";

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
