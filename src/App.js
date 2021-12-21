
import Header from './components/Header' 
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

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
