import bookImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6">
      <div className="flex flex-col-reverse items-center justify-between gap-10 overflow-hidden rounded-3xl bg-[#F3F3F3] px-8 py-12 md:flex-row md:px-14">
        
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Books to freshen up your bookshelf
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Discover timeless classics, modern bestsellers, and inspiring reads
            curated for every type of reader.
          </p>

          <button className="mt-8 rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700">
            View The List
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={bookImg}
            alt="Books"
            className="w-[220px] object-contain md:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;