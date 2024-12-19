import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import ProjectViewer from "./pages/ProjectViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main/:section?" element={<MainPage />} />
        <Route path="/main/project/:id" element={<ProjectViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
