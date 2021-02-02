import { Header } from "antd/lib/layout/layout";
import { Row } from "react-grid-system";
import React from "react";

export type DispatchPropsType = {
  logOut: () => void;
};
export const HeaderCont: React.FC = (props) => {
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className="logo" />
      <Row align="center" style={{ height: "67px" }}></Row>
    </Header>
  );
};
