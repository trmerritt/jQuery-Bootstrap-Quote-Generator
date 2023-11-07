/* 28/10/23 Random Quote Machine Portfolio Project built using jQuery Library & Bootstrap Framework*/
const quotes = [
  { quote: '"A person who never made a mistake never tried anything new."', author: "Albert Einstein" },
  { quote: '"I have not failed. I’ve just found 10,000 ways that won’t work."', author: "Thomas Edison" },
  { quote: '"The best way to predict the future is to invent it"', author: "Alan Kay" },
  { quote: '"The true sign of intelligence is not knowledge but imagination"', author: "Albert Einstein" },
  { quote: '"Life is tough, but it’s tougher when you’re stupid."', author: "John Wayne" },
  { quote: '"I don’t want to be a product of my environment. I want my environment to be a product of me"', author: "Jack Nicholson" },
  { quote: '"The future depends on what you do today."', author: "Mahatma Gandhi" }
];

$(document).ready(function() {
  
  $("#new-quote").click(function() {
    getQuote();
  });
  
});

function getQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quoteObj = quotes[randomIndex];

$("#text").text(quoteObj.quote);
$("#author").text(`-${quoteObj.author}`);
}
