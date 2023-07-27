import Hero from './components/Hero';
import B2bSolution from './components/B2bSolution';
import About from './components/About';
import Trust from "@pages/Home/components/Trust/index.jsx";
import NewProduct from "@pages/Home/components/NewProduct/index.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <B2bSolution />
      <About />
      <Trust/>
      <NewProduct/>
    </>
  );
};

export default Home;
