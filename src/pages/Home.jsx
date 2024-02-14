import { Navbar, Main, Product, Footer } from "../components";

import Slider from "../components/Slider";

function Home() {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Slider /> 
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
