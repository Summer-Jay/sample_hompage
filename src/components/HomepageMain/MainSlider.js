import React, { useEffect, useRef, useState } from "react";

import cheezeCat from "styles/img/cheezeCat.jpg";
import cuteDog from "styles/img/cuteDog.jpg";
import toast from "styles/img/toast.jpg";
import tulips from "styles/img/tulips.jpg";
import arrowLeft from "styles/img/arrow_left.svg";
import arrowRight from "styles/img/arrow_right.svg";

const MainSlider = (props) => {
  const [nowPosit, setNowPosit] = useState(1);

  const moveToLeftImg = () => {
    console.log("moveToLeftImg");
    let moveWidth = 600 * nowPosit;
    console.log("moveWidth", moveWidth);
    document.querySelector(
      ".picture_list"
    ).style.transform = `translate(${moveWidth}px)`;
    setNowPosit(nowPosit - 1);
  };

  const moveToRightImg = () => {
    console.log("moveToRightImg");
    let moveWidth = 600 * nowPosit;
    console.log("moveWidth", moveWidth);
    document.querySelector(
      ".picture_list"
    ).style.transform = `translate(-${moveWidth}px)`;
    setNowPosit(nowPosit + 1);
  };

  return (
    <div className="slider_wrapper">
      <div className="slider_container">
        <div className="picture_list">
          <ul className="slide_bundle">
            <li className="slide_item">
              <img src={toast} alt="토스트" />
            </li>
            <li className="slide_item">
              <img src={cheezeCat} alt="고앵이" />
            </li>
            <li className="slide_item">
              <img src={tulips} alt="튤립" />
            </li>
            <li className="slide_item">
              <img src={cuteDog} alt="강아지" />
            </li>
          </ul>
        </div>
        {nowPosit !== 1 && (
          <img className="arrow_left" src={arrowLeft} onClick={moveToLeftImg} />
        )}
        {nowPosit !== 4 && (
          <img
            className="arrow_right"
            src={arrowRight}
            onClick={moveToRightImg}
          />
        )}
      </div>
    </div>
  );
};
export default MainSlider;
