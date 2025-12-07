import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';

const NavBar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const clipElement = document.querySelector('.clip');
      if (clipElement) {
        if (window.scrollY > 0) {
          clipElement.classList.add('clip-up');
        } else {
          clipElement.classList.remove('clip-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  // const handleMouseEnter = () => setIsDropdownOpen(true);
  // const handleMouseLeave = () => setIsDropdownOpen(false);
  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={`sticky-top nav1 ${isScrolled ? 'scrolled-bg' : ''}`}>
      <div>
        <header className="d-flex flex-wrap justify-content-between align-items-center ps-3 pe-3 pe-lg-0">
          <Link className="navbar-brand d-flex align-items-center mb-0 me-auto text-decoration-none" to="/">
            <img
              src={logo}
              width="100"
              height="100"
              alt="CarePoint Logo"
              className={`fusion-standard-logo ${isScrolled ? 'logo-shrink' : ''}`}
            />
          </Link>

          {/* Desktop Section */}
          <div className="d-none d-lg-flex flex-column align-items-center">
            <div
              className={`d-flex clip flex-column flex-md-row align-items-center ms-md-3 px-5 pb-2 ${
                isScrolled ? 'clip-up' : ''
              }`}
            >
              <button
                type="button"
                className="btn my-2 rounded-pill my-md-0 ms-2 w-100 w-md-auto"
                style={{ borderColor: '#40BACA', color: '#40BACA', whiteSpace: 'nowrap', minWidth: '100px' }}
              >
                Login
              </button>

              <NavLink to="/contact" className="w-100 w-md-auto ms-md-2">
                <button
                  type="button"
                  className="btn rounded-pill text-white my-2 my-md-0 w-100 w-md-auto"
                  style={{ backgroundColor: '#40BACA', whiteSpace: 'nowrap', minWidth: '120px' }}
                >
                  Get Started
                </button>
              </NavLink>

              <p className="ms-2 text-left pt-3 fs-6 fw-normal" style={{ minWidth: '400px' }}>
                A1 & A2, Ground & 1st Floor, Methuen Park, Chippenham SN14 0GT
              </p>
            </div>

            <ul className="nav d-flex justify-content-center py-2">
              {[
                { name: "About", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Policies", path: "/policies" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blog" },
                { name: "Services", path: "/services" },
                { name: "FAQ", path: "/FAQs" },
              ].map((item, idx) => (
                <li className="nav-item fw-normal" key={idx}>
                  <NavLink
                    style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                    className="link nav-link"
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              {/* Services Dropdown Desktop */}
              {/* <li
                className="nav-item lampa fw-normal position-relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  className="link nav-link "
                  style={{ cursor: 'pointer', color: isDropdownOpen ? '#40BACA' : 'black' }}
                >
                  Services ⮟
                </span>

                <div className={`dropdown-menu-desktop position-absolute rounded right-100   ${isDropdownOpen ? 'show' : ''}`}>
                  <NavLink className="nav-link"
                    to="/services/domiciliary-care"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Domiciliary Care
                  </NavLink>

                  <NavLink className="nav-link"
                    to="/services/healthcare-staffing"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Healthcare Staffing
                  </NavLink>

                  <NavLink className="nav-link"
                    to="/services/companionship-support"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Companionship Support
                  </NavLink>

                  <NavLink className="nav-link"
                    to="/services/wellbeing-support"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Online & Face-to-Face Wellbeing
                  </NavLink>
                </div>
              </li> */}
            </ul>
          </div>

          {/* Mobile Burger Button */}
          <button className={`burger d-lg-none ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span> <span></span> <span></span>
          </button>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu d-lg-none ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav  flex-column">
            {[
               { name: "About", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Policies", path: "/policies" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blog" },
                { name: "Services", path: "/services" },
                { name: "FAQ", path: "/FAQs" },
            ].map((item, idx) => (
              <li className="nav-item fw-normal my-2" key={idx}>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                  to={item.path}
                  style={({ isActive }) => ({ color: isActive ? '#40BACA' : 'black' })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Mobile Dropdown */}
            {/* <li className="nav-item fw-normal my-2 mobile-dropdown-container">
              <div onClick={toggleMobileDropdown} style={{ cursor: 'pointer' }}>
                Services ⮟
              </div>

              <div className={`dropdown-mobile text-left ${isMobileDropdownOpen ? 'show-dropdown' : ''}`}>
                <NavLink className="nav-link"
                  to="/services/domiciliary-care"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Domiciliary Care
                </NavLink>

                <NavLink className="nav-link"
                  to="/services/healthcare-staffing"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Healthcare Staffing
                </NavLink>

                <NavLink className="nav-link"
                  to="/services/companionship-support"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Companionship Support
                </NavLink>

                <NavLink className="nav-link"
                  to="/services/wellbeing-support"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Online & Face-to-Face Wellbeing
                </NavLink>
              </div>
            </li> */}
          </ul>

          <div className="mt-3">
            <button className="btn my-2 rounded-pill w-75" style={{ borderColor: '#40BACA', color: '#40BACA' }}>
              Login
            </button>

            <NavLink to="/contact" className="w-100">
              <button className="btn rounded-pill text-white my-2 w-75" style={{ backgroundColor: '#40BACA' }}>
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
