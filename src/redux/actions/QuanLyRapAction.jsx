import { quanLyRapService } from "../../services/QuanLyRapServices";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      console.log(result.data.content);
      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinChiTietPhimAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);

      console.log("result", result);
      // Lấy được dữ liệu từ api về => đưa lên reducer

      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
