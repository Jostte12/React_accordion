import { useState } from 'react';
import Accordion from './components/accordion';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color component */}
      {/* <RandomColor /> */}
      {/* Star Rating component */}
      <StarRating nbOfStars={10} />
    </>
  );
}

export default App;
