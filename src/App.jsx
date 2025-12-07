import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const AppLayout = lazy(() => import('./pages/AppLayout'))
const Policy = lazy(() => import('./pages/Policy'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Loader = lazy(() => import('./pages/Loader'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      // { path: 'client', element: <Client /> },
      { path: 'contact', element: <Contact /> },
      { path: 'careers', element: <Careers /> },
      { path: 'policies', element: <Policy /> },
      { path: 'services', element: <Services /> },
      { path: 'FAQs', element: <FAQ /> },
      // { path: 'services/personalHealthAssistance', element: <PersonalHealthCare /> },
      // { path: 'services/mentalHealthSupport', element: <MentalHealthSupport /> },
      // { path: 'services/elderlyDisabilityCare', element: <ElderlyDisabilityCare /> },
      // { path: 'services/careSupportStaffing', element: <HomeCare /> },
      // { path: 'training', element: <Nurses /> },
      // { path: 'team', element: <Team /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      // { path: 'workWithUs', element: <WorkWithUs /> },
    ],
  },
])

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
