import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MentalHealthSupport = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 text-center" style={{background: 'linear-gradient(135deg, #6dd5ed, #2193b0)', color: '#fff'}}>
        <Container>
          <h1 className="display-5 fw-bold">Mental Health Support</h1>
          <p className="lead">Compassionate care to support your emotional wellbeing and resilience.</p>
        </Container>
      </section>

      {/* Support Options in Cards */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Areas of Support</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Individual Therapy</h5>
                  <p>Confidential one-on-one sessions with licensed professionals to help you manage stress, anxiety, depression, and other mental health challenges.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Group Support</h5>
                  <p>Safe and welcoming spaces to share experiences, learn from others, and gain strength through community-based support networks.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Crisis Assistance</h5>
                  <p>Immediate help during times of acute emotional distress, ensuring you have access to support when you need it most.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <h5>Ongoing Wellbeing</h5>
                  <p>Programs designed to encourage long-term mental wellness, resilience building, and balanced lifestyle choices.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Informative Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3>Why Mental Health Support Matters</h3>
              <p>
                Mental health is just as important as physical health. Many people experience emotional or psychological challenges throughout their lives, whether it’s from stress, grief, trauma, or everyday pressures. Having access to the right support can make a significant difference in improving quality of life.
              </p>
              <p>
                Our services aim to reduce stigma, promote open conversations about mental health, and provide accessible care for individuals and families. Whether you need immediate help or ongoing guidance, we are here to walk with you every step of the way.
              </p>
              <Button variant="primary" href="/contact">Contact Us</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src="https://myemotionalfirstaid.org/wp-content/uploads/2023/10/Creating-Awareness-about-Mental-Health-Concerns.png" alt="Mental Health Support" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Highlight Section */}
      <section className="py-5 text-center" style={{backgroundColor: '#f0f9ff'}}>
        <Container>
          <blockquote className="fs-4 fw-light fst-italic">“Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.”</blockquote>
        </Container>
      </section>
    </div>
  );
};

export default MentalHealthSupport;