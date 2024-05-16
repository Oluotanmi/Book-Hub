import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader.js/Loader";
import {HiArrowNarrowLeft, IconName} from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/"

const BookDetails =() => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBooks] = useState(null)
  const navigate = useNavigate()

  const image ='./7972491.jpg'

    useEffect(() => {
      setLoading(true);

       async function getBookDetails(){
        try{
          const response = await fetch(`${URL}${id}.json`);
          const data = await response.json()
          
          if(data){
            const {description, title, covers, subject_places, subject_times, subjects} = data;

            const newBook = {
              description: description ? description.value : "No decription found",
              title: title,
              cover_img: covers ? `https//covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : image,
              subject_places : subject_places ? subject_places.join(", ") : 'No subject places found',
              subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
              subjects: subjects ? subjects.join(", ") : "No subjects found" 
            };
            setBooks(newBook)

            console.log(newBook)
            console.log(book.cover_img)
          }else {
            setBooks(null)
          }
          setLoading(false)
        }catch(error){
           console.log(error);
           setLoading(false)
        }
       }
       getBookDetails();
    },[id])

    if (loading) return <Loader />;
 
    return (
      <section>
        <div className="flex m-4" onClick={()=>navigate('/book')}>
           <HiArrowNarrowLeft className="sm:m-1"/>
           <h1>Go back</h1>
        </div>
         <div>
           {/* <img className="w-20" src={book?.cover_img} /> */}
           <div className="m-2 sm:p-5 rounded-sm bg-pink-300">
              <h1 className="font-extrabold text-lg text-pink-800">{book?.title}</h1>
              <p className="font-bold">{book?.description}</p>
              <h2 className="text-pink-800">{book?.subject_places}</h2>
              <h2 className="text-pink-800">{book?.subject_times}</h2>
              <h2 className="sm:my-4 text-white ">{book?.subjects}</h2>
           </div>
         </div>
      </section>
    );
  }
  
  export default BookDetails;