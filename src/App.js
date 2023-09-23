import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './features/Article/Article';
import Header from './features/Header/Header';
import NavBar from './features/NavBar/NavBar';

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

  const [navbar, setNavbar] = useState([]);
  const [subreddits] = useState(null);

  useEffect(() => {
    fetch('https://www.reddit.com/subreddits.json?limit=8').then(res => {
      if (res.status !== 200) {
        console.log('ERROR');
        return
      }

      res.json().then(data => {
        setNavbar(data.data.children);
      })
    })
  }, [subreddits]);

  return (
    <div className="App">
        <Header className="App-header" />
        <div className="subreddits">
          {
            (navbar !== null) ? navbar.map((nav, index) => <NavBar key={index} nav={nav.data} />) : 'Failed to load subreddits'
          }
        </div>
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
          (articles !== null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : 'Failed to laod article titles'
        }
      </div>
    </div>
  );
}

export default App;