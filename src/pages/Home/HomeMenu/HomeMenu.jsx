import { Radio, Space, Tabs } from "antd";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  render() {
    console.log("HOmemenu", this.props);

    return (
      <>
        <Tabs tabPosition={this.state.tabPosition}>
          {this.props.heThongRapChieu.map((heThongRap, index) => {
            return (
              <TabPane
                key={index}
                tab={
                  <img
                    src={heThongRap.logo}
                    className="rounded-full"
                    width="50"
                  />
                }
              >
                <Tabs tabPosition={this.state.tabPosition}>
                  {heThongRap.lstCumRap?.map((cumRap, index) => {
                    return (
                      <TabPane
                        key={index}
                        tab={
                          <div style={{ width: "300px", display: "flex" }}>
                            <img
                              src="https://movie-booking-project.vercel.app/img/cumRap/lotte-cinema-cong-hoa-15383860949090.jpg"
                              width="50"
                            />
                            <div className="text-left ml-2">
                              {cumRap.tenCumRap}
                              <p className="text-red-200">[More info]</p>
                            </div>
                          </div>
                        }
                      >
                        {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                          return (
                            <Fragment key={index}>
                              <div className="my-5">
                                <div style={{ display: "flex" }}>
                                  <img
                                    src={phim.hinhAnh}
                                    style={{ width: 75, height: 75 }}
                                    alt=""
                                    onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src =
                                        "https://picsum.photos/75/75";
                                    }}
                                  />
                                  <div className="ml-2">
                                    <h1 className="text-2xl text-green-700">
                                      {phim.tenPhim}
                                    </h1>
                                    <p>{cumRap.diaChi}</p>
                                    <div className="grid grid-cols-6 gap-6">
                                      {phim.lstLichChieuTheoPhim
                                        ?.slice(0, 12)
                                        .map((lichChieu, index) => {
                                          return (
                                            <NavLink
                                              className="text-2xl text-green-400"
                                              to="/"
                                              key={index}
                                            >
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("hh:mm A")}
                                            </NavLink>
                                          );
                                        })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </Fragment>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
            );
          })}
        </Tabs>
      </>
    );
  }
}

export default HomeMenu;
