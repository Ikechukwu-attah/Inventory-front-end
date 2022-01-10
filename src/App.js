import { Header } from "./components/Header";
import Home from "./pages/home/Home";
import { Footer } from "./components/Footer/";

function App() {
  return (
    <div className="container">
      <Header />
      <Home className="home" />
      <Footer />
    </div>
  );
}

export default App;
