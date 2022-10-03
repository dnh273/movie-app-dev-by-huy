import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { USER_LOGIN } from "../../util/setting/config";

export default function Register() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const result = await dispatch(dangKyAction(data));
    console.log(result)
  };



  return (
    <div className="w-1/2 bg-white flex items-center">
      <div className="md:w-1/2 lg:w-2/3 m-auto my-12">
        <h1 className="text-lg font-bold text-center">Cyber Learn</h1>
        <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("taiKhoan", {
              required: "Vui lòng điền tài khoản",
              minLength: {
                value: 6,
                message: "Tài khoản phải có 6 ký tự trở lên",
              },
            })}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Tài khoản"
          />
          <p className="text-red-500 text-sm">{errors.taiKhoan?.message}</p>
          <input
            type="password"
            {...register("matKhau", {
              required: "Vui lòng điền mật khẩu",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có 6 ký tự trở lên",
              },
            })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Mật khẩu"
          />
          <p className="text-red-500 text-sm">{errors.matKhau?.message}</p>
          <input
            type="text"
            {...register("hoTen", {
              required: "Vui lòng điền họ tên",
              maxLength: {
                value: 20,
                message: "Họ tên không được quá 20 chữ",
              },
            })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Họ và tên"
          />
          <p className="text-red-500 text-sm">{errors.hoTen?.message}</p>
          <input
            type="email"
            {...register("email", {
              required: "Vui lòng điền email",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Vui lòng nhập đúng email",
              },
            })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Email"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
          <input
            type="text"
            {...register("soDt", {
              required: "Vui lòng nhập số điện thoại",
              pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                message: "Vui lòng nhập đúng số điện thoại",
              },
            })}
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Số điện thoại"
          />
          <p className="text-red-500 text-sm">{errors.soDt?.message}</p>
          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            Register
          </button>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Register already?
              <NavLink to="/login" className="ml-1 font-medium text-blue-400">
                Sign in now
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
