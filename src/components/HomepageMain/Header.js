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

  return (
    <>
      <div className="main_header_wrapper">
        <span className="myLogo">JHKHP</span>
        <div className="topMenu_wrapper">
          <Nav tabs className="topMenu_bundle">
            <NavItem>
              <NavLink
                className={activeTab === "slider" ? "active" : ""}
                onClick={() => toggle("slider")}
              >
                Slider
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "infinite_scroll" ? "active" : ""}
                onClick={() => toggle("infinite_scroll")}
              >
                Infinite Scroll
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "responsive" ? "active" : ""}
                onClick={() => toggle("responsive")}
              >
                Responsive
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <div className="contentsArea">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="slider">
            <MainSlider />
          </TabPane>
          <TabPane tabId="infinite_scroll">
            <InfiniteScroll />
          </TabPane>
          <TabPane tabId="responsive">
            <Responsive />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};
export default Header;
