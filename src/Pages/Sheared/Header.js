import React, { useEffect, useState } from "react";
import {IoIosArrowDown ,IoIosArrowUp} from 'react-icons/io';
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
      const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        
    }, [])
  return (
    <div className="drop-shadow-md sticky">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="relative md:hidden">
            {open ? <IoIosArrowUp onClick={()=>{setOpen(!open)}}></IoIosArrowUp>: <IoIosArrowDown onClick={()=>{setOpen(!open)}}>
            </IoIosArrowDown>}
            <div className={`bg-gray-200 w-52 absolute top-10 left-0 rounded p-3 ${open ? "flex-col" : "hidden"}`}>
              <h1>All Categories</h1>
                {
                categories.map(category => <p className='text-blue-400 underline my-3'  key={category.id} >
                    <Link to={`category/${category.id}`}>{category.name} </Link>
                </p>)
            }
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Hot News</a>
          
        </div>
        <div className="md:navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
