import './App.css';
import { Analysis } from './components/Analysis';
import { Background } from './components/Background';
import { Conclusion } from './components/Conclusion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Prediction } from './components/Prediction';

function App() {
  
  const words = ["sus", "rizz", "skibidi"]

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Background words={words} />
      <Analysis />
      <Prediction />
      <Conclusion />
    </div>
  );
}

export default App;
