import React from 'react';

const Blog = () => {
    return (
        <div className='py-16 px-20 space-y-3'>
            <div>
                <h4 className='font-bold text-2xl'>Difference between javascript and nodejs</h4>
                <p><span className='font-medium'>JavaScript:</span>
                Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.	 
                </p>
                <p><span className='font-medium'>Node:</span>
                NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side. 
                </p>
            </div>
            <div>
                <h4 className='font-bold text-2xl'>When should you use nodejs and when should you use mongodb</h4>
                <p><span className='font-medium'>nodejs:</span>
                There is a lot of programming languages, development platforms, frameworks and tools for building application servers. As a software engineer, we always have to understand both the advantages and disadvantages and decide when to use which programming language or tool based on our needs. 
                </p>
                <p><span className='font-medium'>mongodb:</span>
                MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.
                </p>
            </div>
            <div>
                <h4 className='font-bold text-2xl'>Differences between sql and nosql databases.</h4>
                <p><span className='font-medium'>sql:</span>
                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable 
                </p>
                <p><span className='font-medium'>nosql:</span>
                Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable
                </p>
            </div>
           
        </div>
    );
};

export default Blog;