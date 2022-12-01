import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
import {
  faBars,
  faCartShopping,
  faXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo/logo.svg";

const Navbar = () => {
  const [display, setDisplay] = useState(0);

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-green-100 flex flex-row items-center justify-around">
        <div className="basis-1/5">
          <img src={logo} alt="" />
        </div>
        <div className="basis-2/3 flex flex-row items-center justify-between ">
          <div className="hidden lg:flex flex-row">
            <Link
              className="inline-block p-3 font-bold hover:text-green-700"
              to='/'
              alt=""
            >
              Home
            </Link>
            <Link
              className="inline-block p-3 font-bold hover:text-green-700"
              to='foods'
              alt=""
            >
              Foods
            </Link>
            <Link
              className="inline-block p-3 font-bold hover:text-green-700"
              to='blogs'
              alt=""
            >
              Blogs
            </Link>
            <Link
              className="inline-block p-3 font-bold hover:text-green-700"
              to='about'
              alt=""
            >
              About Us
            </Link>
            <Link
              className="inline-block p-3 font-bold hover:text-green-700"
              to='trackOrder'
              alt=""
            >
              Track Order
            </Link>
          </div>
          <div>
            <div className="px-2 bg-green-100 border-green-600 border-2 rounded">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="px-2">Search Food...</span>
            </div>
          </div>
          <div className=" lg:flex flex-raw items-center ">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="1x"
              className="text-green-700 inline-block"
            />
            <a className="inline-block p-3 font-bold" href="#f" alt="">
              Profile
            </a>
          </div>
          <div className="block md:block lg:hidden">
            {
                display? 
                <FontAwesomeIcon
                  icon={faXmark}
                  size="1x"
                  className="text-green-700"
                  onClick={()=>{setDisplay(0)}}
                />:<FontAwesomeIcon
                icon={faBars}
                size="1x"
                className="text-green-700"
                onClick={()=>{setDisplay(1)}}
              />
            }
          </div>   
        </div>
      </div>
            {
                display ? <div className=" bg-green-300 flex flex-col lg:hidden">
                <a
                  className="inline-block p-3 font-bold hover:bg-green-200"
                  href="#f"
                  alt=""
                >
                  Home
                </a>
                <a
                  className="inline-block p-3 font-bold hover:bg-green-200"
                  href="#f"
                  alt=""
                >
                  Foods
                </a>
                <a
                  className="inline-block p-3 font-bold hover:bg-green-200"
                  href="#f"
                  alt=""
                >
                  Blogs
                </a>
                <a
                  className="inline-block p-3 font-bold hover:bg-green-200"
                  href="#f"
                  alt=""
                >
                  About Us
                </a>
                <a
                  className="inline-block p-3 font-bold hover:bg-green-200"
                  href="#f"
                  alt=""
                >
                  Track Order
                </a>
            </div>:<div className="hidden"></div>
            }
    </nav>
  );
};

export default Navbar;
