import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Book Vibe
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Discover, organize, and track your favorite books with a
            clean and modern reading experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-600 transition hover:text-green-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/listed-books"
                className="text-sm text-gray-600 transition hover:text-green-600"
              >
                Listed Books
              </Link>
            </li>

            <li>
              <Link
                to="/pages-to-read"
                className="text-sm text-gray-600 transition hover:text-green-600"
              >
                Pages To Read
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <p>Email: support@bookvibe.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-5">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Book Vibe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}