import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
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
      <div className="card-container">
        <div className="card-row">
          {news.map((article: NewsArticle) => (
            <Link key={article.id} to={`/detail/${article.id}`} className="custom-card-link">
              <Card className="custom-card">
                <img alt="example" style={{ borderRadius: "10px", width: "100%", height: "200px", objectFit: "cover" }} src={article.urlToImage} />
                <Title level={1}>{article.author}</Title>
                <Paragraph>{article.title}</Paragraph>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Content>
  );
};

export default CardList;
