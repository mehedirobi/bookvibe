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

export { addToDb, getStoredBooks };