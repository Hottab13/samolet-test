import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb, Result } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { HeaderCont } from "./components/Haeder/Header";
import { LibraryData } from "./components/LibraryData/LibraryData";
import ProfileContainer from "./components/Profile/ProfileConainer";
import store from "./redux/ReduxStore";

const { Content, Footer, Sider } = Layout;
const App: React.FC = () => {
  const [collapsed, setСollapsed] = useState(false);
  const onCollapse = (collapsed: boolean) => {
    setСollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderCont />
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ marginTop: "64px" }}
      >
        <div className="logo" />
        <Menu defaultSelectedKeys={["1"]} mode="inline" theme="light">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Список библиотек</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            <Switch>
              <Route exact path="/" render={() => <LibraryData />} />
              <Route
                path="/order/:orderId?"
                render={() => <ProfileContainer />}
              />
              <Route
                path="*"
                render={() => (
                  <Result
                    status="404"
                    title="404"
                    subTitle="К сожалению, посещенная вами страница не существует."
                    extra={<Link to="/">Домой</Link>}
                  />
                )}
              />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Samolet-test©2021 Created by Alekseev.A
        </Footer>
      </Layout>
    </Layout>
  );
};

export const MainApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
