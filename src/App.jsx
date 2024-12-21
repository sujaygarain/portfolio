// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import MainPage from "./pages/MainPage";
// import ProjectViewer from "./pages/ProjectViewer";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/main/:section?" element={<MainPage />} />
//         <Route path="/main/project/:id" element={<ProjectViewer />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
        {/* Fallback Route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
