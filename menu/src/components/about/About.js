import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import aboutImg from '../../Food-image/about_img.png';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className='section-title'>قصة مطعم ......... </h2>
          <p>أكثر من 25 سنة من التميز في عالم الطهي</p>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              منذ تأسيسه، تميز مطعمنا بتقديم أشهى الأطباق المحضّرة من مكونات طازجة ووصفات أصلية مستوحاة من تقاليد المطبخ العالمي والعربي.
            </p>
            <p>
              بفضل فريق من أمهر الطهاة، نجحنا في خلق تجربة طعام لا تُنسى، تجمع بين الطعم الأصيل والخدمة الراقية في أجواء دافئة ومريحة.
            </p>
            {/* <Button variant="outline-primary">اعرف أكثر</Button> */}
          </Col>
          <Col md={6} className="text-center">
            <img src={aboutImg} alt="عن المطعم" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
