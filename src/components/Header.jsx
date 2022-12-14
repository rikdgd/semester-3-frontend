import React from "react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import '../style/Header.css'
import SessionHandler from '../SessionHandler';


const Header = () => {

    const myAccountUrl = '/users/' + SessionHandler.GetUserId();

    return(
        <header className='p-3 text-white' id='header'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                    {/* <a className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'></a> */}

                    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0' id='header-list'>
                        <li><Link to='/' id="home-link" className='nav-link px-2 text-lpurple'>Home</Link></li>
                        <li><Link to='/collection' id="collection-link" className='nav-link px-2 text-lpurple'>My collection</Link></li>
                        <li><Link to={myAccountUrl} id="collection-link" className='nav-link px-2 text-lpurple'>My account</Link></li>
                        <li><Link to='/chatroom' id="collection-link" className='nav-link px-2 text-lpurple'>Chatroom</Link></li>
                    </ul>

                    <SearchBar/>

                    <div className='text-end'>
                        <a className='btn btn-outline-light me-2 headbtn' href="/login">Login</a>
                        <a className='btn btn-outline-light headbtn' href="/create_account">Register</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;