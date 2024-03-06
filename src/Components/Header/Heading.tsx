import { Header } from "antd/es/layout/layout";
import "./Heading.css";
import { Badge, Input, notification } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

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
        <CiBookmark />
        <AiOutlineUser />
      </div>
    </Header>
  );
}

export default Heading;
