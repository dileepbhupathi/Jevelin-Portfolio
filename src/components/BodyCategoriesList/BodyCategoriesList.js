import React, { useState } from "react";
import "./BodyCategoriesList.scss";
import { AiOutlineFullscreen } from "react-icons/ai";
// import { Modal } from "antd";
import { Carousel } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

export const BodyCategoriesList = ({ TypesOfCategoriesImagesList }) => {
  // const [fullScreen, setFullScreen] = useState(false);

  const [overlay, setOverlay] = useState(false);

  // const [index,setIndex] = useState(0)

  const OverLay = () => {
    setOverlay(true);
  };
  const NoOverlay = () => {
    setOverlay(false);
  };
  console.log(TypesOfCategoriesImagesList);

  // const handleselected = (id) => {
  //   setIndex(id)
  // }

  return (
    <>
      <div className="categories-list-container">
        {TypesOfCategoriesImagesList.map((each) => (
          <div className="each-category-list-item" key={each.id}>
            <div className="image-container">
              <img
                src={each.image}
                alt="/"
                className="categories-image-list-item"
              />
            </div>
            <div className="category-list-item">
              <div className="category-list-item-content">
                <p className="category-list-item-name">{each.name}</p>
                <p className="category-list-item-name">{each.category}</p>
              </div>
              <AiOutlineFullscreen
                className="fullscren-icon"
                onClick={OverLay}
              />
              {/* {isModal === each.id ? ( */}
              <div
                // open={fullScreen}
                // footer={false}
                // onCancel={CancelFullScreen}
                // style={{ marginTop: "10%" }}
                className={overlay ? "overlay" : "close-overlay"}
              >
                <div className="close-icon-container" onClick={NoOverlay}>
                  <RxCross2 className="close-icon" />
                </div>
                <Carousel fade>
                  {TypesOfCategoriesImagesList.map((review) => (
                    <Carousel.Item key={review.id}>
                      <img
                        className="testimonialImages d-block fullscreen-image"
                        src={review.image}
                        alt="/"
                      />
                      <p className="count-of-the-image">
                        {review.id}/{TypesOfCategoriesImagesList.length}
                      </p>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              {/* ) : null} */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
