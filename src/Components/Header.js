import React from 'react'

import { LuMail } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
    return (
        <div className='container-fluid fixed-top'>
            <div className='row' >
                <div className='col-2 ' style={{ backgroundColor: '#cf2e2e', color: 'white' }}>
                    <LuMail />
                    admissions@yesitaly.in
                </div>
                <div className='col-10' style={{ backgroundColor: '#cf2e2e', color: 'white' }}>
                    <marquee>
                        India Today – Why is Italy becoming the preferred study abroad destination
                    </marquee>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg  bg-white">
                        <div className="container-fluid">
                            <div className='mx-auto'>
                                <img style={{ width: '220px', height: '100px' }} src='YES-Italy-1024x476.png' alt=''/>
                            </div>

                            <div className="collapse navbar-collapse" style={{ marginLeft: '170px' }} id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto ms-5 mb-2 mb-lg-0 fs-5 ">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" style={{ color: '#cf2e2e' }} href="#">Home</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Programmes
                                        </a>
                                        <ul className="dropdown-menu" >
                                            <li><a className="dropdown-item" to="#">Bachelors in Italy</a></li>
                                            <li><a className="dropdown-item" to="#">Masters in Italy</a></li>
                                            <li><a className="dropdown-item" to="#">MBA in Italy</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" to="#">Student Visa</a></li>
                                            <li><a className="dropdown-item" to="#">Scholarships</a></li>
                                            <li><a className="dropdown-item" to="#">IELTS/TOEFL</a></li>
                                            <li><a className="dropdown-item" to="#">Italian Language</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                                    </li>
                                </ul>
                                <div>
                                    <button type="button" style={{ backgroundColor: '#cf2e2e', color: 'white' }} className="btn fs-5 p-2"><FaPhoneAlt /> +91- 98 1898 9864</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header