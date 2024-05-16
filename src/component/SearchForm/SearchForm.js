import React,{useRef, useEffect}  from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const SearchForm =() => {
  const{setSearchTerm, setResultTitle} = useGlobalContext()
  const searchText = useRef('');
  
  const navigate = useNavigate()

  useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
      e.preventDefault();
      let tempSearchTerm = searchText.current.value.trim();
      if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
       
        setResultTitle("please Enter Something...")
      }else{
        setSearchTerm(searchText.current.value)
      }
      
    }
  

    return (
      <div className="">
        <form className="  " onSubmit={handleSubmit}>
          <div className="flex rounded-3xl  justify-center">
          <input 
             className="rounded-3xl text-black p-3 w-80   font-medium outline-none "
             type="text"
             placeholder="Search your books here....."
             ref={searchText}
          />
          <div className="my-1 bg-white p-3 rounded-2xl">
            <button onClick={handleSubmit}  type="submit" ><IoIosSearch className="my-2  " color="black" size={28} /></button>
          </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default SearchForm;