import React from 'react';

const Book = ({singleBook}) => {

    return (
        <div>
            <h2>{singleBook.bookName}</h2>
            <p>{singleBook.author}</p>
            <img src={singleBook.image} alt={singleBook.bookName} />
        </div>
    );
};

export default Book;