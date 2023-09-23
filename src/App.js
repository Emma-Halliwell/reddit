import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './features/Article/Article';
import Header from './features/Header/Header';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('AmItheAsshole');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json?limit=5").then(res => {
      if (res.status !== 200) {
        console.log("ERROR");
        return;
      }

      res.json().then(data => {
        if (data !== null) {
          setArticles(data.data.children);
        }
      });
    })
  }, [subreddit]);

  return (
    <div className="App">
        <Header className="App-header" />
        <div className="search-container">
          <input 
            type="text" 
            className="search" 
            value={subreddit} 
            onChange={e => setSubreddit(e.target.value)}
          />
        </div>
      <div className="articles">
        {
          (articles !== null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}

export default App;