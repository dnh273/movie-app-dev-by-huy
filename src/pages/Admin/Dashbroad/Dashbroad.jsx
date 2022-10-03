import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";

import {
  AudioOutlined,
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { Button, Table } from "antd";
import { history } from "../../../App";
import Search from "antd/lib/input/Search";

export default function Dashboard(props) {
  const { danhSachNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "taiKhoan",
      key: "STT",
      render: (text, user, index) => {
        return <Fragment>{index + 1}</Fragment>;
      },
    },

    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },

    {
      title: "Hành động",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/users/edit/${user.taiKhoan}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                //Gọi action xoá
                if (
                  window.confirm(
                    "Bạn có chắc muốn xoá tài khoản " + user.taiKhoan
                  )
                ) {
                  //Gọi action
                  dispatch(xoaNguoiDungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </Fragment>
        );
      },
    },
  ];
  const data = danhSachNguoiDung;

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    //Gọi api layDanhSachPhim
    dispatch(layDanhSachNguoiDungAction(value));
  };

  return (
    <div>
      <h3 className="text-4xl">Quản lý người dùng</h3>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/addnewuser");
        }}
      >
        Thêm người dùng
      </Button>

      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      />

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
