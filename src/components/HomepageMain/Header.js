import React, { useEffect, useRef, useState } from "react";
import { TabContent, Tabpane, Nav, NavItem, NavLink } from "reactstrap";

const Header = (props) => {
  const { setTopMenu } = props;
  const [activeTab, setActiveTab] = useState("slider");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="main_header_wrapper">
      <span className="myLogo">JHKHP</span>
      {/* <span className="header_description">헤더영역</span> */}
      {/* <div className="topMenu_wrapper">
        <ul className="topMenu_bundle">
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
          <li className="topMenu_item">슬라이드</li>
        </ul>
      </div> */}
      <div className="topMenu_wrapper">
        <Nav tabs className="topMenu_bundle">
          <NavItem>
            <NavLink onClick={() => toggle("slider")}>슬라이드</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};
export default Header;
