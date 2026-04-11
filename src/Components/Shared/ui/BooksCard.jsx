import React from 'react';
import { FaRegStar } from "react-icons/fa";

const BooksCard = ( {book} ) => {
    return (
      <div className="card bg-base-50 shadow-md ">
        <figure className="p-6 m-6 rounded-2xl bg-green-100 ">
          <img src={book.image} className="h-60 rounded-xl " />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            {book.tags.map((tag, index) => (
              <div key={index} className="badge text-green-500 bg-green-100 font-semibold">
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title font-bold text-xl ">{book.bookName}</h2>
          <p className="font-semibold text-lg">{book.author}</p>
          <div className="card-actions text-xl justify-between pt-4 border-t border-dashed border-gray-300 ">
            <div className="font-semibold"> {book.category} </div>
            <div className="font-semibold flex items-center gap-2 ">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    );
};

export default BooksCard;