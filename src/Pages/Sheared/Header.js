import React, { useContext, useEffect, useState } from "react";
import {IoIosArrowDown ,IoIosArrowUp} from 'react-icons/io';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Header = () => {
  const [open, setOpen] = useState(false);
  const { user,signout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [logout, setLogout] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        
    }, [])
  return (
    <div className="drop-shadow-md">
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
        <div className="navbar-end flex ">
             <div onClick={()=>setLogout(!logout)} className={` cursor-pointer ${user ?"flex  items-center" :"hidden"}`}>
                <p  className="font-bold p-1">{user?.displayName}</p>
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className={`absolute top-16  bg-slate-500 hover:bg-slate-600 duration-200 rounded p-3 text-yellow-50 ${logout && "hidden"}`}>
                  <button onClick={()=> signout()}>Log Out</button>
                </div>
              </div>
            <div  onClick={()=>setLogout(!logout)} className={`cursor-pointer ${user ?"hidden" : "flex items-center"}`}>
                <p className="p-1 font-semibold text-gray-700">No User</p>            
                <FaUserCircle size={30} className="text-gray-600"></FaUserCircle>
                <div className={`absolute top-16  bg-slate-500 hover:bg-slate-600 duration-200 rounded p-3 text-yellow-50 ${logout && "hidden"}`}>
                  <button>Log In</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
