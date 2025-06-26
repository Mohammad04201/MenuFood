import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import offers from '../../data/offers';

function Offers() {
  return (
    <section id="offers" className="py-5 bg-light">
      <Container>
 <div className="text-center mb-4">
  <h2 className="section-title">عروضنا المميزة</h2>
  <p>اطلب وجبتين واحصل على الثالثة مجانًا – استمتع بأشهى الأطباق بسعر ولا أروع!</p>
</div>
        <Row className="g-4">
          {offers.map((offer) => (
            <Col md={4} key={offer.id}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={offer.img} alt={offer.title} />
                <Card.Body>
                  <Card.Title>{offer.title}</Card.Title>
                  <Card.Text>{offer.desc}</Card.Text>
                  <Card.Text>
                    <del className="text-muted me-2">${offer.oldPrice}</del>
                    <span className="fw-bold text-success">${offer.newPrice}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Offers; 