import {
  Loader,
  NavBar,
  Sidebar,
  Hero,
  About,
  TechStack,
  Projects,
  Testimonials,
  Footer,
  Contact,
} from "./sections";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";

const App = () => {
  return (
    <div className="bg-black-100">
      {/* <Loader /> */}
      <NavBar />
      <Sidebar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
