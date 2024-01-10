import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixMain from "./components/NetflixMain";
import TvShows from "./components/TvShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NetflixNavbar />
        <Routes>
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/" element={<NetflixMain />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
        <NetflixFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
