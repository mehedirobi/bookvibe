const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          About Book Vibe
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600">
          Book Vibe is a modern book discovery platform designed for readers
          who love exploring books, tracking reading progress, and organizing
          their personal reading journey.
        </p>
      </div>

      {/* Content */}
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Mission */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Our goal is to create a clean, simple, and engaging reading
            experience where users can discover quality books, manage their
            reading lists, and stay motivated to read more consistently.
          </p>
        </div>

        {/* Vision */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Vision
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We believe books have the power to inspire, educate, and transform
            lives. Book Vibe aims to become a trusted platform for readers who
            value knowledge, creativity, and lifelong learning.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          What You Can Do
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Discover Books
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore books across multiple categories and genres with detailed
              information and ratings.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Track Reading
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Save books to your reading list and monitor your reading progress
              efficiently.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">
              Build Habits
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Create consistent reading habits and maintain a productive reading
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;