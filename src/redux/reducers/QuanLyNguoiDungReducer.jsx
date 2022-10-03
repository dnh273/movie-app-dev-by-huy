import { TOKEN, USER_LOGIN } from "../../util/setting/config";
import {
  DANG_NHAP_ACTION,
  KIEM_TRA_THEM_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  TIM_KIEM_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
  danhSachNguoiDung: [],
  kiemTraThemNguoiDung: {},
  thongTinTimKiemUser: [],
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      const { thongTinNguoiDung } = action;
      const newThongTinNguoiDung = {
        ...thongTinNguoiDung,
        maLoaiNguoiDung: "KhachHang",
      };
      state.thongTinNguoiDung = newThongTinNguoiDung;
      return { ...state };
    }

    case SET_DANH_SACH_NGUOI_DUNG: {
      state.danhSachNguoiDung = action.danhSachNguoiDung;
      return { ...state };
    }

    case KIEM_TRA_THEM_NGUOI_DUNG: {
      console.log(action.data);
      state.kiemTraThemNguoiDung = action.data;
      return { ...state };
    }

    case TIM_KIEM_NGUOI_DUNG: {
      state.thongTinTimKiemUser = action.user;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
