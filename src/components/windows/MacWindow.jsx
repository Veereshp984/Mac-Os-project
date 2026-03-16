import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children, width = "40vw", height = "40vh", onClose }) => {
  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClose?.();
  };

  return (
    <Rnd
      dragHandleClassName="nav"
      cancel=".dots, .dots *"
      default={{
        width,
        height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <button
              type="button"
              className="dot red"
              onMouseDown={handleClose}
              onClick={handleClose}
            ></button>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>VeereshP - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
