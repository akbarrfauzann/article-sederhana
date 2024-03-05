import { Header } from "antd/es/layout/layout";
import "./Heading.css";
import { Input } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
// import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const { Search } = Input;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
function Heading() {
  const handleSearch = (value: string) => console.log("search:", value);
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
        <IoIosNotificationsOutline />
        <CiBookmark />
        <AiOutlineUser />
      </div>
    </Header>
  );
}

export default Heading;
