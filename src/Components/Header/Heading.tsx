import React from "react";
import "./Heading.css";
import { Input, Badge, notification } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { Header } from "antd/es/layout/layout";
import { MdNotificationsNone, MdOutlineDarkMode } from "react-icons/md";

const { Search } = Input;

function Brand() {
  return <div className="brand">BAYDESIGN</div>;
}

function SearchBar() {
  return (
    <div className="search-header">
      <Search placeholder="input search text" />
    </div>
  );
}

function IconHeader() {
  const notificationCount = 1;

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description: "description.",
      placement: "bottomRight",
    });
  };

  return (
    <div className="icon">
      <MdOutlineDarkMode />
      <Badge count={notificationCount} size="small" style={{ marginRight: "8px", marginTop: "5px" }}>
        <MdNotificationsNone className="icon-notification" onClick={openNotification} style={{ color: "var(--second-color)", cursor: "pointer", fontSize: "2rem" }} />
      </Badge>
      <AiOutlineMail style={{ marginLeft: "5px" }} />
    </div>
  );
}

const Heading: React.FC = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        backgroundColor: "#ffffff",
      }}
    >
      <Brand />
      <SearchBar />
      <IconHeader />
    </Header>
  );
};

export default Heading;
