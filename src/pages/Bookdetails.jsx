import { useLoaderData, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  addToDb,
  addToWishlist,
} from "../Utilities/Addtodb";

const Bookdetails = () => {
  const { id } = useParams();

  const bookId = parseInt(id);

  const data = useLoaderData();

  // SAFETY CHECK
  if (!Array.isArray(data)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Invalid Book Data
        </h1>
      </div>
    );
  }

  // FIND BOOK
  const singleBook = data.find(
    (book) => book.bookId === bookId
  );

  // BOOK NOT FOUND
  if (!singleBook) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Book Not Found
        </h1>
      </div>
    );
  }

  // DESTRUCTURING
  const {
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  // MARK AS READ
  const handleMarkAsRead = () => {
    addToDb(bookId);

    toast.success("Book added to Read List", {
      duration: 3000,
    });
  };

  // ADD TO WISHLIST
  const handleWishlist = () => {
    addToWishlist(bookId);

    toast.success("Book added to Wishlist", {
      duration: 3000,
    });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 p-10">
          <img
            src={image}
            alt={bookName}
            className="w-[280px] rounded-2xl shadow-2xl transition duration-500 hover:scale-105"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* TITLE */}
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            {bookName}
          </h1>

          {/* AUTHOR */}
          <p className="mt-4 text-lg text-gray-500">
            By : {author}
          </p>

          {/* CATEGORY */}
          <div className="my-6 border-y border-gray-200 py-4">
            <span className="rounded-xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              {category}
            </span>
          </div>

          {/* REVIEW */}
          <p className="leading-8 text-gray-600">
            <span className="font-semibold text-gray-900">
              Review :
            </span>{" "}
            {review}
          </p>

          {/* TAGS */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-gray-900">
              Tags:
            </span>

            {tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* BOOK INFO */}
          <div className="mt-8 space-y-4 rounded-3xl border border-gray-200 p-6">
            
            <div className="flex justify-between">
              <span className="text-gray-500">
                Number of Pages
              </span>

              <span className="font-semibold text-gray-900">
                {totalPages}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Publisher
              </span>

              <span className="font-semibold text-gray-900">
                {publisher}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Year of Publishing
              </span>

              <span className="font-semibold text-gray-900">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Rating
              </span>

              <span className="font-semibold text-yellow-600">
                ⭐ {rating}
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            
            {/* READ BUTTON */}
            <button
              onClick={handleMarkAsRead}
              className="group relative overflow-hidden rounded-2xl bg-green-600 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-700 active:scale-95"
            >
              <span className="relative z-10">
                Mark as Read
              </span>

              <div className="absolute inset-0 translate-y-full bg-white/10 transition duration-300 group-hover:translate-y-0"></div>
            </button>

            {/* WISHLIST BUTTON */}
            <button
              onClick={handleWishlist}
              className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-gray-700 transition duration-300 hover:scale-[1.02] hover:border-green-600 hover:text-green-600 active:scale-95"
            >
              <span className="relative z-10">
                Add to Wishlist
              </span>

              <div className="absolute inset-0 translate-y-full bg-green-50 transition duration-300 group-hover:translate-y-0"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookdetails;