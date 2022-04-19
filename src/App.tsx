import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import CreatePage from "./pages/CreatePage/CreatePage";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.mainBody}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:prodId" element={<DetailsPage />} />
          <Route path="/create-product" element={<CreatePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
