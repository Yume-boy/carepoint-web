import React from 'react';

// Define the brand color for consistency
const brandColorHex = '#40BACA'; // Teal/Cyan

const CustomStyles = () => (
    <style>
      {`
        /* Load Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        body { font-family: 'Inter', sans-serif; }

        .loader-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f8f9fa; /* Light background */
            padding: 40px;
        }

        /* The Heart Shape (using two pseudo-elements and a rotation) */
        .heart-loader {
            position: relative;
            width: 80px;
            height: 80px;
            transform: rotate(-45deg); /* Tilt the square to form the bottom point */
            animation: pulse-beat 1.5s infinite ease-in-out;
            margin-bottom: 20px;
        }

        .heart-loader:before,
        .heart-loader:after {
            content: "";
            position: absolute;
            width: 80px;
            height: 80px;
            border-radius: 50%; /* Makes the rounded top part */
            background: ${brandColorHex};
        }

        .heart-loader:before {
            top: -40px; /* Position the circle above */
            left: 0;
        }

        .heart-loader:after {
            top: 0;
            left: 40px; /* Position the circle to the right */
        }

        /* Keyframe Animation for the Heartbeat/Pulse Effect */
        @keyframes pulse-beat {
            0% {
                transform: scale(0.8) rotate(-45deg);
                opacity: 0.9;
            }
            50% {
                transform: scale(1.1) rotate(-45deg); /* The "beat" */
                opacity: 1;
            }
            100% {
                transform: scale(0.8) rotate(-45deg);
                opacity: 0.9;
            }
        }

        /* Keyframe Animation for the Status Text */
        @keyframes dots {
            0%, 20% { content: '.'; }
            40%, 60% { content: '..'; }
            80%, 100% { content: '...'; }
        }

        .loader-text::after {
            content: '...';
            animation: dots 2s infinite step-start;
        }
      `}
    </style>
);

const Loader = () => {
    return (
        <div className='vh-100'>
            <CustomStyles />
            <div className="loader-container">
                <div className="heart-loader"></div>
                <h2 className="text-dark fw-bold mb-1">
                    Loading
                </h2>
                <p className="lead text-secondary loader-text" style={{ minWidth: '150px' }}>
                    Fetching resources
                </p>
            </div>
        </div>
    );
};

export default Loader;