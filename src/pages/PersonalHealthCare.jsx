import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Breadcrumb,
  Accordion,
  ListGroup
} from "react-bootstrap";
import {NavLink} from "react-router-dom";

// NOTE: Ensure you have react-bootstrap and bootstrap CSS installed in your app:
// npm i react-bootstrap bootstrap
// and import 'bootstrap/dist/css/bootstrap.min.css' once in your app entry.

const Hero = () => (
  <section
    className="position-relative text-white"
    style={{
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('https://sageeducation.edu.au/wp-content/uploads/2023/08/6-Steps-to-Achieving-a-Job-As-a-Personal-Carer-2.jpg') center/cover no-repeat",
      minHeight: 320,
    }}
    aria-label="Personal Carer hero banner"
  >
    <Container className="py-5">
      <Breadcrumb className="mb-3 text-white no underline-none">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active className="text-white">Personal Carer</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="display-5 fw-bold">Personal Health Assistance</h1>
      <p className="lead mb-2">Person-centered care at home, community and in care home settings.</p>
      <div className="mt-4 d-flex gap-2">
        {/* <Button variant="primary" href="#details">Learn more</Button> */}
        <Button variant="outline-light" href="#contact">Contact us</Button>
      </div>
    </Container>
  </section>
);

const ServiceOverview = () => (
  <Container className="py-5">
    <Row className="g-4">
      <Col md={6}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="h5">What is Personal Care?</Card.Title>
            <Card.Text>
              Our personal carer service supports individuals with everyday activities while promoting dignity and independence. Whether in their home, community or care home setting, we provide reliable, compassionate care tailored to each person’s needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="h5">Who we support</Card.Title>
            <Card.Text>
              We provide care for older people, people living with disability, or anyone needing extra assistance with daily living. Our services are flexible and can be tailored to short‑term or long‑term needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const ServiceDetails = () => (
  <Container id="details" className="pb-5">
    <Row className="g-4">
      <Col lg={8}>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="h4">Our Personal Care Services</Card.Title>
            <ListGroup className="mb-4" variant="flush">
              <ListGroup.Item>Assistance with showering, grooming, dressing, and continence support</ListGroup.Item>
              <ListGroup.Item>Mobility support, safe transfers, and use of equipment</ListGroup.Item>
              <ListGroup.Item>Meal preparation and nutrition support</ListGroup.Item>
              <ListGroup.Item>Prompting and administering medication (as directed)</ListGroup.Item>
              <ListGroup.Item>Light household tasks such as cleaning and laundry</ListGroup.Item>
              <ListGroup.Item>Support to attend appointments, shopping, and social outings</ListGroup.Item>
            </ListGroup>

            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why choose our carers?</Accordion.Header>
                <Accordion.Body>
                  Our carers are trained, experienced, and compassionate. They respect your independence and adapt support to your preferences and goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Flexible care options</Accordion.Header>
                <Accordion.Body>
                  We offer care tailored to your schedule—whether you need daily assistance, weekly visits, or occasional support.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4}>
        <ContactCard />
      </Col>
    </Row>
  </Container>
);

const ContactCard = () => (
  <Card id="contact" className="shadow-sm">
    <Card.Body>
      <Card.Title className="h5">Get in touch</Card.Title>
      <Card.Text className="text-muted">We’re here to answer your questions and help you arrange the right care.</Card.Text>
      <ListGroup variant="flush">
        <ListGroup.Item>📞 +447592642428</ListGroup.Item>
        <ListGroup.Item>✉️ hr@carepointhealthcaresolutions.co.uk</ListGroup.Item>
      </ListGroup>
      <div className="mt-3 d-grid">
        <NavLink to="/contact">
         {/* <Button variant="primary">Contact us</Button> */}
         <button 
                type="" 
                className="btn text-white my-2 align-self-center" 
                style={{ backgroundColor: '#40BACA', height: '50px', width: '150px' }}
              >
                Contact us
              </button>
        </NavLink>
      </div>
    </Card.Body>
  </Card>
);

const FooterCta = () => (
  <section className="py-5">
    <Container>
      <Card className="p-4 p-md-5 shadow-sm text-center">
        <h2 className="h3 mb-2">Need personal care support?</h2>
        <p className="mb-4 text-muted">Let us provide safe, respectful, and person‑centred assistance for you or your loved one.</p>
        <div className="d-flex justify-content-center gap-2">
          <NavLink to="/contact">
         {/* <Button variant="primary">Contact us</Button> */}
         <button 
                type="" 
                className="btn text-white my-2 align-self-center" 
                style={{ backgroundColor: '#40BACA', height: '50px', width: '150px' }}
              >
                Contact us
              </button>
        </NavLink>
        </div>
      </Card>
    </Container>
  </section>
);

export default function PersonalCarerPage() {
  return (
    <main>
      <Hero />
      <ServiceOverview />
      <ServiceDetails />
      <FooterCta />
    </main>
  );
}
