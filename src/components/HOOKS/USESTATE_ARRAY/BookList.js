import React, { useState } from "react";
import styles from "./booklist.module.css";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({ bookName: "", bookPrice: "" });

  const { bookName, bookPrice } = book;

  const addBook = () => {
    setBookList([
      ...bookList,
      {
        id: bookList.length + 1,
        name: book.bookName,
        price: book.bookPrice,
      },
    ]);
    // console.log(bookList);
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  return (
    <div>
      <h1>Book Manager</h1>
      <div>
        <label htmlFor="bookName">Book Name : </label>{" "}
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={bookName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bookPrice">Book Price : </label>{" "}
        <input
          type="text"
          id="bookPrice"
          name="bookPrice"
          value={bookPrice}
          onChange={handleChange}
        />
      </div>

      <button onClick={addBook} style={{ display: "block" }}>
        Add Book
      </button>
      <ul>
        {bookList.map((item, index) => (
          //   console.log(item)
          <li
            key={index}
          >{`Id: ${item.id}, Name: ${item.name}, Price: ${item.price}`}</li>
        ))}
      </ul>
    </div>
  );
}
