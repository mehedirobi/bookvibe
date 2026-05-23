import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from "react-tabs";

import "react-tabs/style/react-tabs.css";

import { getStoredBooks } from "../Utilities/Addtodb";

const Readlist = () => {
  const data = useLoaderData();

  const [readlist, setReadlist] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const storedBooks = getStoredBooks();

    const convertedStoredBooks = storedBooks.map((id) =>
      parseInt(id)
    );

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadlist(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSortBy(type);

    const sortedBooks = [...readlist];

    if (type === "pages") {
      sortedBooks.sort(
        (a, b) => a.totalPages - b.totalPages
      );
    }

    if (type === "ratings") {
      sortedBooks.sort(
        (a, b) => b.ratings - a.ratings
      );
    }

    setReadlist(sortedBooks);
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      {/* SORT BUTTON */}
      <div className="dropdown flex justify-center mb-8">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-success text-white"
        >
          Sort By
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
        >
          <li>
            <button
              onClick={() => handleSort("pages")}
            >
              Sort By Pages
            </button>
          </li>

          <li>
            <button
              onClick={() => handleSort("rating")}
            >
              Sort By Rating
            </button>
          </li>
        </ul>
      </div>

      {/* TABS */}
      <Tabs>
        <TabList>
          <Tab>Read Books List</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        {/* READ LIST */}
        <TabPanel>
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Books I Read: {readlist.length}
            </h2>

            <div className="space-y-4">
              {readlist.map((book) => (
                <div
                  key={book.bookId}
                  className="border rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">
                    {book.bookName}
                  </h3>

                  <p className="text-gray-500">
                    By: {book.author}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm">
                    <span>
                      Pages: {book.totalPages}
                    </span>

                    <span>
                      Rating: {book.rating}
                    </span>

                    <span>
                      Category: {book.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

        {/* WISHLIST */}
        <TabPanel>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">
              My Wishlist
            </h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Readlist;