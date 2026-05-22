import { Link } from "react-router";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Read List", path: "/readlist" },
    { name: "Pages To Read", path: "/pages-to-read" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Book Vibe
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
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

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-green-600 px-5 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50">
            Sign In
          </button>

          <button className="rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}