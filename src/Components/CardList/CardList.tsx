import React, { useEffect, useState } from "react";
import { Card, Flex, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CardList.css";

const { Title, Paragraph } = Typography;

interface NewsArticle {
  id: string;
  author: string;
  title: string;
  description: string;
  content: string;
  urlToImage: string;
}

const CardList: React.FC = (): JSX.Element => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2024-02-07&to=2024-02-07&sortBy=popularity&apiKey=e2a4fa7ed5bb4878910036b63b83e379");
        setNews(response.data.articles);
        console.log("Data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Content
      className="content"
      style={{
        padding: "10px",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Card hoverable style={{ width: "80%", margin: "50px auto", padding: "10px" }} styles={{ body: { padding: 0, overflow: "hidden" } }}>
        <Flex justify="space-between">
          <img alt="avatar" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" style={{ width: "100%", maxWidth: "273px" }} />
          <Flex vertical style={{ padding: 32 }}>
            <p style={{ margin: 0, padding: 0, fontFamily: "Arial" }}>
              Business, Food - <b>March 5, 2024</b>
            </p>
            <Typography.Title level={3} style={{ margin: 0, padding: 0, fontWeight: "bold", fontFamily: "Arial" }}>
              Your most unhappy customers are your greatest source of learning.
            </Typography.Title>
            <p style={{ fontWeight: "400", color: "gray" }}>
              For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <Row style={{ display: "flex" }}>
              <img src="src/assets/images/profile.jpg" alt="picture" width={50} height={50} style={{ borderRadius: "100%", maxWidth: "50px", height: "auto" }} />
              <div style={{ marginLeft: "10px" }}>
                <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Sergio Ramos</h3>
                <p style={{ lineHeight: "0", color: "#00000040", fontWeight: "bold" }}>CEO of DreamScape</p>
              </div>
            </Row>
          </Flex>
        </Flex>
      </Card>

      <div className="card-container">
        <div className="card-row">
          {news.map((article: NewsArticle) => (
            <Link key={article.id} to={`/detail/${article.id}`} className="custom-card-link" style={{ color: "black", margin: "10px" }}>
              <img alt="example" style={{ width: "100%", height: "200px", objectFit: "cover" }} src={article.urlToImage} />
              <p style={{ marginTop: "10px", fontFamily: "Arial" }}>
                Business, Food - <b>March 5, 2024</b>
              </p>
              <Title level={3}>{article.title}</Title>
              <Paragraph>{article.content}</Paragraph>
              <Row style={{ display: "flex" }}>
                <img src="src/assets/images/profile.jpg" alt="picture" width={50} height={50} style={{ borderRadius: "100%", maxWidth: "50px", height: "auto" }} />
                <div style={{ marginLeft: "10px" }}>
                  <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "15px" }}>{article.author}</h3>
                  <p style={{ lineHeight: "0", color: "#00000040", fontWeight: "bold" }}>CEO of Apple</p>
                </div>
              </Row>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default CardList;
