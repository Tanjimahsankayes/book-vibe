import React, { use } from "react";
import BooksCard from "../Shared/ui/BooksCard";


const booksPromise = fetch("/booksData.json").then((res) => res.json());

const Allbooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");

  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6 mx-auto items-center justify-center">
        {books.map((book, index) => {
          return (
            <BooksCard key={index} book={book} ></BooksCard>
          );
        })}
      </div>
    </div>
  );
};

export default Allbooks;
