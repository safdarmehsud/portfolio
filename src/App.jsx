import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import NavigationBar from "./Components/NavigationBar";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
