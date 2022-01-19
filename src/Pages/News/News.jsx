import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import CardNews from "../../Components/CardNews/CardNews";
import PageTitle from "../../Components/PageTitle/PageTitle";

function News(props) {
    const API_KEY = "5f485a2cbdd6436bb5f2b9398f6ae287"; 
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const today = new Date(Date.now()).toISOString().split( "T" )[0];
    const todayMin10 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    const URL_NEWS = `https://newsapi.org/v2/everything?q=Vaksin&from=${todayMin10}&to=${today}&sortBy=popularity&apiKey=${API_KEY}`;
    
    useEffect(() => {
        const handleFetch = async () => {
            
            let result;
            try {
                result = await axios.get(URL_NEWS);
                setIsLoaded(true);
                // console.log(result.data.articles);
                setNews(result.data.articles);
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
            <PageTitle title="Berita Terkini"/>
            <div
                className="container-fluid d-flex justify-content-around"
                style={{ top: "20px" }}
            >
                <div className="row m-3">
                    {news.map((item, idx) => (
                        <CardNews
                            key={idx}
                            title={item.title}
                            content={item.content}
                            url={item.url}
                            image={item.urlToImage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default News;
