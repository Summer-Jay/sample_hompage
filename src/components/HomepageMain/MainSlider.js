import React, { useEffect, useRef, useState } from "react";

import cheezeCat from "styles/img/cheezeCat.jpg";
import cuteDog from "styles/img/cuteDog.jpg";
import toast from "styles/img/toast.jpg";
import tulips from "styles/img/tulips.jpg";
import arrowLeft from "styles/img/arrow_left.svg";
import arrowRight from "styles/img/arrow_right.svg";

const MainSlider = (props) => {
  const [nowPosit, setNowPosit] = useState(0);

  const moveImg = (direc) => {
    if (direc === "left") {
      setNowPosit(nowPosit - 1);
    } else {
      setNowPosit(nowPosit + 1);
    }
  };

  useEffect(() => {
    console.log("nowposit", nowPosit);
    document.querySelector(".picture_list").style.transform = `translate(-${
      600 * nowPosit
    }px)`;
  }, [nowPosit]);

  return (
    <>
      <div className="slider_descriptsion">common</div>
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
          {nowPosit !== 0 && (
            <img
              className="arrow_left"
              src={arrowLeft}
              onClick={() => moveImg("left")}
            />
          )}
          {nowPosit !== 3 && (
            <img
              className="arrow_right"
              src={arrowRight}
              onClick={() => moveImg("right")}
            />
          )}
        </div>
      </div>
      <div className="slider_descriptsion">Slick Library</div>
    </>
  );
};
export default MainSlider;
