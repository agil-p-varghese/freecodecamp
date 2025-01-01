import React, { useState } from "react";
import "./App.css";

const quotesList = [
  { quote: "I'm not sure if I was the first man in space or the last dog.", source: "- Yuri Gagarin", year: "1961", tags: "Humor" },
  { quote: "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'", source: "- William Goldman", citation: "The Princess Bride", year: "1987", tags: "Inspirational" },
  { quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.", source: "- Bill Watterson", citation: "Calvin and Hobbes", tags: "Humor" },
  { quote: "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.", source: "- Alexandre Dumas", citation: "The Count of Monte Cristo", year: "1844", tags: "Humanity" },
  // Add more quotes here
];

const App = () => {
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotesList.length));

  // Function to generate a new random quote
  const getRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotesList.length);
    setQuoteIndex(newIndex);
  };

  const currentQuote = quotesList[quoteIndex];

  return (
    <div id="quote-box" className="wrapper">
      <div id="text">"{currentQuote.quote}"</div>
      <div id="author">
        {currentQuote.source}
        {currentQuote.year && `, ${currentQuote.year}`}
      </div>
      <button id="new-quote" onClick={getRandomQuote}>
        New Quote
      </button>
      <a id="tweet-quote" href="twitter.com/intent/tweet">tweet</a>
      
    </div>
  );
};

export default App;