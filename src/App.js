import "./App.css";
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
    </div>
  );
}

export default App;
