import './App.css';
import { Analysis } from './components/Analysis';
import { Background } from './components/Background';
import { Conclusion } from './components/Conclusion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Prediction } from './components/Prediction';

function App() {
  
  const words = ["sus", "rizz", "skibidi", "mog", "mew"]

  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <Hero />
        <Background />
        <Analysis words={words} />
        <Prediction />
        <Conclusion />
      </div>
    </div>
  );
}

export default App;
