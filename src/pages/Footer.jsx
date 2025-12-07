import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import PropTypes from "prop-types";

const Footer = () => {
  // Define colors based on the consistent theme
  const colorPrimary = '#40BACA'; // Light Cyan/Blue for accents
  // const colorAccent = '#2F6F6B'; // Dark Teal/Green for key titles
  const colorDarkBg = '#1e293b'; // Deep Navy Blue for the footer background
  const colorTextLight = '#f8fafc'; // White/Light Slate for main text


  // Since NavLink is not available, we use standard <a> tags with mock paths
  const NavLink = ({ to, children }) => (
    <a href={to} className="nav-link p-0 text-white text-opacity-75 hover:text-opacity-100 transition-opacity duration-300 d-flex align-items-center">
      <ChevronRight size={16} className="me-2" style={{ color: colorPrimary }} />
      {children}
    </a>
  );

  // Simple Anchor for contact links
  const ContactLink = ({ href, icon: Icon, children }) => (
    <a href={href} className="nav-link p-0 text-white text-opacity-75 hover:text-opacity-100 transition-opacity duration-300 d-flex align-items-start text-break">
      {/* This is the component causing the error if 'Icon' is undefined.
        We ensure it is always provided in the usages below. 
      */}
      <Icon size={20} className="me-3 mt-1 flex-shrink-0" style={{ color: colorPrimary }} />
      {children}
    </a>
  );

    ContactLink.propTypes = {
    icon: PropTypes.elementType.isRequired,   // 👈 FIXES the ESLint warning
    href: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  NavLink.propTypes = {
    // icon: PropTypes.elementType.isRequired,   // 👈 FIXES the ESLint warning
    to: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <footer style={{ backgroundColor: colorDarkBg }} className="pt-5 pb-3 font-inter">
      <style>
        {`
        .footer-section {
          font-family: 'Inter', sans-serif;
        }
        .footer-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${colorTextLight};
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .footer-line {
          width: 60px;
          height: 3px;
          background-color: ${colorPrimary};
          margin-bottom: 2rem;
          border-radius: 1px;
        }
        .text-white-subtle {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.95rem;
        }
        .link-group li {
            margin-bottom: 0.5rem;
        }
        `}
      </style>
      <div className="container">
        <div className="row g-4">
          
          {/* 1. About / Brand */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-4">
              <HeartHandshake size={32} style={{ color: colorPrimary }} className="me-3" />
              <span className="fs-3 fw-bold" style={{ color: colorTextLight }}>
                CarePoint
              </span>
            </div>
            <p className="text-white-subtle pe-lg-5">
              Compassionate care. Trusted support. Modern wellbeing. We provide personalized domiciliary care,
              healthcare staffing solutions, companionship, online & in-person wellbeing support, and youth support.
            </p>
          </div>

          {/* 2. Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact Information</h5>
            <div className="footer-line mb-3"></div>
            <ul className="list-unstyled link-group">
              <li className="mb-3">
                {/* FIX: MapPin was previously missing the 'icon' prop. Now correctly passed. */}
                <ContactLink href="#" icon={MapPin}>
                  <p className='mb-0'>
                    <strong>Head Office:</strong> Chippenham, United Kingdom <br />
                    <span className='small'>Serving: Bath, Bristol, Somerset, Weston-super-Mare, etc.</span>
                  </p>
                </ContactLink>
              </li>
              <li className="mb-3">
                <ContactLink href="tel:+447592642428" icon={Phone}>
                  +44 7592 642428 (24/7 Enquiries)
                </ContactLink>
              </li>
              <li className="mb-3">
                <ContactLink href="mailto:info@carepointhealthcaresolutions.co.uk" icon={Mail}>
                  info@carepointhealthcaresolutions.co.uk
                </ContactLink>
              </li>
            </ul>
          </div>

          {/* 3. Quick Links & Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <div className="footer-line mb-3"></div>
            <ul className="list-unstyled link-group">
              <li className="mb-2"><NavLink to="/">Home</NavLink></li>
              <li className="mb-2"><NavLink to="/about">About Us</NavLink></li>
              <li className="mb-2"><NavLink to="/services">Services</NavLink></li>
              <li className="mb-2"><NavLink to="/workWithUs">Join Our Team</NavLink></li>
              <li className="mb-2"><NavLink to="/contact">Contact Us</NavLink></li>
              <li className="mb-2"><NavLink to="/policies">Policies</NavLink></li>
            </ul>
          </div>

          {/* 4. Services & Compliance */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Services</h5>
            <div className="footer-line mb-3"></div>
            <ul className="list-unstyled text-white-subtle small link-group">
              <li>Domiciliary / Home Care</li>
              <li>Healthcare Staffing Solutions</li>
              <li>Companionship Services</li>
              <li>Online Wellbeing Support</li>
              <li>Youth Support (13–25)</li>
            </ul>
            
            <h5 className="footer-title mt-4">Compliance</h5>
             <ShieldCheck size={20} style={{ color: colorPrimary }} className="mb-2" />
            <p className="text-white-subtle small">
              CQC-aligned quality standards. DBS-checked, trained, and supervised staff.
            </p>
          </div>

        </div>

        {/* Separator and Copyright */}
        <div className="row mt-4 pt-4 border-top border-secondary border-opacity-25">
          <div className="col-12 text-center">
            <p className="text-white-subtle small mb-0">
              © 2025 CarePoint Healthcare Solutions Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;