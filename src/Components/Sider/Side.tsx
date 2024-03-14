import { Menu } from "antd";
import { Layout } from "antd";
import "./Side.css";
import { AiFillBook } from "react-icons/ai";

const { Sider } = Layout;

const Side = () => {
  return (
    <Sider theme="light" breakpoint="lg" collapsedWidth="0">
      <Menu theme="light" mode="inline">
        <Menu.Item key="1" icon={<AiFillBook />}>
          Article
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Side;
