//React-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./pages/Home";
import Weapons from "./pages/Weapons";
import Maps from "./pages/Maps";
import Agents from "./pages/Agents";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
