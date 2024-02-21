import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

const { Meta } = Card;
interface CardProps {
  author: string;
  id: string;
  title: string;
  description: string;
  urlToImage: string;
}

const CardDetail: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<CardProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-02-07&to=2024-02-07&sortBy=popularity&apiKey=e2a4fa7ed5bb4878910036b63b83e379`);
        const article = response.data.articles.find((article: CardProps) => article.id === id);
        if (article) {
          setNews(article);
        } else {
          console.error(`Article with ID ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {news && (
        <Card
          hoverable
          style={{ width: "100%", maxWidth: 500, display: "flex", justifyContent: "center", alignItems: "center", margin: "50px auto", padding: "10px" }}
          cover={<img alt="example" style={{ borderRadius: "10px" }} src={news.urlToImage} />}
        >
          <Meta title={news.author} description={news.description} />
        </Card>
      )}
    </div>
  );
};

export default CardDetail;
