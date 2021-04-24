import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import List from "../components/pages/list";
import Form from "../components/pages/form";
import Welcome from "../components/pages/welcome";
import NotFound from "./../components/pages/404"
import SideNav from "../components/layouts/sidebar";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const Routes = () => {
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);
  const handleToggle = (event) => {
    event.preventDefault();
    collapse ? setCollapse(false) : setCollapse(true);
  };
  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapse}>
          <SideNav />
        </Sider>


        <Layout>
          <Header
            className="siteLayoutBackground"
            style={{ padding: 0, background: "#001529" }}
          >
            {React.createElement(
              collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: handleToggle,
                style: { color: "#fff" },
              }
            )}
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "calc(100vh - 114px)",
              background: "#fff",
            }}
          >
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/users" component={List} />
              <Route path="/form" component={Form} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>

        </Layout>
      </Layout>
    </Router>
  );
};
export default Routes;
