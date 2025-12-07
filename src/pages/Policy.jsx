import React from 'react';
import {
  ShieldCheck,
  Users,
  ClipboardCheck,
  Globe,
} from "lucide-react";

const Policy = () => {
  // Theme Colors (for reference)
  const colorPrimary = '#40BACA'; 
  const colorAccent = '#2F6F6B'; 
  const colorText = '#334155'; 

  return (
    <div className="policy-page font-inter">
      <style>
        {`
        /* --- General Styles --- */
        .policy-page {
          color: ${colorText} !important;
        }
        .line {
          width: 80px !important;
          height: 4px !important;
          background-color: ${colorPrimary} !important;
          border-radius: 2px !important;
        }
        .width-75 {
          max-width: 750px !important; /* Custom class for max width in intro */
        }

        /* --- HERO SECTION --- */
        .hero-banner {
            background: linear-gradient(
                rgba(69, 112, 112, 0.86),
                rgba(44, 50, 51, 0.74)
                ),
                url("https://images.pexels.com/photos/5327929/pexels-photo-5327929.jpeg") !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            height: 400px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }


        /* --- SECTION BACKGROUNDS --- */
        .intro-section-bg {
          background-color: #F7F9F9 !important;
        }
        .meaning-section-bg {
          background-color: #EEF3F3 !important;
        }
        .cta-section-bg {
          background-color: #DCD9D0 !important;
        }

        /* --- POLICY CARDS --- */
        .policy-card {
            border-radius: 12px !important;
            border: 1px solid #e2e8f0 !important; /* Subtle border */
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .policy-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }
        .card-border-highlight {
            border-left: 6px solid ${colorPrimary} !important;
        }
        .policy-card h4 {
            color: ${colorAccent} !important;
        }

        /* --- CTA BUTTON --- */
        .cta-btn {
          background-color: ${colorPrimary} !important;
          height: 60px !important;
          width: 180px !important;
          font-weight: 600 !important;
          border: none !important;
          transition: background-color 0.3s !important;
        }
        .cta-btn:hover {
            background-color: ${colorAccent} !important;
        }
        `}
      </style>

      {/* HERO */}
      <div className="hero-banner text-white text-center">
        <div className="container">
          <h2 className="mt-5 fw-semibold display-4">Policies & Compliance</h2>
          <p className="fs-5 mt-3">
            Ensuring safety, trust, and professional excellence across all services.
          </p>
        </div>
      </div>

      {/* INTRO */}
      <section className="py-5 intro-section-bg">
        <div className="container text-center">
          <h3 className="fs-1 fw-semibold">Our Commitment to Safety & Quality</h3>
          <div className="line mx-auto mt-3"></div>
          <p className="fs-5 mt-4 width-75 mx-auto">
            CarePoint Healthcare Solutions Ltd is guided by over 38 safeguarding, quality and
            operational policies. Each policy ensures safety, professionalism and transparency
            for clients, families, young people, staff and partner organisations.
          </p>
        </div>
      </section>

      {/* POLICY GROUPS */}
      <section className="py-5">
        <div className="container">
          <h3 className="fs-2 fw-semibold text-center mb-5">Policy Groups</h3>

          <div className="row">

            {/* Group 1 – Safeguarding */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm policy-card card-border-highlight h-100">
                <ShieldCheck size={40} color={colorPrimary} className="mb-3" />
                <h4 className="fw-semibold">Policy Group 1: Safeguarding & Protection</h4>
                <p className="fs-6 mt-3 text-secondary">
                  1. Adult Safeguarding Policy <br />
                  2. Child Safeguarding & Protection Policy <br />
                  3. Online Safeguarding & Digital Safety Policy <br />
                  4. Professional Boundaries Policy <br />
                  5. Behaviour Support & Positive Engagement Policy <br />
                  6. Whistleblowing Policy <br />
                  7. Prevent Duty & Radicalisation Awareness Policy <br />
                  8. Safer Recruitment Policy
                </p>
              </div>
            </div>

            {/* Group 2 – Quality & Care */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm policy-card card-border-highlight h-100">
                <ClipboardCheck size={40} color={colorPrimary} className="mb-3" />
                <h4 className="fw-semibold">Policy Group 2: Quality, Service Delivery & Care Practice</h4>
                <p className="fs-6 mt-3 text-secondary">
                  9. Domiciliary Care & Personal Care Policy <br />
                  10. Medication Management Policy <br />
                  11. Moving & Handling Policy <br />
                  12. Infection Control & Hygiene Policy <br />
                  13. Nutrition, Fluids & Meal Preparation Policy <br />
                  14. Risk Assessment Policy <br />
                  15. Lone Working Policy <br />
                  16. Visiting & Home Access Policy <br />
                  17. Complaints & Feedback Policy <br />
                  18. Service User Rights & Responsibilities Policy
                </p>
              </div>
            </div>

            {/* Group 3 – Digital & Wellbeing */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm policy-card card-border-highlight h-100">
                <Globe size={40} color={colorPrimary} className="mb-3" />
                <h4 className="fw-semibold">
                  Policy Group 3: Digital & Wellbeing Services (Youth & Adults)
                </h4>
                <p className="fs-6 mt-3 text-secondary">
                  19. Online Wellbeing Support Service Policy <br />
                  20. Youth Support & Early-Help Practice Policy <br />
                  21. Session Recording, Documentation & Note-Taking Policy <br />
                  22. Parental Involvement & Consent Policy (Under 18s) <br />
                  23. Confidentiality for Digital Sessions Policy <br />
                  24. Escalation & Emergency Procedures <br />
                  25. Professional Communication & Messaging Policy <br />
                  26. Data Safety for Online Sessions Policy
                </p>
              </div>
            </div>

            {/* Group 4 – Staffing & Workforce */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 bg-white shadow-sm policy-card card-border-highlight h-100">
                <Users size={40} color={colorPrimary} className="mb-3" />
                <h4 className="fw-semibold">
                  Policy Group 4: Staffing & Workforce Management
                </h4>
                <p className="fs-6 mt-3 text-secondary">
                  27. Staff Code of Conduct <br />
                  28. Agency Worker Deployment Policy <br />
                  29. Training, Induction & Development Policy <br />
                  30. Supervision & Appraisal Policy <br />
                  31. Staff Attendance, Punctuality & Conduct Policy <br />
                  32. Health & Safety at Work Policy <br />
                  33. Equality, Diversity & Inclusion Policy <br />
                  34. Data Protection (GDPR) Policy <br />
                  35. Records Management & Documentation Policy <br />
                  36. Incident & Accident Reporting Policy <br />
                  37. Duty of Candour Policy <br />
                  38. Business Continuity & Emergency Planning Policy
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT THESE POLICIES MEAN */}
      <section className="py-5 meaning-section-bg">
        <div className="container">
          <h3 className="fs-2 fw-semibold text-center">What These Policies Mean for You</h3>
          <div className="line mx-auto mt-3"></div>

          <div className="row mt-5">
            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="fw-semibold" style={{ color: colorAccent }}>For Clients & Families</h5>
              <p className="fs-6">
                Strong safety, professionalism and reliable care practices guide our service.
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="fw-semibold" style={{ color: colorAccent }}>For Young People & Parents</h5>
              <p className="fs-6">
                Online wellbeing support is delivered with confidentiality, safeguarding and boundaries.
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="fw-semibold" style={{ color: colorAccent }}>For Care Homes & Providers</h5>
              <p className="fs-6">
                Trained and compliant staff supported by clear deployment and documentation policies.
              </p>
            </div>

            <div className="col-md-6 col-lg-3 mb-4">
              <h5 className="fw-semibold" style={{ color: colorAccent }}>For Staff & Practitioners</h5>
              <p className="fs-6">
                Clear expectations, supervision and guidelines for safe and confident working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fs-2 fw-semibold">Commitment to Transparency</h3>
          <div className="line mx-auto mt-3"></div>

          <p className="fs-5 mt-3 width-75 mx-auto">
            Clients, families and partners may request copies of any policy at any time.
            Our policies are reviewed regularly and aligned with:
            <br /><br />
            {/* Added styling to the bullet points for emphasis */}
            <ul className="list-unstyled text-start mx-auto" style={{maxWidth: '450px'}}>
                <li><strong style={{color: colorAccent}}>•</strong> UK legislation</li>
                <li><strong style={{color: colorAccent}}>•</strong> Safeguarding standards</li>
                <li><strong style={{color: colorAccent}}>•</strong> CQC expectations</li>
                <li><strong style={{color: colorAccent}}>•</strong> Data protection laws</li>
                <li><strong style={{color: colorAccent}}>•</strong> Industry best practice</li>
                <li><strong style={{color: colorAccent}}>•</strong> Digital safety guidelines</li>
            </ul>
          </p>
        </div>
      </section>

      {/* REQUEST POLICIES CTA */}
      <div
        className="d-flex align-items-center flex-column py-5 cta-section-bg"
      >
        <h2 className="fw-semibold text-center" style={{ color: colorAccent }}> Request Specific Policies</h2>
        <p className="text-center fs-5 mt-2 width-75 mx-auto">
          To request access to any policy, email:
          <br />
          <strong>info@carepointhealthcaresolutions.co.uk</strong>
          <br />
          We provide full transparency to clients, families, care homes, local authorities and regulators.
        </p>

        <button
          className="btn text-white mt-3 cta-btn"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Policy;