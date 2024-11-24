import React, { useRef } from "react";
import "./testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; //tx means translateX

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Shabrina</h3>
                  <span>Elementary School</span>
                </div>
              </div>
              <p>
                Hai semuanya, kenalin nama aku shabrina, biasa dipanggil bina. aku bersyukur bgt bisa masuk JSchool elementary school, disini fasilitasnya bagus dan update semua, begitupun dengan tenaga pengajarnya. aku senang sekali sekolah disini
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Aryaka</h3>
                  <span>Senior High School</span>
                </div>
              </div>
              <p>
              Hai semuanya, kenalin nama aku aryaka, biasa dipanggil arya. aku bersyukur bgt bisa masuk JSchool Senior High School, disini fasilitasnya bagus dan update semua, begitupun dengan tenaga pengajarnya. aku senang sekali sekolah disini
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Willia, Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Hai semuanya, kenalin nama aku shabrina, biasa dipanggil bina. aku bersyukur bgt bisa masuk JSchool elementary school, disini fasilitasnya bagus dan update semua, begitupun dengan tenaga pengajarnya. aku senang sekali sekolah disini
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Willia, Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
              Hai semuanya, kenalin nama aku aryaka, biasa dipanggil arya. aku bersyukur bgt bisa masuk JSchool Senior High School, disini fasilitasnya bagus dan update semua, begitupun dengan tenaga pengajarnya. aku senang sekali sekolah disini
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
