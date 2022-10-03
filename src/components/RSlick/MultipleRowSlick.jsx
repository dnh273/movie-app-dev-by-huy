import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styleSlick from "./MultipleRowSlick.module.css";
import Film from "../Film/Film";
import Flim_Flip from "../Film/Flim_Flip";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

export default function MultipleRowSlick(props) {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";

  const renderFilms = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div key={index}>
          <Flim_Flip item={item}></Flim_Flip>
        </div>
      );
    });
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "-10px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>
        {renderFilms()}

        {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div> */}
      </Slider>
    </div>
  );
}
