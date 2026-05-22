import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToDb } from "../Utilities/Addtodb";

const Bookdetails = () => {
  const { id } = useParams();

  const bookId = parseInt(id);

  const data = useLoaderData();

  const singleBook = data.find(
    (book) => book.bookId === bookId
  );

  if (!singleBook) {
    return (
      <div className="p-10 text-xl font-semibold">
        Book not found
      </div>
    );
  }

  const handleMarkAsRead = (id) => {
    addToDb(id);
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        {singleBook.bookName}
        <img src={singleBook.image} alt={singleBook.bookName} className="mt-4 w-3/12 rounded-lg shadow-md" />
      </h1>
      <div className="flex gap-5">
        <button onClick={()=>handleMarkAsRead(id)}>Mark as Read</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default Bookdetails;