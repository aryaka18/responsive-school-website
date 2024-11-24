import React from "react";
import "./campus.css";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import gallery_7 from "../../assets/gallery-7.jpg";
import gallery_8 from "../../assets/gallery-8.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div>
      <div className="campus">
        <div className="gallery">
          <img src={gallery_5} alt="" />
          <img src={gallery_6} alt="" />
          <img src={gallery_7} alt="" />
          <img src={gallery_8} alt="" />
        </div>
        <button className="btn dark-btn">Lihat Lebih Banyak <img src={white_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Campus;
