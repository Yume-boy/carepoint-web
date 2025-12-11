import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// The external dependency '@emailjs/browser' cannot be resolved in this environment.
// It has been replaced by a mock function to simulate submission success/failure 
// and allow the component to compile and run.

import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // --- Configuration ---
  const colorPrimary = '#40BACA'; // Light Cyan/Blue for accents and buttons
  const colorAccent = '#2F6F6B'; // Dark Teal/Green for titles and anchors

  // On mount, capture current time
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleString());
  }, []);

  // --- MOCK API FUNCTION for demonstration ---
  // // Replaces the actual emailjs.sendForm call
  // const mockSendEmail = () => {
  //   return new Promise((resolve, reject) => {
  //     // Simulate network delay
  //     setTimeout(() => {
  //       // 90% chance of success, 10% chance of failure
  //       if (Math.random() > 0.1) { 
  //         resolve({ status: 200, text: 'OK' });
  //       } else {
  //         reject(new Error("Mock network failure."));
  //       }
  //     }, 1500); 
  //   });
  // };

    const sendEmail = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);
    setIsSubmitting(true);

    emailjs.sendForm('service_sj15e9g', 'template_tjpq90v', form.current, 'nVUGVqzeDvOuRKIuG')
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => setError(true));
  };

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   setSuccess(false);
  //   setError(false);
  //   setIsSubmitting(true);

  //   try {
  //       // Use the mock function instead of the external emailjs library
  //       await mockSendEmail(); 
        
  //       setSuccess(true);
  //       form.current.reset();
        
  //       // Clear success message after 5 seconds
  //       setTimeout(() => setSuccess(false), 5000); 

  //   } catch (err) {
  //       console.error("Submission Error:", err);
  //       setError(true);
        
  //       // Clear error message after 5 seconds
  //       setTimeout(() => setError(false), 5000); 

  //   } finally {
  //       setIsSubmitting(false);
  //   }
  // };

  return (
    <div className='contact-page'>
      <style>
        {`
        .contact-page {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          background-color: #f7f9fa; /* Light background */
        }
        .header-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: ${colorAccent};
        }
        .header-subtitle {
          color: ${colorPrimary};
          font-weight: 500;
        }
        .section-divider {
            width: 80px;
            height: 4px;
            background-color: ${colorPrimary};
            margin: 0.5rem auto 2rem auto;
            border-radius: 2px;
        }
        .contact-detail-card {
            border-left: 5px solid ${colorPrimary};
            transition: all 0.3s;
        }
        .contact-detail-card:hover {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
        .form-container {
            border: 1px solid #dee2e6;
            background-color: white;
        }
        
        /* Ensures the input fields inherit Bootstrap styling */
        .form-control {
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
        }
        
        /* Custom border for the contact details section */
        .details-section {
            border-right: 2px solid #e9ecef;
            padding-right: 2rem;
        }
        
        @media (max-width: 992px) {
            .details-section {
                border-right: none;
                padding-right: 0;
                padding-bottom: 1.5rem;
                margin-bottom: 1.5rem;
                border-bottom: 2px solid #e9ecef;
            }
        }
        `}
      </style>

      <div className="container py-5">
        {/* HEADER TEXT */}
        <div className="text-center mb-5 pb-3">
          <h2 className='header-title'>Contact CarePoint Healthcare Solutions Ltd</h2>
          <p className='fs-4 mt-2 header-subtitle'>We’re Here to Help</p>
          <div className="section-divider"></div>
          <p className='fs-5 text-secondary mx-auto' style={{ maxWidth: '800px' }}>
            Whether you’re looking for home care, companionship, wellbeing support, or reliable 
            healthcare staffing, our friendly team is ready to support you. You can reach us by phone, 
            email, or by submitting a message using the form below. We aim to respond to all enquiries promptly.
          </p>
        </div>

        <div className="row g-5">
          {/* CONTACT DETAILS SECTION */}
          <div className="col-12 col-lg-5 details-section">
            <h3 className='fs-3 fw-bold mb-4' style={{ color: colorAccent }}> Our Contact Details</h3>

            <div className="p-3 mb-4 rounded-3 contact-detail-card bg-white shadow-sm">
                <div className="d-flex align-items-center mb-2">
                    <Phone size={24} style={{ color: colorPrimary }} className="me-3" />
                    <strong className='fs-5' style={{ color: colorAccent }}>Phone (24/7 Enquiries)</strong>
                </div>
                <p className='mb-1 ms-4 ps-2 fs-5'>+44 7592 642428</p>
                <p className='mb-0 ms-4 ps-2 fs-5'>+44 7512 499615</p>
            </div>

            <div className="p-3 mb-4 rounded-3 contact-detail-card bg-white shadow-sm">
                <div className="d-flex align-items-center mb-2">
                    <Mail size={24} style={{ color: colorPrimary }} className="me-3" />
                    <strong className='fs-5' style={{ color: colorAccent }}>Email</strong>
                </div>
                <p className='mb-0 ms-4 ps-2 fs-5'>info@carepointhealthcaresolutions.co.uk</p>
            </div>

            <div className="p-3 mb-4 rounded-3 contact-detail-card bg-white shadow-sm">
                <div className="d-flex align-items-center mb-2">
                    <MapPin size={24} style={{ color: colorPrimary }} className="me-3" />
                    <strong className='fs-5' style={{ color: colorAccent }}>Location & Service Area</strong>
                </div>
                <p className='mb-1 ms-4 ps-2 fs-5'>Registered in Chippenham, United Kingdom</p>
                <p className='mb-0 ms-4 ps-2 small text-muted'>
                    Serving: Chippenham, Bath, Bristol, Somerset, Weston-super-Mare, Cleeveden, Frome, Keynsham. (Online wellbeing services available UK-wide)
                </p>
            </div>

          </div>

          {/* FORM SECTION */}
          <div className="col-12 col-lg-7">
            <div className='form-container p-4 p-md-5 rounded-4 shadow-lg'>
                <h3 className='fs-3 fw-bold mb-3' style={{ color: colorAccent }}><MessageSquare size={30} className='me-2' style={{ color: colorAccent }} />Send Us a Message</h3>
                <p className='text-secondary mb-4'>Use the form below to initiate an enquiry. All fields are required.</p>

                <form ref={form} onSubmit={sendEmail}>

                  {/* Name Fields */}
                  <div className='row mb-3'>
                    <div className='col-md-6 mb-3 mb-md-0'>
                        <label className='form-label fw-semibold small' htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" className='form-control' name="first_name" required />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fw-semibold small' htmlFor="last_name">Last Name</label>
                        <input type="text" id="last_name" className='form-control' name="last_name" required />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className='row mb-3'>
                    <div className='col-md-6 mb-3 mb-md-0'>
                        <label className='form-label fw-semibold small' htmlFor="email">Email Address</label>
                        <input type="email" id="email" className='form-control' name="email" required />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label fw-semibold small' htmlFor="phone_no">Phone Number</label>
                        <input type="tel" id="phone_no" className='form-control' name="phone_no" required />
                    </div>
                  </div>

                  {/* SERVICE SELECT */}
                  <div className='mb-3'>
                    <label className='form-label fw-semibold small' htmlFor="service">Service You Are Enquiring About</label>
                    <select id="service" name="service" className='form-select' required>
                      <option value="">-- Select Service --</option>
                      <option value="Domiciliary Care">Domiciliary Care</option>
                      <option value="Companionship Support">Companionship Support</option>
                      <option value="Online/Face-to-Face Wellbeing">Online/Face-to-Face Wellbeing</option>
                      <option value="Healthcare Staffing">Healthcare Staffing</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className='mb-4'>
                    <label className='form-label fw-semibold small' htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" className='form-control' required></textarea>
                  </div>

                  {/* Hidden Field for Current Time */}
                  <input type="hidden" name="time" value={currentTime} />

                  {/* Submit Button */}
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-lg fw-bold px-5 py-2 rounded-pill shadow"
                      style={{ backgroundColor: colorPrimary, color: 'white', transition: 'all 0.3s' }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = colorAccent}
                      onMouseOut={e => e.currentTarget.style.backgroundColor = colorPrimary}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      ) : null}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  {/* Feedback */}
                  {success && (
                    <div className="alert alert-success mt-3 text-center" role="alert">
                      <ShieldCheck size={18} className='me-2' /> Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">
                       Something went wrong. Please check your network and try again.
                    </div>
                  )}
                  
                  {/* Information Disclaimer */}
                  <p className='small text-muted text-center mt-3 mb-0'>
                    Your information is kept confidential in line with our Privacy & Data Protection Policy.
                  </p>

                </form>
            </div>
          </div>
        </div>

        {/* WHAT YOU CAN CONTACT US FOR */}
        <div className='mt-5 pt-4 text-center'>
          <h3 className='fs-3 fw-bold mb-3' style={{ color: colorAccent }}>What You Can Contact Us For</h3>
          <div className="section-divider"></div>
          
          <div className='row g-4 text-start mt-4'>
              <div className="col-md-6 col-lg-3">
                  <h4 className="fs-5 fw-semibold" style={{ color: colorPrimary }}>Domiciliary (Home) Care</h4>
                  <p className="text-secondary small">Enquire about personal care, daily living help, safety checks, and complex care needs.</p>
              </div>
              <div className="col-md-6 col-lg-3">
                  <h4 className="fs-5 fw-semibold" style={{ color: colorPrimary }}>Companionship & Support</h4>
                  <p className="text-secondary small">Friendly visits, emotional encouragement, routine-building, social connection and check-ins.</p>
              </div>
              <div className="col-md-6 col-lg-3">
                  <h4 className="fs-5 fw-semibold" style={{ color: colorPrimary }}>Wellbeing Sessions</h4>
                  <p className="text-secondary small">Structured non-clinical guidance for young people and adults, available online and in-person.</p>
              </div>
              <div className="col-md-6 col-lg-3">
                  <h4 className="fs-5 fw-semibold" style={{ color: colorPrimary }}>Healthcare Staffing</h4>
                  <p className="text-secondary small">Request HCAs, support workers, SHCAs, nurses or emergency shift cover for your organisation.</p>
              </div>
          </div>
        </div>

        {/* OFFICE HOURS AND PROMISE */}
        <div className='mt-5 pt-4 text-center'>
            <h3 className='fs-3 fw-bold mb-3' style={{ color: colorAccent }}><Clock size={30} className='me-2' style={{ color: colorAccent }} />Our Promise & Hours</h3>
            <div className="section-divider"></div>
            
            <div className="row justify-content-center g-4 mt-4">
                <div className="col-md-5">
                    <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                        <h4 className="fs-5 fw-bold mb-3" style={{ color: colorPrimary }}>Office Response Hours</h4>
                        <p className='fs-5 mb-1'>Monday – Friday: 9:00 AM – 6:00 PM</p>
                        <p className='fs-5 mb-1'>Saturday: 10:00 AM – 4:00 PM</p>
                        <p className='fs-5 mb-0'>Sunday: Closed</p>
                        <p className='small text-muted mt-2 fst-italic'>
                            (Staffing partners can reach us 24/7 for emergency cover.)
                        </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="p-4 rounded-4 bg-white shadow-sm h-100">
                        <h4 className="fs-5 fw-bold mb-3" style={{ color: colorPrimary }}>Working With CarePoint</h4>
                        <ul className='list-unstyled text-start mx-auto' style={{ maxWidth: '280px' }}>
                            <li className='mb-2'> Friendly, professional response</li>
                            <li className='mb-2'>Clear understanding of your needs</li>
                            <li className='mb-2'>Honest advice on available options</li>
                            <li className='mb-2'>Transparent pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;