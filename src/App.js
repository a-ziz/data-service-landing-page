import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import Analytics from "./section/Analytics";
import Newsletter from "./section/Newsletter";
import Cards from "./section/Cards";
import Footer from "./components/Footer";
import Backup from "./section/Backup";
import Migration from "./section/Migration";
import Policy from "./section/Policy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Backup />
      <Migration />
      <Newsletter />
      <Cards />
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
