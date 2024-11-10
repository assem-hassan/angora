var quotesList = [
  { quotes: "“So many books, so little time.”", author: " Frank Zappa" },
  {
    quotes: "“The road goes ever on and on, down from the door where it began”",
    author: "--J.R.R. Tolkien",
  },
  {
    quotes: "“The world is a book, and those who do not travel read only one”",
    author: "--Saint Augustine",
  },
  {
    quotes:
      "“The future belongs to those who believe in the beauty of their dreams.”",
    author: "--Eleanor Roosevelt",
  },
  {
    quotes: "“The only thing we have to fear is fear itself.”",
    author: "--Frank",
  },
  {
    quotes:
      "“The greatest glory in living lies not in never falling, but in rising every time we fall”",
    author: "--Nelson Mandela",
  },
  {
    quotes:
      "“The biggest adventure you can take is to live the life of your dreams.”",
    author: "--Oprah",
  },
  { quotes: "“So many books, so little time.”", author: "Frank Zappa" },
  {
    quotes: "“The road goes ever on and on, down from the door where it began”",
    author: "--J.R.R. Tolkien",
  },
];

function myFunction() {
  var randomIndex = Math.floor(Math.random() * quotesList.length);
  var randomQuote = quotesList[randomIndex].quotes;
  var randomAuthor = quotesList[randomIndex].author;
  document.getElementById("quote").innerHTML = randomQuote;
  document.getElementById("author").innerHTML = randomAuthor;
}
