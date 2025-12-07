import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Heart,
  BookOpen,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
  DollarSign,
  Briefcase,
  Users,
  Smile,
  Compass,
  Upload,
  Send,
  Loader2,
  CheckCircle,
  Clock,
  MapPin,
  ClipboardList,
} from 'lucide-react';

// Placeholder for the Hero image (as local imports are not supported here)
const careersHeroUrl = 'https://placehold.co/1920x400/40BACA/ffffff?text=Join+A+Team+That+Cares';

// Define the brand color for Bootstrap
const brandColorHex = '#40BACA'; // Teal/Cyan
const darkCtaBgHex = '#3F4A49'; // Dark Accent

// --- DUMMY DATA FOR JOB LISTINGS ---
const DUMMY_JOB_LISTINGS = [
    {
        id: 'job-001',
        title: 'Senior Domiciliary Carer (Team Lead)',
        category: 'Domiciliary Carer',
        location: 'Central Manchester',
        type: 'Full-Time',
        summary: 'Lead a small team providing complex care packages in clients\' homes. Requires 2+ years experience and level 3 qualification.',
    },
    {
        id: 'job-002',
        title: 'Agency Support Worker - Nights',
        category: 'Healthcare Assistant (HCA) / Support Worker (SW)',
        location: 'Stockport & Oldham Area',
        type: 'Part-Time/Flexible',
        summary: 'Essential night cover shifts in residential care settings. Perfect for experienced agency staff seeking reliable hours.',
    },
    {
        id: 'job-003',
        title: 'Community Companion - Elderly',
        category: 'Companionship Support Worker',
        location: 'South Cheshire',
        type: 'Part-Time',
        summary: 'Provide social engagement, routine support, and check-ins for elderly clients. Emphasis on conversational skills and reliability.',
    },
    {
        id: 'job-004',
        title: 'Wellbeing Practitioner - Remote',
        category: 'Wellbeing Practitioner',
        location: 'Remote (UK Based)',
        type: 'Full-Time',
        summary: 'Deliver non-clinical online wellbeing sessions to young adults and students. Training provided on specific techniques.',
    },
];

const Roles = [
  { id: 1, icon: Briefcase, title: 'Domiciliary Care Staff', position: 'Domiciliary Carer' },
  { id: 2, icon: Users, title: 'Healthcare Assistants & Support Workers (Agency Staffing)', position: 'Healthcare Assistant (HCA) / Support Worker (SW)' },
  { id: 3, icon: Smile, title: 'Companionship & Non-Regulated Support Workers', position: 'Companionship Support Worker' },
  { id: 4, icon: Compass, title: 'Wellbeing Practitioners (Online & Face-to-Face)', position: 'Wellbeing Practitioner' },
  // Adding the "Other" option for the dropdown
  { id: 5, icon: Layers, title: 'Other / General Application', position: 'Other' },
];

const CustomStyles = () => (
    <style>
      {`
        /* Load Bootstrap CSS */
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        /* Load Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        body { font-family: 'Inter', sans-serif; }

        :root {
            --cp-primary: ${brandColorHex};
            --cp-dark: ${darkCtaBgHex};
            --bs-primary: var(--cp-primary);
        }

        .bg-cp-primary { background-color: var(--cp-primary) !important; }
        .text-cp-primary { color: var(--cp-primary) !important; }
        .border-cp-primary { border-color: var(--cp-primary) !important; }
        .btn-cp-primary {
            background-color: var(--cp-primary);
            color: white;
            border-color: var(--cp-primary);
            transition: background-color 0.3s, border-color 0.3s;
        }
        .btn-cp-primary:hover {
            background-color: #349fa8;
            border-color: #349fa8;
            color: white;
        }

        .hero-banner {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${careersHeroUrl}');
          background-size: cover;
          background-position: center;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .text-shadow-custom { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .role-card {
            border-radius: 12px;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05);
        }
      `}
    </style>
);

// --- Component Start ---
const Careers = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const applyFormRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    message: '',
    cvFile: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  // Function to simulate fetching job listings
  const fetchJobs = async () => {
    setLoadingJobs(true);
    // --- Commented out actual API call ---
    try {
      const response = await fetch('https://carepoint-o1yb.onrender.com/jobPosting/get');
      const data = await response.json();
      setJobListings(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobListings(DUMMY_JOB_LISTINGS); // Fallback to dummy data on error
    } finally {
      setLoadingJobs(false);
    }
    
    // --- Dummy Data Simulation ---
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    setJobListings(DUMMY_JOB_LISTINGS);
    setLoadingJobs(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Effect to update form based on selected job
  useEffect(() => {
    const job = jobListings.find(j => j.id === selectedJobId);
    if (job) {
      setFormData(prev => ({
        ...prev,
        position: job.title, // Use the specific job title
        message: `I am applying for the listed position: ${job.title} (${job.location}).`,
      }));
    }
  }, [selectedJobId, jobListings]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  const handleApplyClick = (job) => {
    setSelectedJobId(job.id);
    // Scroll to the application form section
    if (applyFormRef.current) {
        applyFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // --- MOCK API CALL for Application Submission ---
    setTimeout(() => {
      console.log('Application submitted:', formData);
      setIsSubmitting(false);
      
      const success = Math.random() > 0.1; 
      
      if (success) {
        setSubmissionStatus('success');
        setSelectedJobId(null); // Clear selection
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            position: '',
            message: '',
            cvFile: null,
        }); // Clear form
      } else {
        setSubmissionStatus('error');
      }
    }, 2000);
  };

  const statusMessage = submissionStatus === 'success' ? (
    <div className="alert alert-success d-flex align-items-center rounded-3 shadow-sm" role="alert">
        <ShieldCheck size={20} className="me-2 flex-shrink-0" />
        <div>
            Thank you! Your application has been successfully submitted. We will be in touch shortly.
        </div>
    </div>
  ) : submissionStatus === 'error' ? (
    <div className="alert alert-danger d-flex align-items-center rounded-3 shadow-sm" role="alert">
        <Loader2 size={20} className="me-2 flex-shrink-0 animate-spin" />
        <div>
            Submission failed. Please check your details and try again, or email us directly.
        </div>
    </div>
  ) : null;


  return (
    <>
      <CustomStyles />

      <div className="bg-light min-vh-100">
        
        {/* Hero Banner */}
        <div className="hero-banner text-white p-5">
          <div className="container py-5">
            <div className="col-lg-10 mx-auto">
                <h1 className="display-3 fw-bolder mb-3 ">
                Careers at CarePoint Healthcare Solutions Ltd
                </h1>
                <p className="lead fw-light opacity-90">
                Join a team that cares, supports, and makes a real difference.
                </p>
            </div>
          </div>
        </div>

        {/* Introduction and Why Work With Us */}
        <div className="container py-5">
          
          {/* Why Work With Us? (Section 1) */}
          <h2 className={`display-5 fw-bold text-center mb-5 text-cp-primary`}>Why Work With Us?</h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mb-5 pb-5">
            {/* Feature Cards (Heart, BookOpen, ShieldCheck, Calendar, Layers) */}
            <div className="col"><div className="card h-100 p-4 border-0 rounded-4 shadow-sm feature-card"><div className="card-body text-center"><Heart size={40} className={`mx-auto mb-3 text-cp-primary`} /><h3 className="h5 fw-semibold mb-2 text-dark">Supportive, Family-Like Culture</h3><p className="card-text small text-muted">We value kindness, respect, and teamwork, celebrating each employee’s contribution.</p></div></div></div>
            <div className="col"><div className="card h-100 p-4 border-0 rounded-4 shadow-sm feature-card"><div className="card-body text-center"><BookOpen size={40} className={`mx-auto mb-3 text-cp-primary`} /><h3 className="h5 fw-semibold mb-2 text-dark">Ongoing Training & CPD</h3><p className="card-text small text-muted">Mandatory training, CPD, safeguarding updates, and leadership pathway opportunities.</p></div></div></div>
            <div className="col"><div className="card h-100 p-4 border-0 rounded-4 shadow-sm feature-card"><div className="card-body text-center"><ShieldCheck size={40} className={`mx-auto mb-3 text-cp-primary`} /><h3 className="h5 fw-semibold mb-2 text-dark">Professional Standards</h3><p className="card-text small text-muted">Clear policies, structured support, and a reliable management team prioritize safety for all.</p></div></div></div>
            <div className="col"><div className="card h-100 p-4 border-0 rounded-4 shadow-sm feature-card"><div className="card-body text-center"><Calendar size={40} className={`mx-auto mb-3 text-cp-primary`} /><h3 className="h5 fw-semibold mb-2 text-dark">Flexible Working Hours</h3><p className="card-text small text-muted">Choose shifts that suit you, including days, nights, weekends, part-time or full-time options.</p></div></div></div>
            <div className="col"><div className="card h-100 p-4 border-0 rounded-4 shadow-sm feature-card"><div className="card-body text-center"><Layers size={40} className={`mx-auto mb-3 text-cp-primary`} /><h3 className="h5 fw-semibold mb-2 text-dark">Multiple Service Opportunities</h3><p className="card-text small text-muted">Four different service divisions offer greater career flexibility and variety in roles.</p></div></div></div>
          </div>
          
          {/* Current Openings (New Section) */}
          <div className='mb-5 pt-5 pb-5 border-top'>
            <h2 className={`display-5 fw-bold text-center mb-5 text-dark`}>Current Openings</h2>
            {loadingJobs ? (
                <div className="text-center p-5">
                    <Loader2 size={32} className="mx-auto mb-3 text-cp-primary animate-spin" />
                    <p className="lead text-muted">Loading available job listings...</p>
                </div>
            ) : (
                <div className="row g-4 justify-content-center">
                    {jobListings.map((job) => (
                        <div key={job.id} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 rounded-4 shadow-sm p-2 feature-card">
                                <div className="card-body d-flex flex-column">
                                    <h4 className="h5 fw-bold text-dark mb-2">{job.title}</h4>
                                    <div className="d-flex small text-muted mb-3">
                                        <div className="me-3 d-flex align-items-center"><MapPin size={16} className="me-1 text-secondary" /> {job.location}</div>
                                        <div className="d-flex align-items-center"><Clock size={16} className="me-1 text-secondary" /> {job.type}</div>
                                    </div>
                                    <p className="card-text mb-3">{job.summary}</p>
                                    <div className="mt-auto">
                                        {/* <span className="badge rounded-pill text-black  mb-3">{job.category}</span> */}
                                        <button 
                                            onClick={() => handleApplyClick(job)}
                                            className="btn btn-sm btn-cp-primary w-100 fw-semibold rounded-pill"
                                        >
                                            <ClipboardList size={16} className="me-2" />
                                            Apply for this Job
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
          </div>

          {/* Roles We Recruit For (General Categories) */}
          <h2 className={`display-5 fw-bold text-center mb-5 text-dark`}>General Roles Overview</h2>
          <div className="row g-4 mb-5 pb-5">
            {/* Keeping this section for detailed role descriptions */}
            <div className="col-md-6">
                <div className="card h-100 p-4 border-0 role-card bg-white shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                            <Briefcase size={32} className={`me-3 flex-shrink-0 text-cp-primary`} />
                            <h3 className="h4 fw-bold text-dark">Domiciliary Care Staff</h3>
                        </div>
                        <p className="text-secondary mb-3">Support adults and older people in their homes with personal care, medication prompting, meal preparation, mobility support, and daily living activities.</p>
                        <div className="p-3 rounded-3" style={{backgroundColor: '#e6f7ff'}}>
                            <span className="fw-semibold text-dark">Ideal for:</span>
                            <p className="small text-muted mb-0 mt-1">Caring individuals who want to provide meaningful, one-to-one support.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 p-4 border-0 role-card bg-white shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                            <Users size={32} className={`me-3 flex-shrink-0 text-cp-primary`} />
                            <h3 className="h4 fw-bold text-dark">Healthcare Assistants & Support Workers (Agency Staffing)</h3>
                        </div>
                        <p className="text-secondary mb-3">Work in care homes, supported living, residential units and hospitals, assisting with personal care, observations, documentation, and service user support.</p>
                        <div className="p-3 rounded-3" style={{backgroundColor: '#e6f7ff'}}>
                            <span className="fw-semibold text-dark">Ideal for:</span>
                            <p className="small text-muted mb-0 mt-1">Experienced HCAs, SWs, SHCAs, SSWs, and Nurses seeking flexible shifts.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-md-6">
                <div className="card h-100 p-4 border-0 role-card bg-white shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                            <Smile size={32} className={`me-3 flex-shrink-0 text-cp-primary`} />
                            <h3 className="h4 fw-bold text-dark">Companionship & Non-Regulated Support Workers</h3>
                        </div>
                        <p className="text-secondary mb-3">Provide emotional support, routine-building, social engagement, and check-ins for adults or elderly individuals.</p>
                        <div className="p-3 rounded-3" style={{backgroundColor: '#e6f7ff'}}>
                            <span className="fw-semibold text-dark">Ideal for:</span>
                            <p className="small text-muted mb-0 mt-1">Warm, reliable staff who enjoy conversation, routine support, and making clients feel valued.</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="col-md-6">
                <div className="card h-100 p-4 border-0 role-card bg-white shadow-sm">
                    <div className="card-body">
                        <div className="d-flex align-items-start mb-3">
                            <Compass size={32} className={`me-3 flex-shrink-0 text-cp-primary`} />
                            <h3 className="h4 fw-bold text-dark">Wellbeing Practitioners (Online & Face-to-Face)</h3>
                        </div>
                        <p className="text-secondary mb-3">Provide non-clinical wellbeing sessions for young people (13–25), students, and adults needing routine, motivation, or guidance. Training is provided.</p>
                        <div className="p-3 rounded-3" style={{backgroundColor: '#e6f7ff'}}>
                            <span className="fw-semibold text-dark">Ideal for:</span>
                            <p className="small text-muted mb-0 mt-1">Must have excellent communication skills, boundaries, and emotional maturity.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* What We Look For & Benefits */}
          <div className="row g-5 mb-5 pb-5">
            {/* What We Look For */}
            <div className="col-lg-6">
              <h3 className={`h2 fw-bold mb-4 text-cp-primary`}>What We Look For</h3>
              <ul className="list-unstyled space-y-3">
                <li className="d-flex align-items-start mb-2"><Heart size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>A caring and compassionate nature</span></li>
                <li className="d-flex align-items-start mb-2"><BookOpen size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>Strong communication skills</span></li>
                <li className="d-flex align-items-start mb-2"><Users size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>Respect for dignity and diversity</span></li>
                <li className="d-flex align-items-start mb-2"><ShieldCheck size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>Professionalism and reliability</span></li>
                <li className="d-flex align-items-start mb-2"><CheckCircle size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>Commitment to safeguarding adults and young people</span></li>
                <li className="d-flex align-items-start mb-2"><Award size={20} className={`me-3 mt-1 flex-shrink-0 text-cp-primary`} /><span className='fs-5 text-secondary'>A desire to help others</span></li>
              </ul>
              <p className="mt-3 small text-muted fst-italic">
                Experience is valued but not always required — we train and support the right people.
              </p>
            </div>

            {/* Benefits */}
            <div className="col-lg-6">
              <h3 className={`h2 fw-bold mb-4 text-dark`}>Benefits of Working at CarePoint</h3>
              <ul className="list-unstyled space-y-3">
                <li className="d-flex align-items-start mb-2"><DollarSign size={20} className="me-3 mt-1 flex-shrink-0 text-success" /><span className='fs-5 text-secondary'>Competitive pay rates & pension contributions</span></li>
                <li className="d-flex align-items-start mb-2"><Calendar size={20} className="me-3 mt-1 flex-shrink-0 text-success" /><span className='fs-5 text-secondary'>Flexible scheduling and holiday pay</span></li>
                <li className="d-flex align-items-start mb-2"><Briefcase size={20} className="me-3 mt-1 flex-shrink-0 text-success" /><span className='fs-5 text-secondary'>Mileage allowance (where applicable) & Paid training</span></li>
                <li className="d-flex align-items-start mb-2"><Award size={20} className="me-3 mt-1 flex-shrink-0 text-success" /><span className='fs-5 text-secondary'>Opportunities for progression</span></li>
                <li className="d-flex align-items-start mb-2"><Smile size={20} className="me-3 mt-1 flex-shrink-0 text-success" /><span className='fs-5 text-secondary'>Friendly and supportive management & wellbeing resources</span></li>
              </ul>
            </div>
          </div>

          {/* How to Apply Section */}
          <div className="mb-5 p-5 bg-white rounded-4 shadow-lg">
            <h2 className="h2 fw-bold text-center mb-4 text-dark">How to Apply</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4 border-end border-md-2 border-secondary-subtle">
                <span className={`display-3 fw-bolder text-cp-primary`}>1</span>
                <h4 className="h5 fw-semibold mt-2 mb-2">Select Your Role</h4>
                <p className="text-muted small">Choose a specific opening above or select a general role category in the form below.</p>
              </div>
              <div className="col-md-4 border-end border-md-2 border-secondary-subtle">
                <span className={`display-3 fw-bolder text-cp-primary`}>2</span>
                <h4 className="h5 fw-semibold mt-2 mb-2">Interview & Compliance Checks</h4>
                <p className="text-muted small">We arrange an interview, verify documents, run DBS checks, and complete mandatory training.</p>
              </div>
              <div className="col-md-4">
                <span className={`display-3 fw-bolder text-cp-primary`}>3</span>
                <h4 className="h5 fw-semibold mt-2 mb-2">Start Your Journey With Us</h4>
                <p className="text-muted small">Once cleared, you’ll begin receiving shifts or client assignments tailored to your skills and schedule.</p>
              </div>
            </div>
          </div>
          
          {/* Apply Now Form */}
          <div ref={applyFormRef} className="bg-white p-5 rounded-4 shadow-lg col-lg-8 mx-auto">
            <h2 className={`h3 fw-bold text-center mb-4 text-cp-primary`}>Apply Now</h2>
            <p className="text-center text-muted mb-4">
                {selectedJobId ? 
                    <span className="fw-bold text-dark">Applying for: {formData.position}</span> : 
                    'Please fill out the form below to submit your application.'
                }
            </p>

            {statusMessage}

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label small fw-semibold">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-control p-3 rounded-3"
                />
              </div>

              {/* Email Address */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label small fw-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control p-3 rounded-3"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="form-label small fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="form-control p-3 rounded-3"
                />
              </div>

              {/* Position Applying For */}
              <div className="mb-4">
                <label htmlFor="position" className="form-label small fw-semibold">Position You’re Applying For:</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="form-select p-3 rounded-3"
                  // Disable selection if a specific job listing was clicked
                  disabled={!!selectedJobId} 
                >
                  <option value="" disabled>
                    {selectedJobId ? formData.position : 'Select a general role category or apply directly above'}
                  </option>
                  {Roles.map(role => (
                    <option key={role.id} value={role.position}>{role.position}</option>
                  ))}
                  <option value="General Application">General Application</option>
                </select>
                 {!!selectedJobId && (
                     <div className="form-text text-success fw-semibold">
                         Pre-selected from the "Current Openings" list. Clear the form to select a general role.
                     </div>
                 )}
              </div>

              {/* Upload CV */}
              <div className="mb-4">
                <label htmlFor="cvFile" className="form-label small fw-semibold">Upload CV (PDF or DOCX preferred)</label>
                <div className="input-group">
                    <input
                        type="file"
                        id="cvFile"
                        name="cvFile"
                        onChange={handleFileChange}
                        className="form-control"
                        accept=".pdf,.doc,.docx"
                    />
                </div>
                {formData.cvFile && (
                    <div className="mt-2 small text-muted d-flex align-items-center">
                        <Upload size={14} className="me-2" />
                        File Selected: {formData.cvFile.name}
                    </div>
                )}
              </div>

              {/* Tell Us About Yourself */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label small fw-semibold">Tell Us About Yourself</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control p-3 rounded-3"
                  placeholder="e.g., Your relevant experience, availability, or career goals."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-lg btn-cp-primary w-100 d-flex align-items-center justify-content-center fw-bold rounded-3 shadow-sm`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="me-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} className="me-2" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Closing Statement */}
          <div className="mt-5 py-5 px-4 rounded-4 text-center text-white shadow-lg" style={{backgroundColor: darkCtaBgHex}}>
            <h3 className="h2 fw-bold mb-3">Join a Team That Truly Makes a Difference</h3>
            <p className="fs-5 fw-light col-lg-8 mx-auto">
              At CarePoint Healthcare Solutions Ltd, you’re not just filling a role — you’re becoming part of a mission to deliver compassionate care and meaningful support to individuals, families, and communities. We’d love to welcome you to our team. 
            </p>
            <NavLink to={'/contact'} className={`btn btn-lg btn-outline-light mt-4 fw-bold rounded-pill px-5`}>
              Contact Us with Questions
            </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default Careers;