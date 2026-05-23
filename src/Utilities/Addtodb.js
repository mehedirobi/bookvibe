const getStoredBooks = () => {
  const storedBooksSTR =
    localStorage.getItem("readlist");

  if (storedBooksSTR) {
    return JSON.parse(storedBooksSTR);
  }

  return [];
};

const addToDb = (id) => {
  const storedBooks = getStoredBooks();

  const exists = storedBooks.includes(id);
  console.log(exists);

  if (exists) {
    alert("Book already in read list");
    return;
  }

  storedBooks.push(id);

  localStorage.setItem(
    "readlist",
    JSON.stringify(storedBooks)
  );
};
const getWishlistBooks = () => {
  const storedWishlist =
    localStorage.getItem("wishlist");

  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }

  return [];
};

const addToWishlist = (id) => {
  const storedWishlist = getWishlistBooks();

  if (storedWishlist.includes(id)) {
    alert("Book already in wishlist");
    return;
  }

  storedWishlist.push(id);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(storedWishlist)
  );
};

export {
  addToDb,
  getStoredBooks,
  addToWishlist,
  getWishlistBooks,
};
