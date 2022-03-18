import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import CardNews from "../../Components/CardNews/CardNews";
import PageTitle from "../../Components/PageTitle/PageTitle";

function News(props) {
  const API_KEY = "WLxmYRRcpwiuPXdlghQ0wqNstx6wZJl9";
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const today = new Date(Date.now()).toISOString().split("T")[0];
  const todayMin10 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  // const URL_NEWS = `https://newsapi.org/v2/everything?q=Vaksin&from=${todayMin10}&to=${today}&sortBy=popularity&apiKey=${API_KEY}`;
  const URL_NEWS = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=vaccine,covid-19&begin_date=${todayMin10}&end_date=${today}&api-key=${API_KEY}`;

  console.log(news);

  useEffect(() => {
    const handleFetch = async () => {
      let result;
      try {
        result = await axios.get(URL_NEWS);
        setIsLoaded(true);
        console.log(result.data.response.docs);
        setNews(result.data.response.docs);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };
    handleFetch();
  }, [URL_NEWS]);
  if (error) {
    return <div>Erorr: {error}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  }
  return (
    <div className="page-wrapper">
      <PageTitle title="Berita Terkini" />
      <div
        className="container-fluid d-flex justify-content-around"
        style={{ top: "20px" }}
      >
        <div className="row m-3">
          {news?.map((item, idx) => (
            <CardNews
              key={idx}
              title={item?.headline?.main}
              content={item?.lead_paragraph}
              url={item?.web_url}
              image={
                item?.multimedia.length === 0
                  ? "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                  : `https://static01.nyt.com/${item?.multimedia[0]?.url}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default News;
