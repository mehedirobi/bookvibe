import Book from "./Book";

const Books = ({ data }) => {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Featured Books
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
          Discover a curated collection of bestselling books, timeless
          classics, and inspiring reads for every type of reader.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((singleBook) => (
          <Book
            key={singleBook.bookId}
            singleBook={singleBook}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;