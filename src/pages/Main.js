import React, { useEffect, useRef, useMemo, Component, useState } from "react";

import Header from "components/HomepageMain/Header";
import MainSlider from "components/HomepageMain/MainSlider";

const Main = (props) => {
  const [topmenu, setTopMenu] = useState("slider");

  return (
    <>
      <Header setTopMenu={setTopMenu} />
      {/* <MainSlider /> */}
    </>
  );
};
export default Main;
