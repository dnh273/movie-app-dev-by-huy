import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import _ from "lodash";
import { useSelector } from "react-redux";

export default function Header() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-3 rounded"
          >
            {t("signin")}
          </button>
          <button
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            onClick={() => {
              history.push("/register");
            }}
          >
            {t("signup")}
          </button>
        </Fragment>
      );
    }
    return (
      <button
        onClick={() => {
          history.push("/profile");
        }}
        className="self-center px-8 py-3 rounded"
      >
        hi {userLogin.taiKhoan}
      </button>
    );
  };

  return (
    <header className="p-4 bg-black text-white bg-opacity-80 fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent  text-white"
              activeClassName="border-b-1 border-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
              activeClassName="border-b-1 border-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-white"
              activeClassName="border-b-1 border-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
          <Select
            defaultValue="en"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="en">Eng</Option>
            <Option value="chi">Chi</Option>
            <Option value="vn">Vn</Option>
          </Select>
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
