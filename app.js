import React from 'react';
import './App.css'; // Make sure to create a corresponding CSS file for styles
import logo from './images/logo.png'; // Adjust the path based on your folder structure
import movies from './moviesData'; // Import your movies data (see below)

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="brand-logo" alt="Logo" />
        <ul className="nav-links">
          <li className="nav-items"><a href="/">Home</a></li>
          <li className="nav-items"><a href="/movies">Movies</a></li>
        </ul>
        <div className="right-container">
          <input type="text" className="search-box" placeholder="search" />
          <a href="https://www.hotstar.com/in/paywall"><button className="sub-btn">subscribe</button></a>
          <a href="ss.html" className="login-link">Login</a>
        </div>
      </nav>

      <div className="carousel-container">
        <div className="carousel">
          <div className="slider">
            <div className="slide-content">
              <h1 className="movie-title">Sardaarji 2</h1>
              <p className="movie-des">
                Desperate to save his village from financial ruin, a farmer travels overseas in search of greener pastures. However, his life turns upside down after he becomes the target of a criminal nexus.
              </p>
            </div>
            <img src="IMAGES/img1.jpg" alt="Sardaarji 2" />
          </div>
        </div>
      </div>

      <h1 className="title">Recommended For You</h1>
      <div className="movies-list">
        <div className="card-container">
          {movies.map(movie => (
            <div className="card" key={movie.id}>
              <img src={movie.poster} className="card-img" alt={movie.name} />
              <div className="card-body">
                <h2 className="name">{movie.name}</h2>
                <h6 className="des">{movie.description}</h6>
                <a href={movie.watchLink} target="_blank" rel="noopener noreferrer">
                  <button className="watchlist-btn">Watch</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;