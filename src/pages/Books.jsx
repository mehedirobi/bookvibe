import React, { Suspense, useEffect } from 'react';
import Book from './Book';

const Books = ({data}) => {
    const [allbooks, setAllbooks] = React.useState([]);
    // Option-1 for fetching data:
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllbooks(data))
    //         .then(() => console.log(allbooks))
    //         .catch(error => console.error('Error fetching books:', error));
    // }, []);

    // Option-2 for fetching data:
    // const bookpromise = fetch('booksData.json').then(res=>res.json());
    return ( 
        <div>
            
            <Suspense fallback={<div>Loading...</div>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
            </Suspense>
        </div>
    );
};

export default Books;