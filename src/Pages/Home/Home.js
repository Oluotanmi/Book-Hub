import React from "react";
import Header from "../../component/Header/Header";
import { Outlet } from "react-router-dom";
import BookList from "../../component/BookList/Booklist";

const Home =() => {


    return (
      <main>
          <Header />
          <Outlet />
          <BookList />
      </main>
    );
  }
  
  export default Home;