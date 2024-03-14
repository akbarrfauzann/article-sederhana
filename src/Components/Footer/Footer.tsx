import { Footer } from "antd/es/layout/layout";
import React from "react";
import "./Footer.css";

const Foot: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#001529" }}>
      <p style={{ color: "white", margin: "10px" }}>© 2024 BAYDESIGN. All rights reserved.</p>
    </Footer>
  );
};

export default Foot;
