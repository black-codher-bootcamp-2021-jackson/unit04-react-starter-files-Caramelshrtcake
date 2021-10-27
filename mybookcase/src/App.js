import Book from './components/Book';
import bookList from './models/books.json';
import React, { useState } from 'react';
function App() {
 const [books,setBooks] = useState (bookList);
 console.log("Book,", books[0])
//  return <Book book={books[0]}/>;
return books.map ((book)=> <Book book={book}/>)
}
export default App;

