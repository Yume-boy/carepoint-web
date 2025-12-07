import React, { useState } from 'react';
import {
  HelpCircle,
  Users,
  Smile,
  Globe,
  DollarSign,
  ShieldCheck,
  Home,
  Clock,
  MapPin,
  ClipboardList,
} from 'lucide-react';
import PropTypes from "prop-types";

// Define the brand color for Bootstrap
const brandColorHex = '#40BACA'; // Teal/Cyan
const darkCtaBgHex = '#3F4A49'; // Dark Accent

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
        .accordion-button:not(.collapsed) {
            color: white;
            background-color: var(--cp-primary);
            box-shadow: none;
        }
        .accordion-button:not(.collapsed)::after {
            filter: brightness(0) invert(1); /* Makes the arrow white */
        }
        .accordion-item {
            border: 1px solid rgba(0, 0, 0, 0.125);
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
        }
      `}
    </style>
);

const faqData = [
  {
    id: 'general',
    title: 'General Questions',
    icon: HelpCircle,
    qas: [
      {
        q: 'What services does CarePoint Healthcare Solutions Ltd provide?',
        a: `We offer four integrated services:
            <ul>
                <li>Domiciliary (Home) Care</li>
                <li>Healthcare Staffing for care homes & providers</li>
                <li>Companionship & non-regulated support</li>
                <li>Online and in-person wellbeing sessions for adults and young people</li>
            </ul>
            This unified model allows families and care providers to access multiple services from one trusted organisation.`,
      },
      {
        q: 'Which areas do you cover?',
        a: `We currently serve:
            <ul>
                <li>Bath (base)</li>
                <li>Bristol</li>
                <li>Somerset</li>
                <li>Weston-super-Mare</li>
                <li>Cleeveden</li>
                <li>Frome</li>
                <li>Keynsham</li>
            </ul>
            Online Wellbeing Services are available UK-wide, including Birmingham, Coventry, Manchester, and London.`,
      },
      {
        q: 'Are you registered with the CQC?',
        a: `We operate regulated services that require CQC registration (domiciliary care). Other services such as companionship, staffing, and digital wellbeing are not CQC-regulated, but follow strict safeguarding and quality standards. We will update our website as soon as our full registration is completed.`,
      },
      {
        q: 'What makes CarePoint different from other care providers?',
        a: `We offer a four-in-one hybrid model:
            <ul>
                <li>Traditional home care</li>
                <li>Staffing services</li>
                <li>Companionship support</li>
                <li>Digital wellbeing for youth & adults</li>
            </ul>
            We combine strong safeguarding, innovation, and modern digital tools with a compassionate, person-centred approach.`,
      },
    ],
  },
  {
    id: 'domiciliary',
    title: 'Domiciliary (Home) Care',
    icon: Home,
    qas: [
      {
        q: 'What types of home care do you provide?',
        a: `We provide:
            <ul>
                <li>Personal care</li>
                <li>Mobility support</li>
                <li>Medication prompting</li>
                <li>Meal preparation</li>
                <li>Light domestic support</li>
                <li>Safety and welfare checks</li>
                <li>Daily living assistance</li>
            </ul>
            We create a personalised plan tailored to each client’s needs.`,
      },
      {
        q: 'How do you assess a client’s needs?',
        a: `A CarePoint coordinator visits the client at home (or via video), completes a full assessment, discusses goals, risks, and preferences, and builds a personalised care plan.`,
      },
      {
        q: 'Can care be provided temporarily or on a long-term basis?',
        a: `Yes — we offer:
            <ul>
                <li>Short-term support</li>
                <li>Long-term ongoing care</li>
                <li>Post-hospital recovery packages</li>
                <li>Respite support for families</li>
            </ul>`,
      },
      {
        q: 'Are your carers trained and DBS-checked?',
        a: `Yes. All staff undergo:
            <ul>
                <li>Enhanced DBS checks</li>
                <li>Mandatory training</li>
                <li>Safeguarding training</li>
                <li>Professional development</li>
                <li>Ongoing supervision</li>
            </ul>`,
      },
    ],
  },
  {
    id: 'companionship',
    title: 'Companionship & Non-Regulated Support',
    icon: Smile,
    qas: [
      {
        q: 'What is companionship care?',
        a: `Companionship includes:
            <ul>
                <li>Social visits</li>
                <li>Emotional support</li>
                <li>Routine-building</li>
                <li>Check-ins</li>
                <li>Light domestic help</li>
                <li>Support with hobbies or activities</li>
                <li>Accompanied outings</li>
            </ul>
            It is ideal for adults or older people who feel isolated or need extra encouragement.`,
      },
      {
        q: 'Is companionship regulated by the CQC?',
        a: `No — companionship is a non-regulated service, but CarePoint still applies high safeguarding and quality standards.`,
      },
    ],
  },
  {
    id: 'staffing',
    title: 'Healthcare Staffing Services',
    icon: Users,
    qas: [
      {
        q: 'What staffing roles do you provide?',
        a: `We supply:
            <ul>
                <li>HCAs</li>
                <li>Support Workers</li>
                <li>Senior HCAs / SHCAs</li>
                <li>Senior Support Workers</li>
                <li>Nurses (RGNs / RMNs)</li>
            </ul>`,
      },
      {
        q: 'Do you offer emergency or last-minute staffing cover?',
        a: `Yes — we provide 24/7 emergency staffing for care homes, supported living, and residential services.`,
      },
      {
        q: 'How do care providers book staff?',
        a: `Care homes can contact us by phone or email. We also offer digital scheduling systems and rapid response options.`,
      },
    ],
  },
  {
    id: 'wellbeing',
    title: 'Online & In-Person Wellbeing Support',
    icon: Globe,
    qas: [
      {
        q: 'What is non-clinical wellbeing support?',
        a: `Our wellbeing practitioners offer structured, safe conversations and guidance on:
            <ul>
                <li>Motivation</li>
                <li>Routine</li>
                <li>Stress reduction</li>
                <li>Goal-setting</li>
                <li>Life skills</li>
                <li>Study habits</li>
                <li>Accountability</li>
            </ul>
            This service is not therapy, but early-help lifestyle support.`,
      },
      {
        q: 'Who can access wellbeing sessions?',
        a: `<ul>
                <li>Young people aged 13–25</li>
                <li>University students</li>
                <li>Adults needing structure or motivation</li>
                <li>Individuals wanting personal growth</li>
                <li>Families seeking safe guidance for young people</li>
            </ul>`,
      },
      {
        q: 'Are wellbeing sessions confidential?',
        a: `Yes. All sessions follow:
            <ul>
                <li>Data protection standards</li>
                <li>Online safeguarding</li>
                <li>Youth safeguarding protocols</li>
                <li>Professional boundaries</li>
            </ul>
            Parents/guardians may have limited oversight for minors.`,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing & Payment',
    icon: DollarSign,
    qas: [
      {
        q: 'How much do your services cost?',
        a: `Pricing depends on:
            <ul>
                <li>Service type</li>
                <li>Duration</li>
                <li>Location</li>
                <li>Complexity of needs</li>
                <li>Time of day (evening/weekend rates)</li>
            </ul>
            A full breakdown is provided during your consultation.`,
      },
      {
        q: 'Do you accept Local Authority funding?',
        a: `Yes — once regulated by the CQC, we will be able to accept Local Authority funded care packages. Private clients can begin services immediately.`,
      },
    ],
  },
  {
    id: 'safeguarding',
    title: 'Safeguarding & Policies',
    icon: ShieldCheck,
    qas: [
      {
        q: 'How do you ensure client safety?',
        a: `We follow strict safeguarding procedures for adults and children, including:
            <ul>
                <li>DBS checks</li>
                <li>Training</li>
                <li>Lone working policies</li>
                <li>Online safeguarding measures</li>
                <li>Reporting and escalation procedures</li>
                <li>Clear boundaries</li>
            </ul>
            Your safety is our highest priority.`,
      },
      {
        q: 'Where can I find your policies?',
        a: `We provide a Policies section on our website, including:
            <ul>
                <li>Safeguarding (Adult & Child)</li>
                <li>Privacy Policy</li>
                <li>Complaints Procedure</li>
                <li>Data Protection</li>
                <li>Terms of Use</li>
            </ul>
            Additional documents available upon request.`,
      },
    ],
  },
];

const FAQs = () => {
    // State to manage which category section is currently open (for the outer accordion structure)
    const [openCategory, setOpenCategory] = useState(faqData[0].id);

    const toggleCategory = (id) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    // Helper component to render the Q&A text content safely



    const HtmlContent = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

    HtmlContent.propTypes = {
      html: PropTypes.string.isRequired,
    };

    return (
        <>
            <CustomStyles />
            <div className="bg-light min-vh-100 py-5">
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-5 pb-3">
                        <HelpCircle size={48} className={`mx-auto mb-3 text-cp-primary`} />
                        <h1 className="display-4 fw-bolder text-dark">
                            Frequently Asked Questions
                        </h1>
                        <p className="lead text-secondary mt-3 col-lg-8 mx-auto">
                            Here you’ll find quick answers to the most common questions about our services, staff, pricing, and policies.
                        </p>
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mb-5 pb-4">
                        <p className="fs-5 text-dark fw-semibold">If you need personalised support, please contact us directly — we’re always happy to help.</p>
                        <div className="d-flex justify-content-center flex-wrap gap-3">
                            <a href="tel:+447592642428" className="btn btn-lg btn-cp-primary fw-bold rounded-pill shadow-sm d-flex align-items-center">
                                <Clock size={20} className="me-2" /> Call Us: +44 7592 642428
                            </a>
                            <a href="mailto:info@carepointhealthcaresolutions.co.uk" className="btn btn-lg btn-outline-dark fw-bold rounded-pill shadow-sm d-flex align-items-center">
                                <ClipboardList size={20} className="me-2" /> Email Us
                            </a>
                        </div>
                    </div>


                    {/* FAQ Content - Accordion Structure */}
                    <div className="accordion" id="faqAccordion">
                        {faqData.map((category) => (
                            <div key={category.id} className="accordion-item mb-4 rounded-4 shadow-sm">
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button fs-4 fw-bold rounded-top-4 ${openCategory === category.id ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => toggleCategory(category.id)}
                                        aria-expanded={openCategory === category.id}
                                        aria-controls={`collapse-${category.id}`}
                                    >
                                        <category.icon size={24} className="me-3" />
                                        {category.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse-${category.id}`}
                                    className={`accordion-collapse collapse ${openCategory === category.id ? 'show' : ''}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body p-4 p-md-5">
                                        <div className="accordion" id={`subAccordion-${category.id}`}>
                                            {category.qas.map((qa, index) => (
                                                <div key={index} className="accordion-item mb-3 rounded-3">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className={`accordion-button fw-semibold ${index === 0 ? '' : 'collapsed'}`} // Keep first item open by default in sub-accordion
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse-q-${category.id}-${index}`}
                                                            aria-expanded={index === 0}
                                                            aria-controls={`collapse-q-${category.id}-${index}`}
                                                        >
                                                            {qa.q}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`collapse-q-${category.id}-${index}`}
                                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                        data-bs-parent={`#subAccordion-${category.id}`}
                                                    >
                                                        <div className="accordion-body text-secondary">
                                                            <HtmlContent html={qa.a} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Footer */}
                     <div className="mt-5 pt-4 text-center border-top border-secondary-subtle">
                        <h4 className="fw-bold mb-3">Still Have Questions?</h4>
                        <p className="text-muted">Our friendly team is ready to assist you with any further inquiries.</p>
                        <p className="fs-5 fw-bold text-dark">
                            <span className="me-4 d-inline-block"><Clock size={20} className="text-cp-primary me-1" /> Mon - Fri, 9am - 5pm</span>
                            <span className="d-inline-block"><MapPin size={20} className="text-cp-primary me-1" /> Bath, UK</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default FAQs;