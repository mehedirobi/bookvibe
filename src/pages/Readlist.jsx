import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../Utilities/Addtodb';
import { useEffect } from "react";

const Readlist = () => {
    const [redlist, setReadlist] = useState([]);
    const data = useLoaderData();
    console.log(data);

    useEffect (() => {
        const storedBooks = getStoredBooks();
        const convertedStoredBooks = storedBooks.map(id => parseInt(id));
        const myreadlist = data.filter(book => convertedStoredBooks.includes(book.bookId));
        console.log(storedBooks);
        setReadlist(myreadlist)
    }, [])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read books list</Tab>
      <Tab>My wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read {redlist.length}</h2>
    </TabPanel>
    <TabPanel>
      <h2>My wishlist</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Readlist;