import React from 'react';
const Book = (props) => {
 console.log (props.book.volumeInfo.authors)
 return (
<div>
<h2>{props.book.volumeInfo.title}</h2>
<p>{props.book.volumeInfo.authors}</p>
{/*
Add other JSX elements that will return:
-Author Name
-Thumbnail Image
-Book Price 
*/}
</div>
 );
}
export default Book;
