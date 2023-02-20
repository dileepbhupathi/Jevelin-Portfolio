import React from "react";
import "./PortifolioBodyTitle.scss";
import Typewriter from "typewriter-effect";

export const PortifolioBodyTitle = () => {
  return (
    <div className="portifolio-body-title-container">
      <h1 className="portifolio-body-title">
        Simple and clean portfolio to showcase your
        <Typewriter
          className="type-writer"
          options={{
            strings: ["spark", "work", "hobby"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="portifolio-body-caption">Vivamus fermentum, augue a gravida gravida, odio</p>
    </div>
  );
};
