import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

function Categories() {
  return (
    <Header style={{ borderBottom: "1px solid gray", position: "sticky", top: 0 }}>
      <Menu theme="dark" mode="horizontal" style={{ fontWeight: "bold" }}>
        <Menu.Item>LIFESTYLE</Menu.Item>
        <Menu.Item>BUSINESS</Menu.Item>
        <Menu.Item>FASHION</Menu.Item>
        <Menu.Item>DESIGN</Menu.Item>
        <Menu.Item>HEALTH</Menu.Item>
        <Menu.Item>HARMFUL</Menu.Item>
        <Menu.Item>TECHNOLOGY</Menu.Item>
        <Menu.Item>TRAVEL</Menu.Item>
        <Menu.Item>FOOD</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Categories;
