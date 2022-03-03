import React, { useEffect, useRef, useState } from "react";

const Header = (props) => {
  const { setTopMenu } = props;
  return (
    <div className="main_header_wrapper">
      <span className="myLogo">JHKHP</span>
      {/* <span className="header_description">헤더영역</span> */}
      <div className="topMenu_wrapper">
        <ul className="topMenu_bundle">
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
