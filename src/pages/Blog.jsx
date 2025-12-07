import React, { Children } from 'react';
import blogPosts from './blogdata'
import { Facebook, Youtube, Linkedin,  Clock } from 'lucide-react';
import PropTypes from "prop-types";

const Blog = () => {
  // --- Theme Colors ---
  const colorPrimary = '#40BACA'; // Light Cyan/Blue for accents (used for background)
  const colorAccent = '#2F6F6B'; // Dark Teal/Green for key titles
  const colorText = '#334155'; // Slate Gray for body text





  // Replacing NavLink with a standard anchor link for 'Read More'
  const ReadMoreLink = ({ to, children }) => (
    <a 
      href={`/blog/${to}`} 
      className='btn btn-outline-primary fw-bold px-4 py-2 mt-3 rounded-pill'
      style={{ 
        borderColor: colorPrimary, 
        color: colorPrimary, 
        transition: 'all 0.3s',
        // Mock hover effect using Tailwind classes in the style object for uniqueness
        '--tw-bg-opacity': '0',
        '--tw-text-opacity': '1',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = colorPrimary;
        e.currentTarget.style.color = 'white';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = colorPrimary;
      }}
    >
      {children}
    </a>
  );

  ReadMoreLink.propTypes = {
    to: PropTypes.elementType.isRequired,
    children: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired
  }

  return (
    <div className='blog-page my-5'>
      <style>
        {`
        .blog-page {
          font-family: 'Inter', sans-serif;
          color: ${colorText};
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: ${colorAccent};
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1.25rem;
          color: ${colorPrimary};
          margin-bottom: 2rem;
        }
        .card-blog {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .card-blog:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .card-header-meta span {
            font-size: 0.85rem;
            color: #64748b;
        }
        .card-category {
            font-weight: 600;
            color: ${colorPrimary};
            background-color: ${colorPrimary}1a; /* Light transparent primary color */
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            text-transform: uppercase;
        }
        .social-link {
            transition: transform 0.2s;
            color: #fff;
        }
        .social-link:hover {
            transform: scale(1.15);
            color: #fff;
        }
        `}
      </style>
      
      <div className='container'>
        <div className='text-center mb-5'>
            <h1 className='section-title'>Our Latest Insights & Articles</h1>
            <p className='section-subtitle'>Empowering you with knowledge on care, wellbeing, and staffing solutions.</p>
        </div>

        <div className='row g-4'>
          {blogPosts.map((post) => (
            <div key={post.id} className='col-12 col-md-6 col-lg-3 d-flex'>
              <div className='card-blog rounded-xl overflow-hidden shadow-lg w-100 d-flex flex-column'>
                
                {/* Image Placeholder */}
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-100 object-cover" 
                    style={{ height: '200px' }} 
                    onError={(e) => {
                        e.target.onerror = null; // Prevents infinite loop
                        e.target.src = "https://placehold.co/600x400/40BACA/FFFFFF?text=Image+Unavailable"; // Fallback
                    }}
                />

                <div className='p-4 d-flex flex-column flex-grow-1'>
                    {/* Meta Data */}
                    <div className='d-flex justify-content-between align-items-center mb-3 card-header-meta'>
                        <span className='card-category'>{post.category}</span>
                        <div className='d-flex align-items-center gap-3'>
                            <span className='d-flex align-items-center'>
                                <Clock size={14} className="me-1" style={{ color: colorPrimary }} />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h2 className='fs-5 fw-bold mb-3' style={{ color: colorAccent }}>{post.title}</h2>
                    <p className='text-muted small flex-grow-1'>{post.excerpt}</p>

                    {/* Footer Meta and Link */}
                    <div className='mt-3 pt-3 border-top d-flex justify-content-between align-items-center'>
                        <span className='small text-secondary'>
                            Published: {post.date}
                        </span>
                        <ReadMoreLink to={post.id}>Read More</ReadMoreLink>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className='mt-5 text-center py-5' style={{backgroundColor: colorAccent}}>
        <h3 className='text-white fw-bold mb-4'>Connect With Us on Social Media</h3>
        <p className='text-white-50 mx-auto' style={{ maxWidth: '600px' }}>
            Follow our journey for daily tips on wellbeing, company updates, and career opportunities.
        </p>
        <div className='d-flex justify-content-center gap-5 mt-4'>
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/share/1EaGtVDHNG/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className='social-link'
            aria-label="Visit us on Facebook"
          >
            <Facebook size={40} color={'#fff'} />
          </a>

          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/channel/UC2RQzGjBZBaH7l2PjlRENKQ"
            target="_blank"
            rel="noopener noreferrer"
            className='social-link'
            aria-label="Visit us on YouTube"
          >
            <Youtube size={40} color={'#fff'} />
          </a>
          
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/company/carepointhealthcaresolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className='social-link'
            aria-label="Visit us on LinkedIn"
          >
            <Linkedin size={40} color={'#fff'} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;