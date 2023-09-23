import React from 'react';
import './Article.css';
import Card from '../../component/Card/Card';

const Article = (props) => {
    return (
        <Card className="articles">
            <div className="votes">
                <p>{props.article.ups}</p>
            </div>
            <div className="titles">
                <a href={ "https://reddit.com" + props.article.permalink} target="_blank" rel="noreferrer">
                    <h3>{props.article.title}</h3>
                </a>
            </div>
        </Card>
    )
};

export default Article;