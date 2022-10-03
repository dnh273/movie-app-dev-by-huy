import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
import { GROUPID } from "../../../../util/setting/config";

const AddNewUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const { kiemTraThemNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );


  const onSubmit = (data) => {
    let newData = { ...data, maNhom: `${GROUPID}` };
    dispatch(themNguoiDungAction(newData));
 
  };

  return (
    <div>
      <h2 className="mb-1 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x text-center">
        Thêm người dùng
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6 mt-8">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tài khoản
            </label>
            <input
              className="appearance-none block w-full text-gray-700
            bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register("taiKhoan", {
                required: "Vui lòng điền tài khoản",
                minLength: {
                  value: 6,
                  message: "Tài khoản phải có 6 ký tự trở lên",
                },
              })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.taiKhoan?.message}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Mật khẩu
            </label>
            <input
              className="appearance-none block w-full text-gray-700
            bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              {...register("matKhau", {
                required: "Vui lòng điền mật khẩu",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có 6 ký tự trở lên",
                },
              })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.matKhau?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Họ tên
            </label>
            <input
              className="appearance-none block w-full text-gray-700
          bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register("hoTen", {
                required: "Họ tên không được bỏ trống",
                maxLength: {
                  value: 20,
                  message: "Họ tên không được quá 20 chữ",
                },
              })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.hoTen?.message}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700
            bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              {...register("email", {
                required: "Vui lòng điền email",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Vui lòng nhập đúng email",
                },
              })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.email?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Số điện thoại
            </label>
            <input
              className="appearance-none block w-full text-gray-700
          bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register("soDT", {
                required: "Không được bỏ trống số điện thoại",
                pattern: {
                  value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                  message: "Vui lòng nhập đúng số điện thoại",
                },
              })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.soDT?.message}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Loại người dùng
            </label>
            <select
              class="block w-full text-gray-700
          bg-white bg-clip-padding border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("maLoaiNguoiDung")}
            >
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
          </div>
        </div>
        <p className="text-red-500 text-xs italic">{kiemTraThemNguoiDung}</p>
        <div className="flex flex-wrap">
          <button
            type="submit"
            className="
    w-full
    h-full
    py-3 px-4
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
          >
            Thêm người dùng
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
