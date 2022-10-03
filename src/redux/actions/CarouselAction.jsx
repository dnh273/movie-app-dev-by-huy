import axios from "axios";
import { quanLyPhimService } from "../../services/QuanLyPhimServices";
import { DOMAIN } from "../../util/setting/config";
import { SET_CAROUSEL } from "./types/CarouselType";

export const getCarouselAction = (thamSo) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      console.log(result);
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
