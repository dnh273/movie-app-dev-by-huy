import { GROUPID } from "../util/setting/config";
import { baseServices } from "./baseServices";

export class QuanLyPhimServices extends baseServices {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  // layDanhSachPhim = () => {
  //   return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  // };

  layDanhSachPhim = (tenPhim='') => {
    if(tenPhim.trim()!=''){
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)

}

themPhimUploadHinh = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData);
} 

layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
}

capNhatPhimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData);
}


xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
}

}

export const quanLyPhimService = new QuanLyPhimServices();
