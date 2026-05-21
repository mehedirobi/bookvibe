import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    bookId,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Book Image */}
      <div className="flex h-[260px] items-center justify-center rounded-xl bg-gray-100 p-6">
        <img
          className="h-full object-contain transition duration-300 group-hover:scale-105"
          src={image}
          alt={bookName}
        />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-1 flex-col">
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-2 text-sm text-gray-500">
          By : {author}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-gray-300"></div>

        {/* Bottom Info */}
        <div className="mt-auto flex items-center justify-between text-sm text-gray-600">
          <span>{category}</span>

          <div className="flex items-center gap-3">
            <span>{yearOfPublishing}</span>

            <span className="rounded-md bg-gray-100 px-2 py-1 font-medium">
              ⭐ {rating}
            </span>
          </div>
        </div>

        {/* Pages */}
        <p className="mt-4 text-sm text-gray-500">
          Total Pages : {totalPages}
        </p>
      </div>
    </Link>
  );
};

export default Book;