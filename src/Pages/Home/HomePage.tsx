import { Layout } from "antd";
import Heading from "../../Components/Header/Heading";
import Side from "../../Components/Sider/Side";
import CardList from "../../Components/CardList/CardList";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Heading />
      <Layout>
        <Side />
        <CardList />
      </Layout>
    </Layout>
  );
};

export default HomePage;
