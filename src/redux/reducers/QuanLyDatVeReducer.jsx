import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import {
  CHANGE_TAB_ACTIVE,
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../actions/types/QuanLyDatVeType";

const initialState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [
    // {
    //   daDat: false,
    //   giaVe: 90000,
    //   loaiGhe: "Vip",
    //   maGhe: 76461,
    //   maRap: 632,
    //   stt: "101",
    //   taiKhoanNguoiDat: null,
    //   tenGhe: "101",
    // },
  ],
  danhSachGheKhachDat: [{ maGhe: 48041 }, { maGhe: 48042 }],
  tabActive: "1",
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_VE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );

      if (index != -1) {
        // Neu tim thay ghe da duoc dat trong mang co nghia la truoc do da click vao roi => xoa di
        danhSachGheCapNhat.slice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }

    case DAT_VE_HOAN_TAT: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }

    case CHUYEN_TAB: {
      state.tabActive = "2";
      return { ...state };
    }

    case CHANGE_TAB_ACTIVE: {
      state.tabActive = action.number;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
