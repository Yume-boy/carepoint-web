
import { Clock, Calendar, Tag, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  // --- Theme Colors ---
  const colorPrimary = '#40BACA'; // Light Cyan/Blue for accents
  const colorAccent = '#2F6F6B'; // Dark Teal/Green for key titles
  const colorText = '#334155'; // Slate Gray for body text
  const colorLightBg = '#f0f9ff'; // Very light blue for subtle section background

  // --- Mock Data ---
  // Mock data structure must include 'content' for the detail view
  const blogPosts = [
    { 
      id: 1, 
      title: "5 Tips for Maintaining Mental Wellness at Home", 
      excerpt: "Simple, effective strategies to boost your mood and maintain focus while managing your home life and responsibilities.",
      category: "Wellbeing", 
      date: "A few weeks ago", // Placeholder date made generic
      readTime: "5 min",
      author: "Jane Doe",
      imagePlaceholder: "https://placehold.co/1200x500/2F6F6B/FFFFFF?text=Mental+Wellness+Tips",
      content: "Mental wellness is paramount. Start by dedicating a specific area in your home to relaxation and self-care. Integrate short mindfulness breaks throughout your day—even five minutes of focused breathing can drastically reduce stress. Ensure your nutrition is balanced, prioritizing whole foods that support cognitive function. Finally, maintain a strict schedule for sleep and work to provide your mind with the structure it craves. Consistent effort in these small areas yields significant long-term mental health benefits. Remember that seeking professional support when needed is a sign of strength, not weakness."
    },
    { 
      id: 3, // Selected post ID for display
      title: "Navigating Staffing Solutions for Healthcare Facilities", 
      excerpt: "A guide for facilities on finding reliable, trained, and compliant staff for urgent and long-term needs.",
      category: "Staffing", 
      date: "Just Published", // Placeholder date made generic
      readTime: "6 min",
      author: "CarePoint Team",
      imagePlaceholder: "https://placehold.co/1200x500/334155/FFFFFF?text=Staffing+Solution+Guide",
      content: "Finding the right healthcare staffing solution is crucial for maintaining quality patient care and operational efficiency. The key lies in partnering with an agency that prioritizes compliance, rigorous background checks, and continuous training. Look for partners who offer flexible contracts, including temporary, permanent, and emergency placements, ensuring coverage during peak times or unexpected shortages. Utilizing a digital platform for scheduling and communication can streamline the process, reducing administrative burden and allowing clinical staff to focus on their primary duties.\n\nA compliant and well-supported workforce is the foundation of a successful healthcare facility. We discuss critical factors like:\n\n1. **Vetting & Compliance:** Ensuring all staff meet CQC standards and regulatory requirements.\n2. **Training Programs:** Investing in continuous professional development (CPD) for specialized care.\n3. **Technology Integration:** Using modern software for rotas and shift management to minimize errors and maximize efficiency.\n\nUltimately, a robust staffing strategy is an investment in patient safety and facility reputation."
    },
    // ... other posts omitted for brevity
  ];

  // --- Mock Routing/ID Retrieval ---
  // Hardcode display to post with ID 3 (related to the user's selection)
  const POST_ID_TO_DISPLAY = 3; 
  const post = blogPosts.find((p) => p.id === POST_ID_TO_DISPLAY);

  if (!post) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        Blog post content not available for display ID {POST_ID_TO_DISPLAY}.
      </div>
    );
  }

  return (
    <div className='blog-details-page font-inter py-5'>
      <style>
        {`
        .blog-details-page {
          color: ${colorText} !important;
          line-height: 1.75 !important;
          /* Ensure text is left-aligned by default for readability, but the *container* is centered */
          text-align: left !important; 
        }
        .back-link {
          transition: color 0.2s !important;
          font-size: 0.95rem !important;
          text-transform: uppercase !important;
          text-decoration: none;
          font-weight: 600;
        }
        .back-link:hover {
          color: ${colorAccent} !important;
        }
        .meta-container {
          background-color: ${colorLightBg} !important;
          border-radius: 0.75rem !important;
          padding: 1rem 2rem !important;
        }
        .meta-item {
          color: ${colorAccent} !important;
          font-weight: 600 !important;
        }
        .post-excerpt {
          border-left: 5px solid ${colorPrimary} !important;
          padding-left: 1.5rem !important;
          font-style: italic !important;
          font-weight: 500 !important;
          color: #1f2937 !important; /* Darker text for quote */
          margin-bottom: 2.5rem !important;
        }
        .post-content p {
          margin-bottom: 1.5rem !important;
        }
        .post-content h2, .post-content h3 {
          color: ${colorAccent} !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .post-content ul {
          list-style: none !important;
          padding-left: 0 !important;
        }
        .post-content ul li {
          margin-bottom: 0.5rem !important;
          padding-left: 1.5rem !important;
          position: relative !important;
          text-align: left !important; /* Ensure list items are left-aligned */
        }
        .post-content ul li:before {
          content: '—' !important;
          position: absolute !important;
          left: 0 !important;
          color: ${colorPrimary} !important;
          font-weight: bold !important;
        }
        /* Style for the author line to ensure it remains right-aligned/justified if needed */
        .author-line {
            width: 100% !important;
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
        }

        .image {
          width: 100%;
          border-radius: 50px 
        }
        `}
      </style>
      
      <div className='container mx-auto w-full px-4 max-w-5xl'>
        
        {/* Back Link */}
        <div className="mb-5">
          <Link href="#" className="back-link flex items-center font-semibold" style={{ color: colorPrimary }}>
            <ArrowLeft size={18} className="mr-2" />
            Back to All Articles
          </Link>
        </div>

        {/* Post Banner Image */}
        <div className="rounded-2xl overflow-hidden image shadow-xl mb-5">
            <img 
                src={post.imagePlaceholder} 
                alt={post.title} 
                className="w-full image object-cover" 
                style={{ height: '300px' }} 
                onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = "https://placehold.co/1200x500/40BACA/FFFFFF?text=Image+Unavailable"; // Fallback
                }}
            />
        </div>

        {/* Post Content Wrapper */}
        {/* Added text-center here to center elements inside this block */}
        <div className='d-flex flex-column align-items-center '>
          
          {/* Title */}
          <h1 className='display-4 fw-bold mb-4 text-center' style={{ color: colorAccent }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="meta-container d-flex justify-content-center gap-6 mb-5 w-full max-w-lg">
            <span className='d-flex align-items-center meta-item'>
                <Calendar size={18} className="mr-2" style={{ color: colorPrimary }} />
                {post.date}
            </span>
            <span className='d-flex align-items-center meta-item'>
                <Clock size={18} className="mr-2" style={{ color: colorPrimary }} />
                {post.readTime}
            </span>
            <span className='d-flex align-items-center meta-item'>
                <Tag size={18} className="mr-2" style={{ color: colorPrimary }} />
                {post.category}
            </span>
          </div>

          {/* Body Content */}
          {/* Added mx-auto to ensure the fixed width container is centered */}
          <div className="post-content w-full max-w-3xl mx-auto">
            {/* Excerpt styled as a quote, text-left applied for readability */}
            <h4 className='post-excerpt text-xl mb-4 text-left'>
                {post.excerpt}
            </h4>
            
            {/* The main content, text-left applied for readability */}
            <p style={{ whiteSpace: 'pre-wrap' }} className="text-lg text-gray-700 text-left">
                {post.content}
            </p>

            <div className="mt-8 pt-4 border-top author-line">
                <User size={20} className="mr-2" style={{ color: colorAccent }} />
                <span className='text-sm font-medium' style={{ color: colorAccent }}>
                    Written by: {post.author}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;