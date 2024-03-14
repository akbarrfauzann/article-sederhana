import { Layout } from "antd";
import Heading from "../../Components/Header/Heading";
import CardList from "../../Components/Content/CardList";
import Categories from "../../Components/Categories/Category";
import Foot from "../../Components/Footer/Footer";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Heading />
      <Categories />
      <Layout>
        <CardList />
      </Layout>
      <Foot />
    </Layout>
  );
};

export default HomePage;
