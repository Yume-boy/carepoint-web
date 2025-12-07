import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ElderlyDisabilityCare = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="py-5 text-center d-flex align-items-center"
        style={{
          backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://vigiltrainingcollege.nsw.edu.au/wp-content/uploads/2022/05/aged-and-disabled-carers.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          minHeight: '400px'
        }}
      >
        <Container>
          <h1 className="display-5 fw-bold">Elderly & Disability Care</h1>
          <p className="lead">Providing respectful, reliable, and compassionate support that empowers independence and enhances quality of life.</p>
        </Container>
      </section>

      {/* Care Options in Cards */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Care Services</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Personal Assistance</h5>
                  <p>Support with everyday activities like bathing, grooming, eating, and mobility to promote independence and dignity.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Companionship</h5>
                  <p>Meaningful social interaction and emotional support to reduce loneliness and build stronger connections.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Specialised Disability Care</h5>
                  <p>Tailored support for individuals with physical, sensory, or intellectual disabilities, fostering inclusion and wellbeing.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Respite Care</h5>
                  <p>Short-term care solutions to give family members and caregivers the opportunity to rest and recharge.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Informative Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <h3>Why Choose Our Elderly & Disability Care?</h3>
              <p>
                Aging and living with disabilities can bring unique challenges, but with the right support, individuals can continue to live fulfilling, dignified, and joyful lives. Our care services are designed not only to provide physical assistance but also to nurture emotional wellbeing and social inclusion.
              </p>
              <p>
                We create personalised care plans for each individual, ensuring their preferences, routines, and goals are respected. Whether it’s assistance at home, in the community, or through specialised programs, we are committed to enhancing quality of life at every stage.
              </p>
              <Button variant="primary" href="/contact">Contact Us</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src="https://plus.unsplash.com/premium_photo-1664908512996-498c7f395e29?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGlzYWJpbGl0eSUyMGNhcmV8ZW58MHx8MHx8fDA%3D" alt="Elderly and Disability Care" className="img-fluid rounded shadow" />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Benefits of Our Care Services</h3>
              <ul>
                <li>Promotes independence and self-confidence for seniors and individuals with disabilities.</li>
                <li>Provides peace of mind for families and caregivers knowing their loved ones are supported.</li>
                <li>Improves social connections and reduces isolation through companionship and community involvement.</li>
                <li>Offers flexible care options, from short-term assistance to long-term comprehensive support.</li>
                <li>Ensures dignity, respect, and compassion are at the heart of every service we deliver.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Highlight Section */}
      <section className="py-5 text-center" style={{backgroundColor: '#fff7f0'}}>
        <Container>
          <blockquote className="fs-4 fw-light fst-italic">“Caring for elderly and individuals with disabilities is not just about assistance – it’s about honoring their lives and empowering them to thrive.”</blockquote>
        </Container>
      </section>
    </div>
  );
};

export default ElderlyDisabilityCare;
