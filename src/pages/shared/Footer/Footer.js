import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    
  } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer className='bg-cyan-900 text-white'>
            <div className='w-11/12 mx-auto p-16 grid grid-cols-4 gap-8 justify-between'>
                <div>
                    <h2>Shop Information</h2>
                    <p>Address: Sava, Dhaka, Bangladesh</p>
                    <p>Phone: 5745674845</p>
                    <p>Email: foodmart@gmail.com</p>
                    <div>
                        <FontAwesomeIcon icon={'facebook'}/>
                        <FontAwesomeIcon icon={'youtube'}/>
                        <FontAwesomeIcon icon={'linkedin'}/>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </div>
            
                </div>
                <div>
                    <h2>Important Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div>
                    <h2>Important Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div>
                    <h2>Important Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
            <div className='w-11/12 mx-auto h-1 bg-white'></div>
            <p className='p-8 text-center'>All right reserve to Food-Mart 2022</p>
        </footer>
    );
};

export default Footer;