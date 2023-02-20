import { Button } from "antd";
import React from "react";
import { FooterData } from "../../constants/FooterData";
import "./PortifolioFooter.scss";

export const PortifolioFooter = () => {
  return (
    <div className="portifolio-footer-container">
      <div className="portifolio-footer-content-container">
        <div className="footer-content-container">
          <h1 className="footer-caption">Let`s get in touch and create beautiful things together</h1>
          <Button size="large">Contact us</Button>
        </div>
        <div className="footer-content-list-container">
          {FooterData.map((each,i) => (
            <p key={i} className="footer-content-list-item">{each}</p>
          ))}
        </div>
      </div>
      <p className="footer-copy-right-content">Copyright © JevelinTheme - Theme by Shufflehound</p>
    </div>
  );
};
