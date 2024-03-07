import { Header } from "antd/es/layout/layout";
import "./Heading.css";
import { Badge, Input, Popover, notification } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { useState } from "react";

const { Search } = Input;

function Heading() {
  const handleSearch = (value: string) => console.log("search:", value);
  const notificationCount = 1;
  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description: "description.",
      placement: "bottomRight",
    });
  };
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
      }}
    >
      <div className="brand">BAYDESIGN</div>

      <div className="search-header">
        <Search placeholder="input search text" onSearch={handleSearch} enterButton />
      </div>

      <div className="icon">
        <Badge count={notificationCount} size="small" style={{ marginRight: "10px", marginTop: "5px" }}>
          <IoIosNotificationsOutline onClick={openNotification} style={{ cursor: "pointer", fontSize: "2rem", color: "#ffffff" }} />
        </Badge>
        <AiOutlineMail style={{ marginRight: "10px", marginLeft: "10px" }} />
        <Popover content={<a onClick={hide}>Close</a>} title="Title" trigger="click" open={open} onOpenChange={handleOpenChange}>
          <AiOutlineUser style={{ backgroundColor: "transparent", border: "none", fontSize: "2rem", color: "#ffffff", alignItems: "center" }} />
        </Popover>
      </div>
    </Header>
  );
}

export default Heading;
