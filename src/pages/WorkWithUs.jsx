import React from 'react'
import about from './workWithUs.jpg'
import { NavLink } from 'react-router-dom'
import {  UserRoundCheck, ShoppingBag, Stethoscope,Check  } from 'lucide-react'

const WorkWithUs = () => {
  return (
    <div className='workWith'>
      <div className='hero-2 text-white text-center'
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          }}>
          <div className='container'>
            <h2 className='mt-5'>Work With CarePointHealthcareSolutions</h2>
            <p className='fs-4 '>Join our Talented Recruitment Team and enjoy the highest commission rate in the market with unlimited earning potential</p>
            <NavLink to='/contact'>
          <button type="button" class="btn text-white my-3" style={{backgroundColor: '#40BACA', height: '50px', width: '150px'}}>CONTACT US</button>
          </NavLink>
          </div>
        </div> 

        <div className='container my-5'>
            <div class=" d-flex flex-column align-items-center">
              <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-5.png" alt="" />
              <h3 className='display-5'>Work With CarePoint</h3>
              <div className='line mt-3'></div>
              <div className='w-75'>
                <h4 className='my-4 fs-5 '>CarePointHealthcareSolutions regularly recruits for care positions across North East and South West Somerset and our other service areas. Staff choose the hours that suit them, with varied and rewarding work helping others.</h4>
                <h4 className='fs-5 '>We will give you the flexibility to manage your own market along with the training and support to develop your career and to maximise your career and earning potential.</h4>
              </div>
            </div>
        </div>

        <section className='no2 container'>
          <img src="https://cvbhealthcare.co.uk///wp-content/uploads/2015/12/icon-6.png" alt="" />
            <h3>CarePointHealthcareSolutions</h3>
            <div className='line mt-3'></div>
            <h4 className='mt-4'>As a leading healthcare recruitment specialist we can provide both temporary and permanent solutions</h4>
        </section>

        <div className='container my-5'>
          <div className='row align-items-center '>
            <div className='col-12 col-md-4 d-flex flex-column align-items-center  '>
              <div className='p-4 text-center rounded-circle text-white my-4' style={{backgroundColor: '#40BACA', width: '100px'}}>
                <UserRoundCheck size={50}/>
              </div>
              <ul>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Passionate, Driven and Ambitious?
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Looking for limitless income potential?
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Wanting to be key part of an elite team?
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Looking for career growth
                </li>
              </ul>

            </div>
            <div className='col-12 col-md-4 d-flex flex-column align-items-center '>
              <div className='p-4 text-center rounded-circle text-white my-4' style={{backgroundColor: '#40BACA', width: '100px'}}>
                <ShoppingBag size={50}/>
              </div>
              <ul>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Execellent Pay Rates
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Flexible Shift Patterns
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Flexible Working Hours
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Career Progression Opportunities
                </li>
              </ul>

            </div>
            <div className='col-12 col-md-4 d-flex flex-column align-items-center '>
              <div className='p-4 text-center rounded-circle text-white my-4' style={{backgroundColor: '#40BACA', width: '100px'}}>
                <Stethoscope size={50}/>
              </div>
              <ul>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Shift Placement Officers
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Recruitment Consultants?
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Business Development Managers
                </li>
                <li className='fw-normal my-2'><Check size={16}  className='p-2 rounded-circle me-2 text-white' style={{backgroundColor: '#40BACA', width: '30px', height: '30px'}}/>
                Resourcers
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className='my-5 py-5' style={{backgroundColor: '#F7F7F7'}}>
          <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center fs-2 mb-5 '>If this describes you and what you are looking for then a career in recruitment with CarePointHealthcareSolutions could be for you.</h2>
            <h3>Flexible hours to suit your lifestyle, including night shifts as well as full and part time hours.</h3>
            <NavLink to='/contact'>
            <button type="button" class="btn text-white my-5" style={{backgroundColor: '#40BACA', height: '50px', width: '150px'}}>CONTACT US</button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default WorkWithUs
