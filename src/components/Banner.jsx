import { Link } from "react-router-dom";
import bookImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-green-50 via-white to-green-100 px-8 py-14 shadow-sm md:px-14 md:py-20">
        
        {/* Background Blur */}
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-green-200/40 blur-3xl"></div>

        <div className="relative flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Explore Your Next Favorite Book
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Books That Inspire,
              <span className="block text-green-600">
                Educate & Entertain
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Discover bestselling novels, timeless classics, and inspiring
              reads curated for passionate readers and lifelong learners.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              
              <Link
                to="/readlist"
                className="rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700"
              >
                Explore Books
              </Link>

              <button className="rounded-xl border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-green-600 hover:text-green-600">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  10K+
                </h3>

                <p className="text-sm text-gray-500">
                  Active Readers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  5K+
                </h3>

                <p className="text-sm text-gray-500">
                  Book Collections
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  1K+
                </h3>

                <p className="text-sm text-gray-500">
                  Daily Reads
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-green-200/40 blur-3xl"></div>

            <img
              src={bookImg}
              alt="Books"
              className="relative w-[260px] drop-shadow-2xl transition duration-500 hover:scale-105 md:w-[380px] lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;