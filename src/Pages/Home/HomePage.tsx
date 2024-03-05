import { Layout } from "antd";
import Heading from "../../Components/Header/Heading";
import CardList from "../../Components/CardList/CardList";
import Categories from "../../Components/Categories/Category";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Heading />
      <Categories />
      <Layout>
        <CardList />
      </Layout>
    </Layout>
  );
};

export default HomePage;
