import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import About from './components/about';
import Blog from './components/Blog'
import SeoService from './components/service';
import VoxSystem from './components/voxsystem';
import { Qr } from './components/qr';
function App() {
  const [option, setOption] = useState(0);
  const [profile, setProfile] = useState({});
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <ProjectFilter/> */}
      <Projects />
      <VoxSystem/>
      <About/>
      <Blog/>
      <SeoService/>
      <Qr/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
