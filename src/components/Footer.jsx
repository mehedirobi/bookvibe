import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Read List", path: "/readlist" },
    { name: "Pages To Read", path: "/pages-to-read" },
  ];

  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Book<span className="text-green-600">Vibe</span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
            Book Vibe helps readers discover, organize, and track their
            favorite books with a clean and modern reading experience.
          </p>

          {/* Social */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:border-green-600 hover:text-green-600"
            >
              FB
            </a>

            <a
              href="#"
              className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:border-green-600 hover:text-green-600"
            >
              TW
            </a>

            <a
              href="#"
              className="rounded-full border border-gray-300 p-2 text-gray-600 transition hover:border-green-600 hover:text-green-600"
            >
              IG
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-600 hover:text-green-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-600">
            <p>Email: support@bookvibe.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row">
          
          <p>
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to="/"
              className="transition hover:text-green-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="transition hover:text-green-600"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}