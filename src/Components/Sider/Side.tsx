import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import "./Side.css";
import { AiFillBook } from "react-icons/ai";

function Side() {
  return (
    <Sider theme="light" breakpoint="lg" collapsedWidth="0">
      <Menu style={{ backgroundColor: "white", fontSize: "20px" }} items={[{ key: "2", label: "Article", icon: <AiFillBook /> }]}></Menu>
    </Sider>
  );
}

export default Side;
