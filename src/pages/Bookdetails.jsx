import React from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from "react-router-dom";


const Bookdetails = () => {
    const { id } = useParams().id;
    const data = useLoaderData();
    console.log(data);
    console.log(id);
    return (
        <div>
            Bookdetails
        </div>
    );
};

export default Bookdetails;