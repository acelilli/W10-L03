import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixMain from "./components/NetflixMain";
import TvShows from "./components/TvShows";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NetflixNavbar />
        <NetflixMain />
        <Routes>
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <NetflixFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
