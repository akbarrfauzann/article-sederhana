import { Header } from "antd/es/layout/layout";
import "./Heading.css";

function Heading() {
  return (
    <Header style={{ backgroundColor: "wheat", color: "white" }}>
      <div className="brand">Welcome</div>
    </Header>
  );
}

export default Heading;
