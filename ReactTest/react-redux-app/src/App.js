import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import "antd/dist/antd.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import ListCards from "./components/Cards/ListCards";
import { getPostAction } from "./actions/posts";
import { Layout, PageHeader } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostForm from "./components/Form/Form";

const { Footer, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);
  return (
    <Layout>
      <PageHeader
        backIcon={false}
        title="React-redux-app"
        subTitle="SETA International"
      />

      <Content style={{ padding: "0 50px" }}>
        <div className="main-content">
          {" "}
          <ListCards />
          <PostForm />
          <ToastContainer />
        </div>
      </Content>
      <Footer>
        <div className="footer">
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/">
                <FacebookOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <LinkedinOutlined />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <InstagramOutlined />
              </a>
            </li>
          </ul>
          <div className="copyright">Copyright &copy; 2021 SETA</div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
