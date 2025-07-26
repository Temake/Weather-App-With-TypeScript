import React from "react";
import { Link } from "react-router-dom";

const Header = () => { 
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 py-2 supports-[backdrop-filter]:bg-background/60 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img src="te.png" alt="Logo Image" className="h-14" />
        </Link>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
