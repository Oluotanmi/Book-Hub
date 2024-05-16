import React from "react";
import {Link} from 'react-router-dom'

const Books =(book)=> {
    return(
        <div className="  p-4 grid sm:grid-cols-2 bg-pink-100 sm:rounded-md sm:m-3 shadow-xl">
      
           <div className=" ">
            <img className="w-40 rounded-md " src={book.cover_img} alt='cover'/>
           </div>

          <div>
          <div>
            <h2 className=" font-extrabold text-xl text-pink-600">{book.title}</h2>
          </div>

          <div>
            <span>Author:</span>
            <span>{book.author}</span>
          </div>

          <div>
            <span>Total Editions:</span>
            <span>{book.edition_count}</span>
          </div>

          <div>
            <span>First Publish Year:</span>
            <span>{book.first_publish_year}</span>
          </div>

          <Link to={`/bookdetails/${book.id}`}>
             <button className="sm:p-3 sm:m-3 bg-pink-700 rounded-md text-white font-medium">View Details</button>
          </Link>

          </div>
       
        </div>
    )
}

export default Books;