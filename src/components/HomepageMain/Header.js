import React, { useEffect, useRef, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import MainSlider from "./MainSlider";
import InfiniteScroll from "./InfiniteScroll";
import Responsive from "./Responsive";

const Header = (props) => {
  const { setTopMenu } = props;
  const [activeTab, setActiveTab] = useState("slider");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    console.log("activetab:::", activeTab);
  }, [activeTab]);

  const menuArray = ["slider", "infinite Scroll", "observe", "responsive"];

  return (
    <>
      <div className="main_header_wrapper">
        <span className="myLogo">JHKHP</span>
        <div className="topMenu_wrapper">
          <Nav tabs className="topMenu_bundle">
            {menuArray.map((menu, idx) => {
              return (
                <NavItem key={idx}>
                  <NavLink
                    className={activeTab === menu ? "active" : ""}
                    onClick={() => toggle(menu)}
                  >
                    {menu}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </div>
      </div>
      <div className="contentsArea">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="slider">
            <MainSlider />
          </TabPane>
          <TabPane tabId="infinite Scroll">
            <InfiniteScroll />
          </TabPane>
          <TabPane tabId="responsive">
            <Responsive />
          </TabPane>
          <TabPane tabId="observe">
            <Responsive />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};
export default Header;
