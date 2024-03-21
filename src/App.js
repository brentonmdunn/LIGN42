import './App.css';
import { Analysis } from './components/Analysis';
import { Background } from './components/Background';
import { BlockquoteLearning } from './components/BlockquoteLearning';
import { Conclusion } from './components/Conclusion';
import { CustomBlockquote } from './components/CustomBlockquote';
import { Dynamics } from './components/Dynamics';
import { Future } from './components/Future';
import { Hero } from './components/Hero';
import { LearnMore } from './components/LearnMore';
import { MorphSemFlu } from './components/MorphSemFlu';
import { Navbar } from './components/Navbar';
import { PhonoChar } from './components/PhonoChar';
import { PragMarkers } from './components/PragMarkers';
import { Prediction } from './components/Prediction';
import { Sources } from './components/Sources';

function App() {
  const words = [
    "Rizz", 
    "Skibidi", 
    "Gyat", 
    "Ohio", 
    "Looksmaxxing", "Mew", 
    "Mog", "Chat", "Alpha", 
    "Beta", "Sigma", "Pookie", "Grimace",
  "Yap", "Pog", "W", "L", "Griddy", "(Let him) cook",
"Slay", "Glaze", "Womp Womp"]

  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <Hero />
        {/* <BlockquoteLearning /> */}
        <LearnMore type='inline' />
        <br /><br />
        <Background />
        <Analysis words={words} />
        <PhonoChar />
        <Dynamics />
        <MorphSemFlu />
        <PragMarkers />
<Prediction />
        <Conclusion />
        <Future />
        <Sources />
      </div>
    </div>
  );
}

export default App;
