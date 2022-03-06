import React, { useEffect, useRef, useState } from "react";

import ex1 from "styles/img/infiniteScroll/ex1.jpg";
import ex2 from "styles/img/infiniteScroll/ex2.jpg";
import ex3 from "styles/img/infiniteScroll/ex3.jpg";
import ex4 from "styles/img/infiniteScroll/ex4.jpg";
import ex5 from "styles/img/infiniteScroll/ex5.jpg";
import ex6 from "styles/img/infiniteScroll/ex6.jpg";
import ex7 from "styles/img/infiniteScroll/ex7.jpg";
import ex8 from "styles/img/infiniteScroll/ex8.jpg";
import ex9 from "styles/img/infiniteScroll/ex9.jpg";
import ex10 from "styles/img/infiniteScroll/ex10.jpg";
import ex11 from "styles/img/infiniteScroll/ex11.jpg";

const InfiniteScroll = (props) => {
  const [showList, setShowList] = useState([ex1, ex2]);
  const [hasNext, setHasNext] = useState(true);
  const [getImgNum, setGetImgNum] = useState(0);
  const imgList = [
    { list: [ex3, ex4] },
    { ex5, ex6 },
    { ex7, ex8 },
    { ex9, ex10 },
    { ex11 },
  ];

  useEffect(() => {
    console.log("imgList", imgList[0].list);
  }, [imgList]);

  useEffect(() => {
    console.log("getImgNum", getImgNum);
    console.log("showList", showList);
    if (imgList[getImgNum].length === 0) {
      setHasNext(false);
    }
  }, [getImgNum, showList]);

  const handleScroll = () => {
    const scrollHeight = document.querySelector(".scrollBox").scrollHeight;
    const scrollTop = document.querySelector(".scrollBox").scrollTop;
    const clientHeight = document.querySelector(".scrollBox").clientHeight;

    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight && hasNext) {
      console.log("scrollBottom");
      setShowList(...showList, imgList[getImgNum].list);
      //   showList.push(imgList[getImgNum].list);
      //   setGetImgNum(getImgNum + 1);
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    // window.addEventListener("scroll", handleScroll);
    document
      .querySelector(".scrollBox")
      .addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      document
        .querySelector(".scrollBox")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scrollBox">
        <div className="scrollItemsWrapper">
          {showList.map((img, idx) => {
            return <img key={idx} src={img} />;
          })}
        </div>
      </div>
    </>
  );
};
export default InfiniteScroll;
