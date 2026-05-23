import { Link } from "react-router-dom";

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
    <Link
      to={`/bookDetails/${bookId}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-2xl"
    >
      
      {/* Image Container */}
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-green-100/0 transition duration-300 group-hover:bg-green-100/20"></div>

        <img
          src={image}
          alt={bookName}
          className="relative h-full object-contain drop-shadow-lg transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-1 flex-col">
        
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold tracking-wide text-green-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 transition group-hover:text-green-600">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-2 text-sm font-medium text-gray-500">
          By : {author}
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-dashed border-gray-200"></div>

        {/* Book Info */}
        <div className="space-y-4">
          
          {/* Category + Year */}
          <div className="flex items-center justify-between">
            <span className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              {category}
            </span>

            <span className="text-sm text-gray-500">
              {yearOfPublishing}
            </span>
          </div>

          {/* Pages + Rating */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {totalPages} Pages
            </p>

            <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-1 text-sm font-semibold text-yellow-700">
              <span>⭐</span>
              <span>{rating}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <button className="w-full rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Book;