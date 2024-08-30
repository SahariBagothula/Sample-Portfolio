import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider} from './components/ThemeContext';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blogs/Blog';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

function App() {
  return (
    <>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
        <Route path='/blogs' element={<Blog />}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
