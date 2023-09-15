/* eslint-disable react/no-unknown-property */
import './HomeView.css';
import Movies from './components/Movies';
import TopMovies from './components/TopMovies';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <div>
      <div className="container">
        <div className="hero">
          <div className="nav_bar">
            <Link to={'/'}>
              <div className="logo">
                <img src="/public/tv.png" alt="" />
                BoxWatch
              </div>
            </Link>

            <div className="search">
              <input
                className="input"
                type="text"
                placeholder="What would you like to watch"
              />
              <button className="search__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                >
                  <path
                    d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                    fill="#efeff1"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="right_menu">
              <div className="signin">Sign In</div>
              <div className="menuIcon">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="movieDetails">
            <div className="title">Spiderman into the spider verse</div>
            <div className="details">
              John Wick is on the run after killing a member of the
              international assassins guild, and with a $14 million price tag on
              his head, he is the target of hit men and women everywhere.
            </div>
            <div className="rating"></div>
            <div className="watchBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                  fill="white"
                />
              </svg>
              <span>Watch now</span>
            </div>
          </div>
        </div>
      </div>
      {/* TopMovies Component */}
      <TopMovies />
      {/* Movies Component */}
      <Movies />
    </div>
  );
}

export default HomeView;
