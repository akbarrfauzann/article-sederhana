import React, { useEffect, useState } from "react";
import { BackTop, Card, Carousel, Flex, FloatButton, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CardList.css";
import { format } from "date-fns";
import { AiOutlineArrowUp } from "react-icons/ai";

const { Title, Paragraph } = Typography;

interface NewsArticle {
  id: string;
  author: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  urlToImage: string;
}

const CardList: React.FC = (): JSX.Element => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e2a4fa7ed5bb4878910036b63b83e379");
        setNews(response.data.articles);
        console.log("Data fetched:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDateToMonth = (dateString: string): string => {
    const dateObj = new Date(dateString);
    return format(dateObj, "MMMM d, yyyy");
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(false);
  };

  window.addEventListener("scroll", handleScroll);

  function AvatarCard() {
    return (
      <>
        <Carousel autoplay effect="fade" style={{ width: "80%", margin: "20px auto", padding: "10px", zIndex: 1 }} autoplaySpeed={2000}>
          <Card hoverable styles={{ body: { padding: 0, margin: 0 } }}>
            <Flex style={{ overflow: "hidden" }}>
              <img className="image-card" alt="avatar" src="https://picsum.photos/400/400?random=1" style={{ maxWidth: "273px", objectFit: "cover", height: "auto" }} />
              <Flex vertical style={{ padding: 32 }}>
                <p style={{ margin: 0, padding: 0, fontFamily: "Arial" }}>
                  Business, Food - <b>March 11, 2024</b>
                </p>
                <Typography.Title level={3} style={{ margin: 0, padding: 0, fontWeight: "bold", fontFamily: "Arial" }}>
                  Your most unhappy customers are your greatest source of learning.
                </Typography.Title>
                <p style={{ fontWeight: "400", color: "gray" }}>
                  For far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <Row style={{ display: "flex" }}>
                  <img src="src/assets/images/profile.jpg" alt="picture" width={50} height={50} style={{ borderRadius: "100%", maxWidth: "50px", height: "auto" }} />
                  <div className="card-author" style={{ marginLeft: "10px" }}>
                    <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Sergio Ramos</h3>
                    <p style={{ lineHeight: "0", color: "#00000040", fontWeight: "bold" }}>CEO of DreamScape</p>
                  </div>
                </Row>
              </Flex>
            </Flex>
          </Card>
        </Carousel>
      </>
    );
  }

  function ArticleLink() {
    return (
      <div className="card-container">
        <h2 className="card-header" style={{ marginLeft: "20px", fontFamily: "Arial", fontWeight: "bold" }}>
          LATEST POST
        </h2>
        <div className="card-row">
          {news.map((article: NewsArticle) => (
            <Link key={article.id} to={`/detail/${article.id}`} className="custom-card-link" style={{ color: "black", margin: "10px" }}>
              <img alt="example" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} src={article.urlToImage} />
              <p style={{ marginTop: "10px", fontFamily: "Arial" }}>
                Business, Food - <b>{formatDateToMonth(article.publishedAt)}</b>
              </p>
              <Title level={3}>{article.title}</Title>
              <Paragraph>{article.content}</Paragraph>
              <Row style={{ display: "flex" }}>
                <img src="src/assets/images/profile.jpg" alt="picture" width={50} height={50} style={{ borderRadius: "100%", maxWidth: "50px", height: "auto" }} />
                <div style={{ marginLeft: "10px" }}>
                  <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "15px" }}>{article.author}</h3>
                  <p style={{ lineHeight: "0", color: "#00000040", fontWeight: "bold" }}>CEO of DreamScape</p>
                </div>
              </Row>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Content
      className="content"
      style={{
        padding: "10px",
        minHeight: "calc(100vh - 64px)",
        scrollBehavior: "smooth",
      }}
    >
      <AvatarCard />
      <ArticleLink />

      {isVisible && (
        <BackTop style={{ display: isVisible ? "block" : "none", cursor: "pointer", position: "fixed" }} onClick={scrollToTop}>
          <FloatButton shape="square" style={{ right: 24, bottom: 24, backgroundColor: "#fff" }} icon={<AiOutlineArrowUp style={{ color: "#001529" }} />} />
        </BackTop>
      )}
    </Content>
  );
};

export default CardList;
