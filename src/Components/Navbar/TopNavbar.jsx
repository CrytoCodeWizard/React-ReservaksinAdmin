import React from "react";
import "./TopNavbar.css";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import ProfilePhoto from "./ProfilePhoto";
import {HiRefresh} from 'react-icons/hi';
import {IoSettings} from 'react-icons/io5';

function TopNavbar() {
  const isLogged = useSelector((state) => state.auth.login)
  return (
    <div>
      <nav className="navbar navbar-light bg-white py-3">
        <div className="container-fluid d-flex justify-content-start">
          <button
            className="navbar-toggler mx-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand nav-logo" href="/">
            Reservaksin
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2 search-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>         
          </form>
          <button type="button" className='btn btn-sort'>
                <HiRefresh color='#0A3E66' size={27}/>
            </button>
            <button type="button" className='btn btn-sort'>
                <IoSettings color='#0A3E66' size={27}/>
            </button>
            {
              isLogged ? (
                <>
                  <ProfilePhoto/>
                </>
              )
              : <Link className="btn btn-primary mt-1 mx-2" to="/login">Login</Link>
            }  

          {/* side navbar */}
          <div
            className="offcanvas offcanvas-start canvas-container text-white"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Reservaksin
              </h5>
              <button
                type="button"
                className="btn-close text-reset text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 px-3">
                <li className="nav-item py-2">
                  <Link
                    className="nav-link active sidenav-text"
                    aria-current="page"
                    to="/"
                  >
                    <i className="fa fa-th-large px-3" aria-hidden="true"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item  py-2">
                  <Link className="nav-link sidenav-text" to="/session">
                    <i className="fa fa-clock-o px-3" aria-hidden="true"></i>Session
                  </Link>
                </li>
                <li className="nav-item py-2">
                  <Link className="nav-link sidenav-text" to="/faskes">
                    <i className="fa fa-hospital-o px-3" aria-hidden="true"></i>
                    Faskes
                  </Link>
                </li>
                <li className="nav-item py-2">
                  <Link className="nav-link sidenav-text" to="/vaccine">
                    <i className="fa fa-medkit px-3" aria-hidden="true"></i>Vaccine
                  </Link>
                </li>
                <li className="nav-item py-2">
                  <Link className="nav-link sidenav-text" to="/user">
                    <i className="fa fa-users px-3" aria-hidden="true"></i>User
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavbar;
