import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './HomeView';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={HomeView} />
        {/* MoviesDetails Route */}
        <Route path="/movie/:id" Component={MovieDetails} />
      </Routes>
    </Router>
  );
}

export default App;
