import "./App.css";
import bookData from "./book-data.json";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <div className="titles">
        {bookData.map((book) => {
          return book.title;
        })}
        {/* how do we get all the book titles to display vertically */}
      </div>
    </div>
  );
}

export default App;
