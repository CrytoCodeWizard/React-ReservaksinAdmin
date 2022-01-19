import React from 'react';
import './Card.css';
function CardNews({image, title, content, url}) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow">
                <div className="w-100">
                    <img src={image} alt="" className="card-img-top" style={{backgroundSize:"cover"}}/>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-news-text">{content}</p>
                    <a href={url} className="btn btn-primary mb-2" target='_blank' rel='noreferrer'>Read More &#x3e;</a>
                </div>
            </div>
        </div>
    );
}

export default CardNews;