import "./App.css";
import bookData from "./book-data.json";
import { useState, useEffect } from "react";

//trying sorting from:
// https://plainenglish.io/blog/sorting-react-components-using-sort

// const [bookData, setBookData] = useState([])

// useEffect(() => {
//   setBookData(props.bookData)
// }, [])

// function handleSort() {
//   const sortedData = [...bookData].sort((a,b) => {
//     return a.first > b.first ? 1 : -1
//   })
//   setBookData(sortedData)
// }

function App() {
  return (
    <div>
      <div className="bookDetail">
        {/* the button below is to try the sorting option */}
        {/* <button onClick={handleSort} id="sort-a-z">Sort from A-Z</button> */}
        <br></br>
        {bookData.map((book) => (
          <Book
          // key ={unique.id} -- this would solve the unique key error in the console, but our data doesn't have a unique key
            title={book.title}
            author={book.author}
            shortDescription={book.shortDescription}
            coverImageUrl={book.coverImageUrl}
            url={book.url}
            publisher={book.publisher}
            publicationDate={book.publicationDate}
            detailedDescription={book.detailedDescription}
          />
        ))}
      </div>
    </div>
  );
}

// this is our react component
function Book(props) {
  const [expanded, setExpanded] = useState(false); // on component creation, expanded === false
  const handleClick = () => {
    setExpanded(!expanded);
  };
  const fallBackImage = "images/no_cover_image.jpg"
  const handleImageError = event => event.target.src = fallBackImage;
  // const fallBackImage = 'https://hips.hearstapps.com/hmg-prod/images/lonely-pug-royalty-free-image-1652974264.jpg?crop=0.447xw:1.00xh;0.355xw,0&resize=980:*'

  const placeHolderStatement = 'NOT AVAILABLE'


  /**
   * props: {
   *  title: 'sometitle',
   *  author: 'someauthor'
   * }
   */
  // a way to use props with destructuring
  // const { author, title } = props;

  return (
    <div className="bookDetails">
      <h1 className="title">{props.title}</h1>
      <h3 className="author"><strong>Author:</strong> {props.author}</h3>
      <p className="description"><strong>Description:</strong> {props.shortDescription}</p>
      <img src={props.coverImageUrl} onError={handleImageError} alt="book cover" className="coverImage" />
      {/* <img src={props.coverImageUrl ? props.coverImageUrl : fallBackImage} onError={addDefaultSrc} alt="book cover" className="coverImage" /> */}
      <br></br>
      <button aria-expanded={expanded} onClick={handleClick}>
        {expanded ? "Show Less" : "Show More"}
      </button>
      {expanded && (
        <div className="collapsableBookDetails">
          <a href={props.url ? props.url : placeHolderStatement} className="URL"><strong>URL</strong></a>
          <h4 className="publisher"><strong>Publisher:</strong> {props.publisher ? props.publisher : placeHolderStatement}</h4>
          <h4 className="publicationDate"><strong>Publication Date:</strong> {props.publicationDate ? props.publicationDate : placeHolderStatement}</h4>
          <p className="description"><strong>Detailed Description:</strong> {props.detailedDescription}</p>
        </div>
      )}
    </div>
  );
}

export default App;