import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  HeartHandshake, // Care & Companionship
  Briefcase,
  Users, // Staffing
  Smile, // Wellbeing
  Shield, // Safeguarding icon
  Compass, // Differentiation icon
  CheckCircle, // Check icon
} from 'lucide-react';

import healthCare from './Healthcare.jpeg'
import mentalSupport from './mental support.jpeg'
import nurse from './nurse.jpeg'
import Support from './support.jpeg'
import Relax from './relax.jpg'

// Brand colors
const brandColorHex = '#40BACA'; // Teal/Cyan
const darkCtaBgHex = '#3F4A49'; // Dark Accent
const lightGrayBgHex = '#f0f8ff'; // Light Blue BG
const accentColorHex = 'text-[#3F4A49]';

// Placeholder Images
// const imageBase = "https://placehold.co/200x200/";
const images = {
  individuals: `${healthCare}`,
  families: `${nurse}`,
  providers: `${mentalSupport}`,
  authorities: `${Support}`,
  heroBanner: `https://www.mua.edu/uploads/sites/10/2023/02/istock-482499394.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  parallaxBg: Relax,
};

// Data for Why Choose CarePoint section
const whyChooseData = [
  { icon: HeartHandshake, title: "Person-Centred Care & Support", description: "Every service is tailored to the unique needs, goals, and preferences of each individual." },
  { icon: Users, title: "Fully Trained & DBS-Checked Staff", description: "Our team includes experienced HCAs, support workers, senior carers, nurses, and wellbeing practitioners." },
  { icon: Shield, title: "Strong Safeguarding & Compliance", description: "With over 38 policies, robust safeguarding for adults & children, and strict quality standards." },
  { icon: Briefcase, title: "Technology-Enabled Services", description: "Online wellbeing, digital booking, and modern systems make our support easy and reliable." },
  { icon: Smile, title: "Inclusive & Culturally Sensitive Approach", description: "Our diverse team brings warmth, respect, and understanding to every interaction." },
  { icon: MapPin, title: "Local Presence, National Vision", description: "Based in Bath with active operations across the South West — and expanding nationwide." },
];

// Data for What Makes CarePoint Different section
const whatMakesDifferent = [
  "A unified care & wellbeing model (4 services under one brand)",
  "Modern, tech-enabled service delivery",
  "Safe online support for youth and adults",
  "Strong safeguarding, compliance & training",
  "Founder with real frontline healthcare experience",
  "Local community focus with national scalability",
  "Warm, multicultural, respectful approach"
];

const Home = () => {

  // We define custom CSS classes here using standard React style rendering
  // to implement brand colors and unique element styling (like separators)
  // as required by the Bootstrap conversion.
  const customStyles = (
    <style>
      {`
        /* Load Bootstrap CSS */
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

        :root {
            --cp-primary: ${brandColorHex};
            --cp-dark: ${darkCtaBgHex};
            --cp-accent-light: ${lightGrayBgHex};
        }
        .bg-cp-primary { background-color: var(--cp-primary) !important; }
        .text-cp-primary { color: var(--cp-primary) !important; }
        .bg-cp-dark { background-color: var(--cp-dark) !important; }
        .bg-cp-accent-light { background-color: var(--cp-accent-light) !important; }

        .btn-cp-primary {
            background-color: var(--cp-primary);
            color: white;
            border-color: var(--cp-primary);
            transition: background-color 0.3s;
        }
        .btn-cp-primary:hover {
            background-color: #339AA9; /* Darker shade on hover */
            border-color: #339AA9;
            color: white;
        }

        .hero-banner {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${images.heroBanner}');
          background-size: cover;
          background-position: center;
          min-height: 600px;
        }

        .line-separator {
          width: 60px;
          height: 4px;
          background-color: var(--cp-primary);
          border-radius: 9999px;
          margin: 1rem auto;
        }

        .parallax-bg {
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${images.parallaxBg}');
            background-size: cover;
            background-attachment: fixed;
            background-position: center 30%;
        }

        .service-card-divider {
            height: 2px;
            width: 80px;
            background-color: var(--cp-primary);
            margin: 1rem auto;
        }
      `}
    </style>
  );

  return (
    <>
      {customStyles}
      <div className='min-vh-100 bg-light'>
        
        {/* HERO SECTION */}
        <div className='hero-banner d-flex align-items-center justify-content-center text-white'>
          <div className='container text-center py-5'>
            <h1 className='display-3 fw-bold mt-5'>
              Compassionate Care. Trusted Support. <span className='text-cp-primary'>Modern Wellbeing.</span>
            </h1>
            {/* Replaced max-width with Bootstrap grid utilities */}
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className='lead mt-3 mx-auto'>
                  Delivering high-quality home care, staffing, companionship, and wellbeing services across Bath, Bristol & Somerset.
                </p>
              </div>
              <div className="col-lg-9">
                 <p className='fs-5 mt-2 mx-auto'>
                  CarePoint Healthcare Solutions Ltd provides safe, person-centred and innovative support for adults, older people, young people, and care organisations.
                </p>
              </div>
            </div>
            
            <a href="#who-we-support" className='d-inline-block mt-4 text-decoration-none'>
              <button type="button" className={`btn btn-lg btn-cp-primary rounded-pill shadow-lg transition duration-300 px-5`}>
                Explore Services
              </button>
            </a>
          </div>
        </div>

        {/* OUR APPROACH / VALUE PROPOSITION */}
        <section className='py-5'>
          <div className="container">
            <div className={`p-4 p-md-5 rounded-3 shadow-lg bg-cp-accent-light text-${accentColorHex}`}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                  <h2 className='display-5 fw-bold'>Our Modern Model</h2>
                  <div className="line-separator mx-auto mx-lg-0"></div>
                </div>
                <div className="col-lg-6 fs-5">
                  <p>
                    We combine professional care with modern digital wellbeing to improve lives, strengthen care providers, and support families with flexible, trustworthy services.
                  </p>
                  <a href="#contact" className='d-inline-block text-decoration-none'>
                    <button type="button" className={`btn btn-cp-primary py-2 px-4 mt-3 rounded-3 shadow-sm`}>
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SUPPORT - Parallax background simulation */}
        <section id="who-we-support" className='parallax-bg py-5 text-white text-center'>
          <div className='container py-5'>
             <h2 className='display-4 fw-bold mb-5'>Who We Support</h2>
            <div className="row justify-content-center g-4">

              {/* Card 1: Older People & Adults */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className='card h-100 p-3 rounded-3 shadow-lg transition transform hover-shadow'>
                  <div className='card-body text-dark'>
                    <img src={images.individuals} className='rounded-circle mx-auto mb-3 d-block' style={{ width: 120, height: 120, objectFit: 'cover' }} alt="Older People Care" onError={(e) => e.target.src = "https://placehold.co/120x120/57A8B7/white?text=Older+Adults"} />
                    <h4 className='h5 fw-semibold my-3'>Older People & Adults</h4>
                    <p className='text-sm mb-0'>With daily living support, companionship, home-care services, and help with routine building or wellbeing.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Families & Young People */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className='card h-100 p-3 rounded-3 shadow-lg transition transform hover-shadow'>
                  <div className='card-body text-dark'>
                    <img src={images.families} className='rounded-circle mx-auto mb-3 d-block' style={{ width: 120, height: 120, objectFit: 'cover' }} alt="Family Support" onError={(e) => e.target.src = "https://placehold.co/120x120/8C6B99/white?text=Families"} />
                    <h4 className='h5 fw-semibold my-3'>Families & Young People</h4>
                    <p className='text-sm mb-0'>Flexible support for elderly relatives or young people, offering safe, structured emotional and practical guidance.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Care Homes & Healthcare Providers */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className='card h-100 p-3 rounded-3 shadow-lg transition transform hover-shadow'>
                  <div className='card-body text-dark'>
                    <img src={images.providers} className='rounded-circle mx-auto mb-3 d-block' style={{ width: 120, height: 120, objectFit: 'cover' }} alt="Staffing Solutions" onError={(e) => e.target.src = "https://placehold.co/120x120/40BACA/white?text=Providers"} />
                    <h4 className='h5 fw-semibold my-3'>Care Homes & Providers</h4>
                    <p className='text-sm mb-0'>Reliable staffing and emergency shift cover. Experienced HCAs, support workers, and nurses available.</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Local Authorities */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className='card h-100 p-3 rounded-3 shadow-lg transition transform hover-shadow'>
                  <div className='card-body text-dark'>
                    <img src={images.authorities} className='rounded-circle mx-auto mb-3 d-block' style={{ width: 120, height: 120, objectFit: 'cover' }} alt="Local Authorities" onError={(e) => e.target.src = "https://placehold.co/120x120/2F6F6B/white?text=L.A."} />
                    <h4 className='h5 fw-semibold my-3'>Local Authorities</h4>
                    <p className='text-sm mb-0'>Collaborative and flexible support for individuals needing care, supervision, or wellbeing interventions.</p>
                  </div>
                </div>
              </div>
            </div>

            <a href="#services-list" className='d-inline-block text-decoration-none'>
              <button type="button" className={`btn btn-cp-primary btn-lg shadow-xl mt-5 px-5 rounded-3 fw-semibold`}>
                View Our Services
              </button>
            </a>
          </div>
        </section>

        {/* WHY CHOOSE CAREPOINT? (Detailed List) */}
        <section className='py-5 container text-center'>
            <HeartHandshake size={64} className="text-cp-primary mx-auto mb-3" />
            <h3 className='display-5 fw-bold'>Why Choose CarePoint?</h3>
            <div className='line-separator'></div>
            
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <p className='mt-4 fs-5 mx-auto fst-italic text-secondary'>
                        A modern, multi-service care provider built around you. At CarePoint, we believe care should be
                        safe, compassionate, flexible, and accessible.
                    </p>
                </div>
            </div>
            
            <div className="row g-4 mt-4">
              {whyChooseData.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 p-3 text-center rounded-3 shadow-sm border-0 transition hover-shadow-lg">
                    <div className='card-body'>
                      <item.icon size={40} className="text-cp-primary mx-auto mb-3" />
                      <h4 className='h5 fw-semibold mb-2'>{item.title}</h4>
                      <p className='text-muted small'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* OUR COMMITMENT TO SAFEGUARDING */}
        <section className='py-5 bg-danger-subtle'>
          <div className="container text-center">
            <Shield size={64} className="text-danger mx-auto mb-3" />
            <h3 className='display-5 fw-bold text-danger'>Our Commitment to Safeguarding</h3>
            <div className='line-separator bg-danger'></div>
            
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <p className='mt-4 fs-5 mx-auto'>
                      We maintain comprehensive safeguarding frameworks for children and adults, ensuring every service is delivered with dignity, respect, and protection at its core.
                    </p>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5 text-start">
                    <ul className="list-unstyled mt-4 fs-5 mx-auto">
                      {["Digital safeguarding", "Behaviour management", "Lone working protocols", "Early-help systems", "Staff training & supervision"].map((point, index) => (
                        <li key={index} className="d-flex align-items-start mb-2">
                          <CheckCircle size={20} className="text-danger me-2 flex-shrink-0 mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES CAREPOINT DIFFERENT */}
        <section className='py-5 container text-center'>
            <Compass size={64} className="text-cp-primary mx-auto mb-3" />
            <h3 className='display-5 fw-bold'>What Makes CarePoint Different</h3>
            <div className='line-separator'></div>
            
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <p className='mt-4 fs-5 mx-auto fst-italic text-secondary'>
                      CarePoint is not just a care provider; it is a modern hybrid care and wellbeing service built for today’s world.
                    </p>
                </div>
            </div>
            
            <div className="row justify-content-center">
                <div className="col-lg-9 col-xl-7 text-start">
                    <ul className="list-unstyled mt-4 fs-5 mx-auto">
                        {whatMakesDifferent.map((point, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                                <CheckCircle size={20} className="text-cp-primary me-3 flex-shrink-0 mt-1" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* WORK WITH US (MAP & Contact) */}
        <section className='py-5 bg-light container' id="contact">
          <div className="row align-items-center g-4">
            
            {/* Contact Details */}
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center p-4">
              <h3 className='display-6 fw-bold mb-4 text-center'>Get In Touch</h3>
              <div className='line-separator'></div>
              
              <div className='mt-4 fs-5 mx-auto text-start'>
                <div className="d-flex align-items-center mb-3">
                  <MapPin size={24} className="text-cp-primary me-3 flex-shrink-0" />
                  <span>Based in Chippenham, UK</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <Phone size={24} className="text-cp-primary me-3 flex-shrink-0" />
                  <span>+44 7592 642428 / +44 7512 499615</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <Mail size={24} className="text-cp-primary me-3 flex-shrink-0" />
                  <a href="mailto:info@carepointhealthcaresolutions.co.uk" className="text-decoration-none text-dark hover-underline break-all">info@carepointhealthcaresolutions.co.uk</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6 order-1 order-lg-2 p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.302650656797!2d-2.1579085234857955!3d51.503910271798514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48717252b0829b01%3A0x4c00903561f22db9!2sMethuen%20Park%2C%20Chippenham%20SN14%200GT!5e0!3m2!1sen!2suk!4v1736000000000!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location"
                className='rounded-3 shadow-lg'
              ></iframe>
            </div>
          </div>
        </section>

        {/* OUR SERVICES LIST */}
        <div id="services-list" className='py-5 bg-cp-accent-light'>
          <h2 className='display-5 fw-bold text-center mb-5'>Our Core Services</h2>
          <section className='container'>
            <div className="row text-center g-4">

              {/* Service Card 1: Domiciliary Care */}
              <div className='col-md-6 col-lg-3'>
                <Briefcase size={48} className='text-cp-primary mx-auto mb-3' />
                <h4 className='h5 fw-bold text-dark'>Domiciliary Care</h4>
                <div className='service-card-divider mx-auto'></div>
                <p className='small mb-3 min-vh-25'>
                  Personalised support at home — daily living, safety checks,
                  independence support and compassionate care.
                </p>
                <a href={'#'} className='text-decoration-none'>
                  <button className={`btn btn-outline-cp-primary btn-sm rounded-pill fw-semibold transition duration-300`}>
                    LEARN MORE
                  </button>
                </a>
              </div>

              {/* Service Card 2: Healthcare Staffing */}
              <div className='col-md-6 col-lg-3'>
                <Users size={48} className='text-cp-primary mx-auto mb-3' />
                <h4 className='h5 fw-bold text-dark'>Healthcare Staffing</h4>
                <div className='service-card-divider mx-auto'></div>
                <p className='small mb-3 min-vh-25'>Qualified Nurses, HCAs and Support Workers available 24/7 for care homes and supported services.</p>
                <a href={'#'} className='text-decoration-none'>
                  <button className={`btn btn-outline-cp-primary btn-sm rounded-pill fw-semibold transition duration-300`}>
                    LEARN MORE
                  </button>
                </a>
              </div>

              {/* Service Card 3: Companionship Support */}
              <div className='col-md-6 col-lg-3'>
                <HeartHandshake size={48} className='text-cp-primary mx-auto mb-3' />
                <h4 className='h5 fw-bold text-dark'>Companionship Support</h4>
                <div className='service-card-divider mx-auto'></div>
                <p className='small mb-3 min-vh-25'>Social, emotional and lifestyle support to reduce loneliness and build confidence.</p>
                <a href={'#'} className='text-decoration-none'>
                  <button className={`btn btn-outline-cp-primary btn-sm rounded-pill fw-semibold transition duration-300`}>
                    LEARN MORE
                  </button>
                </a>
              </div>

              {/* Service Card 4: Wellbeing Support */}
              <div className='col-md-6 col-lg-3'>
                <Smile size={48} className='text-cp-primary mx-auto mb-3' />
                <h4 className='h5 fw-bold text-dark'>Wellbeing Support</h4>
                <div className='service-card-divider mx-auto'></div>
                <p className='small mb-3 min-vh-25'>Online and in-person wellbeing sessions for young people and adults, including routine building.</p>
                <a href={'#'} className='text-decoration-none'>
                  <button className={`btn btn-outline-cp-primary btn-sm rounded-pill fw-semibold transition duration-300`}>
                    LEARN MORE
                  </button>
                </a>
              </div>

            </div>
          </section>
        </div>

        {/* TESTIMONIALS */}
        <section className='py-5 container text-center'>
          <Compass size={64} className="text-cp-primary mx-auto mb-3" />
          <h3 className='display-6 fw-bold'>What People Say</h3>
          <div className='line-separator'></div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
                <blockquote className='blockquote mt-4 fs-5 mx-auto fst-italic text-secondary'>
                  <p className='mb-3'>
                    “CarePoint has transformed the level of support my family receives.
                    Their staff are patient, understanding and genuinely caring.”
                  </p>
                  <footer className="blockquote-footer">Sarah T.</footer>
                </blockquote>
                <blockquote className='blockquote mt-3 fs-5 mx-auto fst-italic text-secondary'>
                  <p className='mb-3'>
                    “Professional, reliable and compassionate. The team always goes
                    above and beyond.”
                  </p>
                  <footer className="blockquote-footer">David R.</footer>
                </blockquote>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION / FINAL CTA */}
        <footer id="footer-contact" className={`d-flex flex-column align-items-center py-5 text-white bg-cp-dark`}>
          <h2 className='display-5 fw-bold text-center mb-4'>Speak With Our Team Today</h2>

          <div className='mt-4 fs-5 fw-medium space-y-3 text-center'>
              <div className="d-flex align-items-center justify-content-center">
                  <Phone size={24} className="text-cp-primary me-3" />
                  <a href="tel:+447592642428" className="text-white text-decoration-none hover-underline">+44 7592 642428</a> / <a href="tel:+447512499615" className="text-white text-decoration-none hover-underline ms-2">+44 7512 499615</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                  <Mail size={24} className="text-cp-primary me-3" />
                  <a href="mailto:info@carepointhealthcaresolutions.co.uk" className="text-white text-decoration-none hover-underline">info@carepointhealthcaresolutions.co.uk</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                  <MapPin size={24} className="text-cp-primary me-3" />
                  <span>Based in Chippenham, UK</span>
              </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default Home;