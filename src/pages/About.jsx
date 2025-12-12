import React from 'react';
// Mock lucide-react icons are used. Assume NavLink is passed through props if needed, but not necessary for the display component itself.
import { ShieldCheck, HandHeart, Users, Globe, HeartPulse, Zap, Briefcase, TrendingUp } from 'lucide-react';
import PropTypes from "prop-types";
import values from './values.jpeg'
import careImage from './about-2.jpeg'
// --- Configuration ---
const colorPrimary = '#40BACA'; // Light Cyan/Blue for accents
const colorAccent = '#2F6F6B'; // Dark Teal/Green for titles and anchors

// Mock image placeholders
// const about = "https://placehold.co/1200x500/40BACA/ffffff?text=CarePoint+Team";
// const values = "https://placehold.co/600x400/2F6F6B/ffffff?text=Compassionate+Care";
// const woman = "https://placehold.co/600x400/40BACA/ffffff?text=Modern+Solutions";




// Reusable Card for Values Section
const ValueCard = ({ Icon, title, description, color }) => (
  <div className="card h-100 shadow-sm border-0 rounded-3 text-center" style={{ borderTop: `4px solid ${color}`, transition: 'all 0.3s' }}>
    <div className="card-body p-4 p-md-5 d-flex flex-column align-items-center">
      <Icon size={40} style={{ color: color }} className="mb-4" />
      <h4 className="fs-5 fw-bold mb-3" style={{ color: colorAccent }}>{title}</h4>
      <p className="text-secondary">{description}</p>
    </div>
  </div>
);

ValueCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,   // 👈 FIXES the ESLint warning
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// Reusable Card for Differentiators Section
const DifferentiatorCard = ({ Icon, title, description }) => (
  <div className="d-flex align-items-start p-4 bg-white rounded-3 shadow-sm hover-shadow-lg" style={{ transition: 'all 0.3s' }}>
    <div className="flex-shrink-0 p-3 rounded-circle me-3" style={{ backgroundColor: colorPrimary, opacity: 0.9 }}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h4 className="fs-5 fw-semibold mb-1" style={{ color: colorAccent }}>{title}</h4>
      <p className="text-muted small">{description}</p>
    </div>
  </div>
);

DifferentiatorCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


const About = () => {
  return (
    <div className="about-page">
      <style>
        {`
        .about-page {
          font-family: 'Inter', sans-serif;
        }

        /* Hero Styling */
        .hero-section {
          height: 500px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .hero-section h1 {
          font-size: 4.5rem; /* 72px */
          font-weight: 800;
          animation: fadeInDown 1s ease-out;
        }
        .hero-section p {
          font-size: 1.5rem; /* 24px */
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }
        
        /* Custom Utilities */
        .bg-light-custom {
            background-color: #f7f9fa; /* Slightly custom light gray */
        }
        
        /* Card Hover Effect */
        .card:hover {
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
            transform: translateY(-5px);
        }

        /* Differentiator Hover Effect */
        .hover-shadow-lg:hover {
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15) !important;
        }

        /* Section Title Line */
        .section-line {
            width: 90px;
            height: 4px;
            background-color: ${colorAccent};
            margin: 0 auto 2rem auto;
        }
        
        /* Animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .hero-section h1 {
                font-size: 3rem;
            }
            .hero-section p {
                font-size: 1.25rem;
            }
        }
        `}
      </style>

      {/* HERO SECTION */}
      <div
        className='hero-section text-white text-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${careImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          backgroundColor: "#000"
        }}

      >
        <div className='container'>
          <h1 className=''>About CarePoint</h1>
          <p className="mt-4">
            Safe, Compassionate, and Modern Care & Wellbeing Solutions.
          </p>
        </div>
      </div>

      <main className="py-5 py-md-5">

        {/* 1. WHO WE ARE (Modern Split Section) */}
        <section className='container my-5 py-4'>
          <div className="row align-items-center g-5">
            
            {/* Text Content */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className='d-flex align-items-center mb-4'>
                <HandHeart size={48} style={{ color: colorPrimary }} className="me-3" />
                <h2 className='display-5 fw-bold' style={{ color: colorAccent }}>Who We Are</h2>
              </div>
              
              <p className='fs-5 text-dark-emphasis mb-4'>
                CarePoint Healthcare Solutions Ltd is a modern, compassionate, and safeguarding-led care and wellbeing provider based in Chippenham, proudly serving Bath, Bristol, Somerset, and surrounding areas. 
              </p>

              <div className="list-group list-group-flush border-start border-4 ps-4 mb-4">
                <p className='list-group-item border-0 p-0 mb-2 fs-5 d-flex align-items-center'>
                  <ShieldCheck size={20} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                  <span>High-quality domiciliary (home) care</span>
                </p>
                <p className='list-group-item border-0 p-0 mb-2 fs-5 d-flex align-items-center'>
                  <Users size={20} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                  <span>Reliable healthcare staffing for care homes</span>
                </p>
                <p className='list-group-item border-0 p-0 mb-2 fs-5 d-flex align-items-center'>
                  <HeartPulse size={20} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                  <span>Warm companionship & non-regulated support</span>
                </p>
                <p className='list-group-item border-0 p-0 mb-2 fs-5 d-flex align-items-center'>
                  <Zap size={20} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                  <span>Online and in-person wellbeing sessions</span>
                </p>
              </div>

              <p className='fs-5 text-dark-emphasis'>
                We are built on trust, professional excellence, and a deep commitment to improving daily lives — one visit, one shift, one conversation at a time.
              </p>
            </div>

            {/* Image */}
            <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
              <img src={values} alt="Care values" className='img-fluid rounded-4 shadow-lg mx-auto' style={{ maxWidth: '500px', transition: 'transform 0.5s' }} />
            </div>

          </div>
        </section>

        {/* 2. MISSION & VISION (Vertical Alignment) */}
        <section className='bg-light-custom py-5 py-md-5'>
          <div className='container text-center'>
            <div className="row g-5">
              {/* Mission */}
              <div className="col-12 col-md-6">
                <h3 className='display-6 fw-bold mb-3' style={{ color: colorPrimary }}>Our Mission</h3>
                <div className='section-line'></div>
                <p className='fs-5 text-secondary mx-auto' style={{ maxWidth: '450px' }}>
                  To enhance the quality of life for all individuals and care organisations by delivering safe, person-centred care and innovative wellbeing support through a fully integrated model. We ensure every individual feels valued, supported, and empowered.
                </p>
              </div>

              {/* Vision */}
              <div className="col-12 col-md-6">
                <h3 className='display-6 fw-bold mb-3' style={{ color: colorPrimary }}>Our Vision</h3>
                <div className='section-line'></div>
                <p className='fs-5 text-secondary mx-auto' style={{ maxWidth: '450px' }}>
                  A world where compassionate care, emotional well-being and practical daily support are easily accessible to everyone. CarePoint strives to be a UK leader known for reliable support, strong safeguarding, and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR VALUES (Card Grid for readability) */}
        <section className='container my-5 py-4'>
          <h2 className='display-5 fw-bold text-center mb-5' style={{ color: colorAccent }}>Our Core Values</h2>
          <div className='row g-4'>
            
            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={HandHeart} 
                title="Compassion" 
                description="Leading with empathy, understanding, and dignity in every interaction and care decision."
                color={colorPrimary}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={ShieldCheck} 
                title="Safeguarding" 
                description="Safety is the foundation of all services, online and offline, protecting every individual we support."
                color={colorAccent}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={Briefcase} 
                title="Professionalism" 
                description="Upholding unwavering standards, guided by clear policies and responsible, ethical care delivery."
                color={colorPrimary}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={Users} 
                title="Respect & Inclusivity" 
                description="Treating every person with dignity, recognising their unique needs, identity, and cultural preferences."
                color={colorAccent}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={Zap} 
                title="Innovation" 
                description="Embracing modern methods, digital tools, and hybrid approaches to enhance accessibility and outcomes."
                color={colorPrimary}
              />
            </div>

            <div className="col-md-6 col-lg-4">
              <ValueCard 
                Icon={TrendingUp} 
                title="Empowerment" 
                description="Helping individuals build confidence, independence, and resilience to live fulfilling, meaningful lives."
                color={colorAccent}
              />
            </div>

          </div>
        </section>

        {/* 4. WHAT MAKES US DIFFERENT (Feature List) */}
        <section className='bg-light py-5 py-md-5'>
          <div className='container'>
            <h2 className='display-5 fw-bold text-center mb-3' style={{ color: colorAccent }}>What Makes Us Different</h2>
            <p className='fs-5 text-secondary text-center mb-5'>
              We offer a unified, hybrid service ecosystem that brings essential support services under one trusted brand.
            </p>

            <div className='row g-4'>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={Globe}
                  title="Unified Hybrid Ecosystem"
                  description="Domiciliary care, staffing, companionship, and digital wellbeing from a single, trusted provider."
                />
              </div>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={ShieldCheck}
                  title="Robust Safeguarding"
                  description="Over 38 robust policies, DBS-checked staff, and strict boundaries protecting adults & young people."
                />
              </div>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={Zap}
                  title="Technology-Enabled"
                  description="Leveraging online wellbeing, digital scheduling, and modern booking solutions for efficiency."
                />
              </div>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={Briefcase}
                  title="Experienced Leadership"
                  description="Led by founders with real frontline healthcare experience across all care settings."
                />
              </div>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={HeartPulse}
                  title="Local & Expanding"
                  description="Based in the Southwest with plans for nationwide expansion and new digital platforms."
                />
              </div>
              <div className="col-sm-6 col-lg-4">
                <DifferentiatorCard
                  Icon={Users}
                  title="Multicultural Approach"
                  description="A diverse team trained in cultural respect, sensitivity, and inclusive care delivery."
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUR STORY & SAFEGUARDING COMMITMENT (Split Content) */}
        <section className='container my-5 py-4'>
          <div className="row g-5">
            
            {/* Our Story */}
            <div className="col-12 col-lg-6">
              <div className='d-flex align-items-center mb-4'>
                <HeartPulse size={48} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                <h3 className='display-6 fw-bold' style={{ color: colorAccent }}>Our Story</h3>
              </div>
              <p className='fs-5 text-dark-emphasis mb-4'>
                CarePoint was born out of a desire to address real-life challenges in the UK care sector, including staff shortages, isolation, and the need for more flexible, modern support systems.
              </p>
              <ul className="list-unstyled space-y-2 text-lg text-gray-700">
                <li className='mb-1'>• Staff shortages & burnout in care homes.</li>
                <li className='mb-1'>• Isolation among elderly adults.</li>
                <li className='mb-1'>• Young people lacking safe, structured guidance.</li>
                <li className='mb-1'>• Need for integrated digital wellbeing support.</li>
              </ul>
              <p className='fs-5 text-dark-emphasis mt-4'>
                With firsthand healthcare experience, our founder created CarePoint to offer a unified, compassionate, and innovative blend of traditional care and modern wellbeing.
              </p>
            </div>

            {/* Safeguarding Commitment */}
            <div className="col-12 col-lg-6">
              <div className="p-4 rounded-4 shadow-lg border-start border-5 h-100" style={{ borderColor: colorAccent }}>
                <div className='d-flex align-items-center mb-4'>
                  <ShieldCheck size={48} style={{ color: colorAccent }} className="me-3 flex-shrink-0" />
                  <h3 className='h3 fw-bold' style={{ color: colorAccent }}>Safeguarding Commitment</h3>
                </div>
                <p className='fs-5 text-dark-emphasis mb-4'>
                  Safety, trust, and protection are at the heart of every service. We operate under stringent guidelines to ensure the well-being of all clients.
                </p>
                <ul className="list-unstyled space-y-2 text-lg text-gray-700 font-medium">
                  <li className='mb-1'>• Adult & Child Safeguarding protocols.</li>
                  <li className='mb-1'>• Online Safeguarding & Data Security.</li>
                  <li className='mb-1'>• Lone Working Protocols & clear Boundaries.</li>
                  <li className='mb-1'>• CQC-aligned quality standards.</li>
                </ul>
                <p className='small text-muted mt-4 fst-italic'>
                  Every member of staff is fully DBS-checked, trained, supervised, and monitored through clear policies and procedures.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* 6. AREAS WE SERVE & TEAM INFO (Compact Layout) */}
        <section className='container my-5 py-4'>
          <div className="row g-5">
            
            {/* Areas We Serve */}
            <div className="col-12 col-lg-6">
              <div className='d-flex align-items-center mb-4'>
                <Globe size={48} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                <h3 className='display-6 fw-bold' style={{ color: colorAccent }}>Areas We Serve</h3>
              </div>
              <p className='fs-5 text-dark-emphasis mb-4'>
                We proudly support clients across the Southwest region:
              </p>
              <div className="row g-2 fs-5">
                <span className="col-6 fw-semibold">Bath</span>
                <span className="col-6 fw-semibold">Bristol</span>
                <span className="col-6">Somerset</span>
                <span className="col-6">Weston-Super-Mare</span>
                <span className="col-6">Chippenham</span>
                <span className="col-6">Keynsham</span>
                <span className="col-6">Clevedon</span>
                <span className="col-6">Frome</span>
              </div>
              <p className='text-muted mt-4'>
                <strong>Note:</strong> Nationwide digital wellbeing support is available within and outside the UK.
              </p>
            </div>

            {/* Meet Our Team */}
            <div className="col-12 col-lg-6 border-start border-lg-0 border-light-subtle ps-lg-5">
              <div className='d-flex align-items-center mb-4'>
                <Users size={48} style={{ color: colorPrimary }} className="me-3 flex-shrink-0" />
                <h3 className='display-6 fw-bold' style={{ color: colorAccent }}>Meet Our Team</h3>
              </div>
              <p className='fs-5 text-dark-emphasis mb-4'>
                Trained. Compassionate. Professional. Our diverse team ensures high-quality support.
              </p>
              <div className="row g-2 fs-5">
                <span className="col-6 fw-semibold">Healthcare Assistants</span>
                <span className="col-6 fw-semibold">Support Workers</span>
                <span className="col-6">Senior Carers</span>
                <span className="col-6">Wellbeing Practitioners</span>
                <span className="col-6">Safeguarding Leads</span>
                <span className="col-6">Coordinators & Nurses</span>
              </div>
              <p className='small text-muted mt-4 fst-italic'>
                All staff receive mandatory training, regular supervision, and professional development.
              </p>
            </div>

          </div>
        </section>

        {/* 7. CTA Section (Enhanced Visibility) */}
        <section className='py-5 py-md-5 text-white' style={{ backgroundColor: colorAccent }}>
          <div className='container text-center'>
            <h2 className='display-4 fw-bold mb-4'>
              Ready to Connect?
            </h2>
            <p className='fs-5 opacity-75 mb-5 mx-auto' style={{ maxWidth: '600px' }}>
              Whether you need care, companionship, wellbeing support, or staffing assistance—we are here to help.
            </p>
            
            {/* Contact Details Grid */}
            <div className="row g-4 justify-content-center text-light mb-5">
                <div className="col-md-4">
                    <p className="d-flex flex-column align-items-center mb-0">
                        <span className="fw-bold fs-4 mb-2"> Phone</span>
                        <span className="fs-5">+447592642428</span>
                        <span className="fs-5">+447512499615</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p className="d-flex flex-column align-items-center mb-0">
                        <span className="fw-bold fs-4 mb-2"> Email</span>
                        <span className="fs-5">info@carepointhealthcaresolutions.co.uk</span>
                    </p>
                </div>
                <div className="col-md-4">
                    <p className="d-flex flex-column align-items-center mb-0">
                        <span className="fw-bold fs-4 mb-2"> Location</span>
                        <span className="fs-5">Based in Chippenham</span>
                        <span className="fs-5">Serving the Southwest & Nationwide Online</span>
                    </p>
                </div>
            </div>

            {/* Contact Button */}
            {/* Assuming NavLink is available, otherwise use a simple <a> */}
            <a href='/contact'
              className="btn btn-lg fw-bold px-5 py-3 rounded-pill shadow-lg text-uppercase"
              style={{ backgroundColor: colorPrimary, color: 'white', transition: 'transform 0.3s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Contact Us Today
            </a>

          </div>
        </section>

      </main>
    </div>
  );
}

export default About;