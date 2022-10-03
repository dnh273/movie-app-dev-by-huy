import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useDispatch, useSelector } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { useEffect } from "react";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../Templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
  console.log("props", props);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  console.log(arrFilm);
  // const renderFilm = () => {
  //   return arrFilm.map((item, index) => {
  //     return <Film key={index}> </Film>;
  //   });
  // };

  useEffect(() => {
    const action = layDanhSachPhimAction();

    dispatch(action);

    dispatch(layDanhSachHeThongRapAction());
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                {renderFilms()}
            </div> */}
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
