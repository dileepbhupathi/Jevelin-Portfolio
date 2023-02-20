import React, { useEffect, useState } from "react";
import { BodyDiffTypesOfContent } from "../BodyDiffTypesOfContent/BodyDiffTypesOfContent";
import { PortifolioBodyTitle } from "../PortifolioBodyTitleComponent/PortifolioBodyTitle";
import { PortifolioFooter } from "../PortifolioFooter/PortifolioFooter";
import "./JevelinBodyContent.scss";
import { TfiAngleUp } from "react-icons/tfi";

import { Popover } from "antd";
import { SlLayers } from "react-icons/sl";
import { BiGlassesAlt } from "react-icons/bi";
import { SlBag } from "react-icons/sl";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { SlSupport } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

export const JevelinBodyContent = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div>
      <PortifolioBodyTitle />
      <BodyDiffTypesOfContent />
      <PortifolioFooter />
      <div className="right-nav-bar-container">
          <Popover placement="left" content={<p className="popover-content">Showcase</p>} trigger="hover">
            <div className="nav-icon-container">
              <SlLayers className="icon" />
            </div>
          </Popover>
          <Popover
            placement="left"
            content={<p className="popover-content">Demo viewer</p>}
            trigger="hover"
          >
            <div className="nav-icon-container">
              <BiGlassesAlt className="icon" />
            </div>
          </Popover>
          <Popover
            placement="left"
            content={<p className="popover-content">Purchase Jevelin</p>}
            trigger="hover"
          >
            <div className="nav-icon-container">
              <SlBag className="icon" />
            </div>
          </Popover>
          <Popover
            placement="left"
            content={<p className="popover-content">Questiosn / Answers</p>}
            trigger="hover"
          >
            <div className="nav-icon-container">
              <AiOutlineQuestionCircle className="icon" />
            </div>
          </Popover>
          <Popover
            placement="left"
            content={<p className="popover-content">Get Support</p>}
            trigger="hover"
          >
            <div className="nav-icon-container">
              <SlSupport className="icon" />
            </div>
          </Popover>
          <Popover
            placement="left"
            content={<p className="popover-content">Ask a Pre-Sale Question</p>}
            trigger="hover"
          >
            <div className="nav-icon-container no-border-icon-container">
              <AiOutlineMail className="icon" />
            </div>
          </Popover>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <TfiAngleUp />
        </button>
      )}
    </div>
  );
};
