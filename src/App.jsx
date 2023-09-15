import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './HomeView';
import MovieDetails from './components/MovieDetails';
import Footer from './header_footer/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomeView} />
        {/* MoviesDetails Route */}
        <Route path="/movie/:id" Component={MovieDetails} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
