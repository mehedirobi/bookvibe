import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from "react-tabs";

import "react-tabs/style/react-tabs.css";

import {
  getStoredBooks,
  getWishlistBooks,
} from "../Utilities/Addtodb";
import { Link } from "react-router";

const Readlist = () => {
  const data = useLoaderData();

  const [readlist, setReadlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    
    // READ LIST
    const storedBooks = getStoredBooks();

    const convertedStoredBooks =
      storedBooks.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadlist(myReadList);

    // WISHLIST
    const storedWishlist = getWishlistBooks();

    const convertedWishlist =
      storedWishlist.map((id) => parseInt(id));

    const myWishlist = data.filter((book) =>
      convertedWishlist.includes(book.bookId)
    );

    setWishlist(myWishlist);

  }, [data]);

  // SORT FUNCTION
  const handleSort = (type, listType) => {

    const targetList =
      listType === "read"
        ? [...readlist]
        : [...wishlist];

    if (type === "pages") {
      targetList.sort(
        (a, b) => b.totalPages - a.totalPages
      );
    }

    if (type === "rating") {
      targetList.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (listType === "read") {
      setReadlist(targetList);
    } else {
      setWishlist(targetList);
    }
  };

  // REUSABLE BOOK CARD
  const renderBooks = (books, listType) => {
    return books.length === 0 ? (
      <div className="rounded-3xl border border-dashed border-gray-300 py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">
          No Books Added Yet
        </h3>

        <p className="mt-3 text-gray-500">
          Start adding books to your {listType}.
        </p>
      </div>
    ) : (
      <div className="space-y-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg lg:flex-row"
          >
            
            {/* Image */}
            <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-6 lg:w-[230px]">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-[220px] object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col">
              
              <h3 className="text-2xl font-bold text-gray-900">
                {book.bookName}
              </h3>

              <p className="mt-2 text-gray-500">
                By : {book.author}
              </p>

              <p className="mt-5 line-clamp-2 text-sm leading-7 text-gray-600">
                {book.review}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="font-semibold text-gray-900">
                  Tags:
                </span>

                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
                <span>
                  Publisher: {book.publisher}
                </span>

                <span>
                  Year: {book.yearOfPublishing}
                </span>

                <span>
                  Pages: {book.totalPages}
                </span>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  Category: {book.category}
                </span>

                <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
                  Rating: {book.rating}
                </span>

                <Link to={`/bookDetails/${book.bookId}`} className="rounded-xl bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      
      {/* Header */}
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-green-50 to-green-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900">
          My Book Collection
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your read books and wishlist.
        </p>
      </div>

      {/* Tabs */}
      <Tabs>
        <TabList className="flex gap-4 border-b border-gray-200">
          
          <Tab
            className="cursor-pointer rounded-t-xl px-6 py-3 text-sm font-semibold text-gray-500 outline-none"
            selectedClassName="border-b-2 border-green-600 text-green-600"
          >
            Read Books
          </Tab>

          <Tab
            className="cursor-pointer rounded-t-xl px-6 py-3 text-sm font-semibold text-gray-500 outline-none"
            selectedClassName="border-b-2 border-green-600 text-green-600"
          >
            Wishlist
          </Tab>
        </TabList>

        {/* READ LIST */}
        <TabPanel>
          <div className="mt-8">
            
            {/* Sort */}
            <div className="mb-8 flex justify-end">
              <div className="dropdown dropdown-end">
                
                <div
                  tabIndex={0}
                  role="button"
                  className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Sort By
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl"
                >
                  <li>
                    <button
                      onClick={() =>
                        handleSort("pages", "read")
                      }
                      className="w-full rounded-lg px-4 py-3 text-left text-sm transition hover:bg-gray-100"
                    >
                      Sort by Pages
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() =>
                        handleSort("rating", "read")
                      }
                      className="w-full rounded-lg px-4 py-3 text-left text-sm transition hover:bg-gray-100"
                    >
                      Sort by Rating
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {renderBooks(readlist, "readlist")}
          </div>
        </TabPanel>

        {/* WISHLIST */}
        <TabPanel>
          <div className="mt-8">
            
            {/* Sort */}
            <div className="mb-8 flex justify-end">
              <div className="dropdown dropdown-end">
                
                <div
                  tabIndex={0}
                  role="button"
                  className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Sort By
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] mt-3 w-56 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl"
                >
                  <li>
                    <button
                      onClick={() =>
                        handleSort("pages", "wishlist")
                      }
                      className="w-full rounded-lg px-4 py-3 text-left text-sm transition hover:bg-gray-100"
                    >
                      Sort by Pages
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() =>
                        handleSort("rating", "wishlist")
                      }
                      className="w-full rounded-lg px-4 py-3 text-left text-sm transition hover:bg-gray-100"
                    >
                      Sort by Rating
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {renderBooks(wishlist, "wishlist")}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Readlist;