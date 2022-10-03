import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_THONG_TIN_PHIM,
} from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const initialState = {
  arrFilm: [
    {
      maPhim: 10547,
      tenPhim: "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM 1",
      biDanh: "an-mang-lien-hoan-luc-nua-dem-1",
      trailer: "https://www.youtube.com/watch?v=PDq6ww8zEVU",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem-1_gp01.jpg",
      moTa: "<p>Bộ phim kể về 3 c&acirc;u chuyện b&iacute; ẩn với những sự thật kinh ho&agrave;ng dần được h&eacute; lộ.</p>",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-08-27T09:46:32.773",
      danhGia: 7,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 10548,
      tenPhim: "SINH VẬT HUYỀN BÍ: NHỮNG BÍ MẬT CỦA DUMBLEDORE",
      biDanh: "sinh-vat-huyen-bi-nhung-bi-mat-cua-dumbledore",
      trailer: "https://www.youtube.com/watch?v=citR_GSenWA",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/sinh-vat-huyen-bi-nhung-bi-mat-cua-dumbledore_gp01.jpg",
      moTa: "Câu chuyện của phần phim thứ ba này xoay quanh việc Giáo sư Albus Dumbledore (Jude Law) phát hiện ra việc Phù thủy Bóng tối quyền năng Gellert Grindelwald (Mads Mikkelsen) đang âm mưu chiếm lấy quyền kiểm soát Thế giới Phù thủy. Không thể một mình ngăn chặn đoàn quân hùng mạnh của của Grindelwald, Dumbledore đặt niềm tin vào Nhà nghiên cứu sinh vật huyền bí Newt Scamander (Eddie Redmayne) cùng đồng đội thực hiện nhiệm vụ đầy hiểm nguy này. Trong tình thế ngàn cân treo sợi tóc như vậy, liệu thầy Dumbledore có thể đứng ngoài được bao lâu?",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-04-11T00:00:00",
      danhGia: 5,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],

  filmDetail: {},
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }

    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
