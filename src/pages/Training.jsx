import React from 'react'
import about from './training.jpg'
import { NavLink } from 'react-router-dom'
import { Check } from 'lucide-react'
import dev from './dev.png'

const Nurses = () => {
  return (
    <div>
      <div className=' hero-2 text-white text-center'
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          }}>
          <div className='container'>
            <h2 className='mt-5'>Training & <span style={{color: '#40BACA'}}>Development</span></h2>
            <h3 className='my-4'>Investing in our talented Team of Healthcare Professionals</h3>
            <NavLink to='/contact'>
            <button type="button" class="btn text-white my-3" style={{backgroundColor: '#40BACA', height: '50px', width: '150px'}}>CONTACT US</button>
            </NavLink>
          </div>
        </div> 

        <div className='py-5' style={{backgroundColor: '#F7F7F7'}}>
            <div class="container  d-flex flex-column align-items-center my-3">
              <img src={dev} alt="" height={'100px'} style={{borderRadius:'50%'}}/>
              <h3 className='display-5'>Training and Development</h3>
              <div className='line mt-3'></div>
              <div className='w-75'>
                <h4 className='my-4 lh-lg'>Every CarePoint Professional completes a thorough training program aimed at elevating the knowledge and skills of our entire team to the highest standards. All training is fully accredited, renewed annually, and covers the following:</h4>
              </div>
            </div>
        </div>

        <div className=' container  d-flex flex-column align-items-center my-5'>
          <h3 className='display-5'>Investing in you</h3>
          <div className='line mt-3'></div>
          <div className='container my-5'>
          <div className='row align-items-center '>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center  '>
              <ul className='list-unstyled' style={{color: '#9b9b9b'}}>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>       
                Health & Safety at Work
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                COSHH
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                RIDDOR
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Dementia Awareness
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Medication Awareness and Dosage Calculation for Nurses
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Equality, Diversity & Inclusion
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Safeguarding of Vulnerable Adults
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Manual Handling
                </li>
              </ul>

            </div>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center '>
              <ul className='list-unstyled'  style={{color: '#9b9b9b'}}>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>              
                Mental Health & Learning Disability Awareness
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Food Safety
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Basic Life Support
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Medication Awareness and Record Keeping for Care Workers
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Complaint Training & Conflict Resolution
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Caldicott Protocols
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Handling of Violence & Aggression
                </li>
                <li className=' my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Infection Control Lone Worker & Personal Safety
                </li>
              </ul>

            </div>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center flex-column py-5' style={{backgroundColor: '#F7F7F7'}}>
          <div className='w-75 d-flex align-items-center flex-column'>
          <h2 className='fs-3 mt-5 text-center lh-lg'>If this resonates with who you are and what you seek in a career, then exploring a recruitment path with CarePoint could be your ideal opportunity. </h2>
          <h3 className='mt-5 fs-3'>For further information, please do not hesitate to contact us today.</h3>
          <NavLink to='/contact' className={'my-5'}>
          <button type="button" class="btn text-white my-3" style={{backgroundColor: '#40BACA', height: '80px', width: '150px'}}>CONTACT US</button>
          </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Nurses
