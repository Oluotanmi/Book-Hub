import React from "react";
import Book from '../BookList/Books.js'
import { useGlobalContext } from "../Context/Context";
import Loading from '../Loader.js/Loader'

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList =() => {
  const image ='./7972491.jpg'
  const {books, loading, resultTitle} = useGlobalContext();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      
      //removing /works/to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : image
      
    }
  });
 
  console.log(booksWithCovers)

    if(loading) return <Loading />

    return (
      <section>
        <div>
          <div className="sm:p-5 sm:bg-pink-600">
            <h1 className="text-right text-white font-medium">
              {resultTitle}
            </h1>
          </div>
          <div>
            {
              booksWithCovers.slice(0, 30).map((item, index) => {
                return (
                  <Book 
                  key={index} 
                  {...item} 
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
  
  export default BookList;