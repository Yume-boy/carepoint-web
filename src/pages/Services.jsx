import React from 'react';
// Keeping original local image imports and react-router-dom NavLink
import { NavLink } from 'react-router-dom';
import service from './service.jpg'
import careImage from './careImage.jpeg'


// New Lucide icons for the new services
import {
  Users,
  Smile,
  Compass,
  CheckCircle,
  Shield,
  Home,
  UserCheck,
} from 'lucide-react';

// Brand colors and custom styles for Bootstrap integration
const brandColorHex = '#40BACA'; // Teal/Cyan
const darkCtaBgHex = '#3F4A49'; // Dark Accent
const lightGrayBgHex = '#f0f8ff'; // Light Blue BG

const CustomStyles = () => (
    <style>
      {`
        /* Load Bootstrap CSS */
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        /* Load Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        body { font-family: 'Inter', sans-serif; }

        :root {
            --cp-primary: ${brandColorHex};
            --cp-dark: ${darkCtaBgHex};
            --cp-accent-light: ${lightGrayBgHex};
        }
        .bg-cp-primary { background-color: var(--cp-primary) !important; }
        .text-cp-primary { color: var(--cp-primary) !important; }
        .border-cp-primary { border-color: var(--cp-primary) !important; }

        .service-card-divider {
            height: 4px;
            width: 80px;
            background-color: var(--cp-primary);
            border-radius: 4px;
            margin: 1rem 0;
        }

        .card-service-feature {
            background-color: #f7fbfd; /* Very light blue background */
            transition: transform 0.3s, box-shadow 0.3s;
            border-radius: 12px !important; /* Ensure rounded corners */
        }
        .card-service-feature:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
        }

        .list-unstyled li {
            padding-left: 0;
        }

        .readMore {
            text-decoration: none;
            color: var(--cp-primary);
            font-weight: 600;
        }

        .hero-3 {
            min-height: 400px;
            background-attachment: fixed;
        }
      `}
    </style>
);


// --------------------------------------------------------
// 1. Domiciliary Care Services Component
// --------------------------------------------------------
const DomiciliaryCareCard = () => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 p-4 border-0 shadow-sm card-service-feature">
      <div className="card-body">
        <Home size={48} className="text-cp-primary mb-3" />
        <h3 className="card-title fw-bold text-dark mb-1">1. Domiciliary Care Services</h3>
        <p className="text-muted fst-italic mb-4">Professional, person‑centred support delivered in people’s own homes.</p>

        {/* What This Is */}
        <div className="mb-4">
          <h5 className="fw-bold text-cp-primary">What this is</h5>
          <p className="text-secondary small">Professional, person‑centred support delivered in people’s own homes. Services include help with daily living tasks, personal care, safety, and companionship—so people can live with dignity, independence, and peace of mind.</p>
        </div>

        <div className="row g-4">
          {/* Core Support */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Core Support We Provide</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Personal care: washing, dressing, grooming, and toileting assistance.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Medication prompting: supporting safe routines.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Mobility and transfers: helping people move safely.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Meal preparation and hydration.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Home‑based support: light domestic help.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Safeguarding‑led practice.</li>
            </ul>
          </div>

          {/* Who Benefits & How We Deliver It */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Who Benefits</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Older adults who want to remain at home.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Adults recovering from illness or hospital stays.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Families seeking reliable support for loved ones.</li>
            </ul>

            <h5 className="fw-bold text-dark mb-3 mt-4">How We Deliver It</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Tailored care plans co‑created with the person.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Flexible scheduling to fit individual routines.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Fully trained staff, vetted for safety and compassion.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --------------------------------------------------------
// 2. Healthcare Staffing Agency Services Component
// --------------------------------------------------------
const StaffingAgencyCard = () => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 p-4 border-0 shadow-sm card-service-feature">
      <div className="card-body">
        <Users size={48} className="text-cp-primary mb-3" />
        <h3 className="card-title fw-bold text-dark mb-1">2. Healthcare Staffing Agency Services</h3>
        <p className="text-muted fst-italic mb-4">Fast, high‑quality staffing supply for healthcare providers.</p>

        {/* What This Is */}
        <div className="mb-4">
          <h5 className="fw-bold text-cp-primary">What this is</h5>
          <p className="text-secondary small">Fast, high‑quality staffing supply for care homes, supported living, hospitals, and similar settings. We match experienced, trained workers to cover gaps, short‑notice shifts, and specialist needs—so healthcare providers can maintain safe, continuous care.</p>
        </div>

        <div className="row g-4">
          {/* Staff We Supply */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Staff We Supply</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Healthcare Assistants (HCAs)</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Support Workers (SWs)</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Senior HCAs / Senior Support Workers</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Nurses (where appropriate)</li>
            </ul>
            <h5 className="fw-bold text-dark mb-3 mt-4">Key Services</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Emergency cover: rapid response for staff shortages.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Specialist staffing with specific experience.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Longer‑term partnerships.</li>
            </ul>
          </div>

          {/* Who Benefits & How We Deliver It */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Who Benefits</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Care homes, nursing homes, and supported living providers.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Healthcare settings coping with shortages.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Providers aiming to improve quality and compliance.</li>
            </ul>
            <h5 className="fw-bold text-dark mb-3 mt-4">How We Deliver It</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Thorough vetting, DBS checks, and compliance tracking.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Training aligned with current best practice.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Digital‑ready processes for scheduling and reporting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --------------------------------------------------------
// 3. Companionship & Non-Regulated Support Component
// --------------------------------------------------------
const CompanionshipCard = () => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 p-4 border-0 shadow-sm card-service-feature">
      <div className="card-body">
        <Smile size={48} className="text-cp-primary mb-3" />
        <h3 className="card-title fw-bold text-dark mb-1">3. Companionship & Non‑Regulated Support</h3>
        <p className="text-muted fst-italic mb-4">Warm, practical support to reduce loneliness and encourage engagement.</p>

        {/* What This Is */}
        <div className="mb-4">
          <h5 className="fw-bold text-cp-primary">What this is</h5>
          <p className="text-secondary small">Warm, practical, non‑clinical support for adults and older people who need company, routine, or light assistance. This service reduces loneliness, encourages engagement in daily life, and keeps people connected to their communities.</p>
        </div>

        <div className="row g-4">
          {/* Core Activities */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Core Activities</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Social interaction and conversation.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Daily routine support and organisation.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Emotional encouragement and friendly presence.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Safety check‑ins and spotting emerging needs.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Community engagement and accompanying outings.</li>
            </ul>
          </div>

          {/* Who Benefits & How We Deliver It */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Who Benefits</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Older adults living alone who want company.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Adults needing a supportive presence for routine.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Individuals not requiring clinical care but needing consistent support.</li>
            </ul>
            <h5 className="fw-bold text-dark mb-3 mt-4">How We Deliver It</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Flexible booking tailored to interests and lifestyle.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Staff who listen, respect, and maintain boundaries.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Safe, person-centred approach emphasizing dignity.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --------------------------------------------------------
// 4. Online & Face-to-Face Wellbeing Support Component
// --------------------------------------------------------
const WellbeingSupportCard = () => (
  <div className="col-lg-6 mb-4">
    <div className="card h-100 p-4 border-0 shadow-sm card-service-feature">
      <div className="card-body">
        <Compass size={48} className="text-cp-primary mb-3" />
        <h3 className="card-title fw-bold text-dark mb-1">4. Online & Face-to-Face Wellbeing Support</h3>
        <p className="text-muted fst-italic mb-4">Structured, non-clinical support for resilience and life skills.</p>

        {/* What This Is */}
        <div className="mb-4">
          <h5 className="fw-bold text-cp-primary">What this is</h5>
          <p className="text-secondary small">Structured, non-clinical wellbeing support for healthy adults and young people who want help with routines, motivation, life skills, or emotional resilience. This service fills the gap between formal therapy and general conversation.</p>
        </div>

        <div className="row g-4">
          {/* Core Support Areas */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Core Support Areas</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Routine building and accountability.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Motivation and goal setting assistance.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Safe, structured conversations and stress reduction.</li>
              <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className="text-cp-primary me-2 flex-shrink-0" /> Life‑skills development (organisation, time management).</li>
            </ul>
          </div>

          {/* Who Benefits & How We Deliver It */}
          <div className="col-md-6">
            <h5 className="fw-bold text-dark mb-3">Who Benefits</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Young people needing guidance or early‑help emotional support.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Students or adults navigating life changes.</li>
              <li className="d-flex align-items-start mb-2"><UserCheck size={20} className="text-secondary me-2 flex-shrink-0" /> Anyone wanting personal development without a clinical label.</li>
            </ul>
            <h5 className="fw-bold text-dark mb-3 mt-4">How We Deliver It</h5>
            <ul className="list-unstyled small">
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Secure online or locally arranged face‑to‑face sessions.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Professional, trained staff using approved platforms.</li>
              <li className="mb-1"><Shield size={16} className="text-info me-2 flex-shrink-0" /> Flexible session lengths and accessible booking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// --------------------------------------------------------
// Main HCA Component (The Service Page)
// --------------------------------------------------------
const HCA = () => {
  return (
    <>
      <CustomStyles />
      <div>
        {/* Existing Hero Section - Uses the placeholder URL now */}
        <div className='hero-3 text-white text-center'
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${service})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '400px', // Adjusted height for better responsiveness
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='container'>
            <h2 className='display-3 fw-bolder'>Our Care and Wellbeing Services</h2>
          </div>
        </div>

        <div className="container py-5">
            {/* New Introductory Text */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-10 text-center">
                    <h1 className="display-4 fw-bold text-center mb-3">CarePoint Healthcare Solutions</h1>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                        We offer a unified, hybrid ecosystem of care and wellbeing support. Clients,
                        families, care homes, and young people can access one or more of our four core
                        services, delivered safely, flexibly, and with strong safeguarding in every setting.
                    </p>
                </div>
            </div>

            {/* The four service cards displayed in a 2x2 grid on large screens */}
            <div className="row">
                <DomiciliaryCareCard />
                <StaffingAgencyCard />
                <CompanionshipCard />
                <WellbeingSupportCard />
            </div>

            {/* How Services Work Together */}
            <section className='py-5 bg-cp-accent-light rounded-3 shadow-sm mt-5'>
                <div className='p-4'>
                    <h2 className='display-6 fw-bold text-center mb-4'>How Our Services Work Together</h2>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 fs-5 text-secondary'>
                            <p className='fw-semibold'>CarePoint is designed so clients, families, and providers can use one trusted organisation for multiple needs:</p>
                            <ul className='list-unstyled mx-auto'>
                                <li className='mb-2'><CheckCircle size={20} className="text-cp-primary me-2" /> Everyday Support: Domiciliary care or companionship for routine assistance.</li>
                                <li className='mb-2'><CheckCircle size={20} className="text-cp-primary me-2" /> Workforce Reliability: Staffing supply for homes or services that need reliable workers.</li>
                                <li className='mb-2'><CheckCircle size={20} className="text-cp-primary me-2" /> Growth & Resilience: Wellbeing sessions for young people, adults, or families to stay motivated, structured, and supported.</li>
                                <li className='mb-2'><CheckCircle size={20} className="text-cp-primary me-2" /> Hybrid Combinations: Used when a client’s situation changes, ensuring they don’t have to switch providers.</li>
                            </ul>
                            <p className='mt-4 fw-semibold'>This unified structure is built for safety, flexibility, and long-term partnership—with modern systems, strong policy foundations, and a clear focus on people first.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started CTA */}
            <section className='py-5 text-center mt-5'>
                <h2 className='display-6 fw-bold text-dark mb-4'>Getting Started</h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <ol className='list-group list-group-flush text-start'>
                            <li className="list-group-item d-flex align-items-center rounded-3 shadow-sm mb-3 p-3 border border-cp-primary">
                                <span className='fs-5 fw-bold me-3 text-cp-primary'>1.</span>
                                <span className='fs-5'>Contact us to discuss your needs—private, care‑provider, or online wellbeing requirements.</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center rounded-3 shadow-sm mb-3 p-3 border border-cp-primary">
                                <span className='fs-5 fw-bold me-3 text-cp-primary'>2.</span>
                                <span className='fs-5'>Assessment and plan: We agree the best approach, schedule, and support level.</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center rounded-3 shadow-sm mb-3 p-3 border border-cp-primary">
                                <span className='fs-5 fw-bold me-3 text-cp-primary'>3.</span>
                                <span className='fs-5'>Secure, professional delivery: Our team provides the agreed service with care, respect, and professionalism.</span>
                            </li>
                            <li className="list-group-item d-flex align-items-center rounded-3 shadow-sm mb-3 p-3 border border-cp-primary">
                                <span className='fs-5 fw-bold me-3 text-cp-primary'>4.</span>
                                <span className='fs-5'>Review and adapt: We check regularly, update plans, and ensure services remain aligned with goals.</span>
                            </li>
                        </ol>
                        <NavLink to={'/contact'} className='btn btn-lg bg-cp-primary text-white border-0 mt-4 rounded-pill px-5 shadow-lg'>
                            Request a Callback
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>


        {/* Existing Footer Contact Section */}
        <div className='d-md-flex  p-3 p-md-5 '>
          <div className='w-1/2 px-3 d-flex align-items-center justify-content-center'>
            <p className='display-4'>We Listen, We understand, and We Care.</p>
          </div>
          <div className='w-1/2'>
            <img src={careImage} className='w-100 img-fluid rounded-4 shadow-lg mx-auto'/>
          </div>
        </div>

      </div>
    </>
  );
}

export default HCA;