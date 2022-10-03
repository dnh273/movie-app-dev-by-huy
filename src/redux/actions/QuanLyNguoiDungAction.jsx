import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  CAP_NHAT_THONG_TIN_ACTION,
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  KIEM_TRA_THEM_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  THEM_NGUOI_DUNG,
  TIM_KIEM_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import Swal from "sweetalert2";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      console.log(result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        // Chuyen ve trang truoc do
        history.goBack("./home");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinNguoiDungAction = (value) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung(value);
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      console.log(result);
      if (result.data.statusCode === 200) {
        // Chuyen ve trang truoc do
        await Swal.fire({
          title: "Đăng ký thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
        history.goBack("./home");
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response.data.content);
      Swal.fire({
        title: "Đăng ký thất bại!",
        html: `${error.response.data.content}`,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
    }
  };
};

export const capNhatThongTinAction = (thongTinCapNhat) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinCapNhat
      );
      console.log(result);
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Cập nhật thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
        console.log(result);
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật thông tin thất bại!",
        html: `${error.response.data.content}`,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
    }
  };
};

export const capNhatThongTinAdminAction = (thongTinCapNhat) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDungAdmin(
        thongTinCapNhat
      );
      if (result.data.statusCode === 200) {
        console.log(result);
        Swal.fire({
          title: "Cập nhật thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Cập nhật thông tin thất bại!",
        html: `${error.response.data.content}`,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };
};

export const layDanhSachNguoiDungAction = (value) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(value);
      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        danhSachNguoiDung: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const themNguoiDungAction = (thongTinThemNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(
        thongTinThemNguoiDung
      );
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Thêm người dùng thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      console.log("check", error.response.data.content);
      dispatch({
        type: KIEM_TRA_THEM_NGUOI_DUNG,
        data: `${error.response.data.content}`,
      });
    }
  };
};

export const timKiemNguoiDungAction = (taiKhoanNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.timKiemNguoiDung(
        taiKhoanNguoiDung
      );
      console.log(result);
      dispatch({ type: TIM_KIEM_NGUOI_DUNG, user: result.data.content });
    } catch (error) {
      console.log(error);
    }
  };
};

export const xoaNguoiDungAction = (taiKhoanNguoiDung) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(
        taiKhoanNguoiDung
      );
      if (result.data.statusCode === 200) {
        Swal.fire({
          title: "Xoá người dùng thành công!",
          icon: "success", //success, error, warning, question
          confirmButtonText: "OK",
        });
        dispatch(layDanhSachNguoiDungAction());
      }
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        title: "Xoá người dùng thất bại!",
        html: `${error.response.data.content}`,
        icon: "error", //success, error, warning, question
        confirmButtonText: "OK",
      });
    }
  };
};
