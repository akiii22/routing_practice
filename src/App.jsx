import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Watch" element={<Watch />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
