import "./App.css";
import bookData from "./book-data.json";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <div className="bookDetail">
        {bookData.map((book) => (
          <Book
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
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

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
      <h3>{props.title}</h3>
      <h5>{props.author}</h5>
      <p>{props.shortDescription}</p>
      <img src={props.coverImageUrl} alt="book cover" className="coverImage" />
      <button onClick={handleClick}>
        {expanded ? "show less" : "show more"}
      </button>
      {expanded && (
        <div className="collapsableBookDetails">
          <a href={props.url}>URL</a>
          <h6>{props.publisher}</h6>
          <h6>{props.publicationDate}</h6>
          <p>{props.detailedDescription}</p>
        </div>
      )}
    </div>
  );
}

export default App;
