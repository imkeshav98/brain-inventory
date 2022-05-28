import "./App.css";
import { Contact } from "./component/contact/Contact";
import { Footer } from "./component/footer/Footer";
import { Hero } from "./component/hero/Hero";
import { Navbar } from "./component/navbar/Navbar";
import { NewsLetter } from "./component/newsletter/NewsLetter";
import { PostGrid } from "./component/postgrid/PostGrid";
import { Quote } from "./component/quote/Quote";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Quote />
      <PostGrid />
      <NewsLetter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
