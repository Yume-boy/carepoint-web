import React from 'react'
import team1 from './team1.jpeg'
import team2 from './team2.jpg'
import team3 from './team3.jpg'
import team from './team.avif'
import { NavLink } from 'react-router-dom'

const Training = () => {
  return (
    <div>
      <div className='hero-4 text-white text-center'
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${team})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          }}>
          <div className='container d-flex justify-content-center'>
            <h2 className='mt-5 w-75 '>Find the therapist that best suits your needs.</h2>
          </div>
        </div> 

        <div className='container my-5 py-3'>
          <h2 className='text-center'>Our Team</h2>
          <div class="row  align-items-start my-5" style={{height: '500px', width: '100%'}}>
            <div class=" order-last col-12 col-lg-6 d-flex  justify-content-center " style={{height: '100%', width: ''}}>
            <div style={{width: '70%'}}>
                <h3 className='fs-5'>THERAPY, COACHING</h3>
                <h3 className='my-4 fs-1 fw-semibold'>Tai Schell, PHD</h3>
                <p className='fs-5'>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </p>
                <p className='fw-semibold'>Email  —  LinkedIn  —  Facebook</p>
              </div>
            </div>
            <div class="col-12 col-lg-6 text-start fs-5  d-flex justify-content-center" style={{height: '100%'}}>
              <img src={team1} alt="" width={'70%'} height={'90%'} className='rounded'/>
            </div>
          </div>

          <div class="row  align-items-start my-5" style={{height: '500px', width: '100%'}}>
            <div class=" col-12 col-lg-6 d-flex justify-content-center " style={{height: '100%', width: ''}}>
            <div style={{width: '70%'}}>
                <h3 className='fs-5'>THERAPY, PSYCHIATRY, COACHING</h3>
                <h3 className='my-4 fs-1 fw-semibold'>Larissa O’Connor, MD</h3>
                <p className='fs-5'>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.  </p>
                <p className='fw-semibold'>Email  —  LinkedIn  —  Facebook</p>
              </div>
            </div>
            <div class="col-12 col-lg-6 text-start fs-5  d-flex justify-content-center" style={{height: '100%'}}>
              <img src={team3} alt="" width={'70%'} height={'90%'} className='rounded'/>
            </div>
          </div>

          <div class="row  align-items-start my-5" style={{height: '500px', width: '100%'}}>
            <div class=" order-last col-12 col-lg-6 d-flex justify-content-center " style={{height: '100%', width: ''}}>
              <div style={{width: '70%'}}>
                <h3 className='fs-5'>PSYCHIATRY, COACHING</h3>
                <h3 className='my-4 fs-1 fw-semibold'>Emmett Marsh, PHD</h3>
                <p className='fs-5'>It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
              </div>
            </div>
            <div class="col-12 col-lg-6 text-start fs-5  d-flex justify-content-center" style={{height: '100%'}}>
              <img src={team2} alt="" width={'70%'} height={'90%'} className='rounded'/>
            </div>
          </div>
        </div>

        <div className='d-flex align-items-center flex-column py-5' style={{backgroundColor: '#495A58'}}>
          <h2 className='fs-1 fw-semibold mt-5 text-white'>Get started with us, today. </h2>
          <NavLink to='/contact'>
            <button type="button" class="btn text-white my-5" style={{backgroundColor: '#40BACA', height: '80px', width: '150px'}}>Get Started</button>
          </NavLink>
        </div>
    </div>
  )
}

export default Training
