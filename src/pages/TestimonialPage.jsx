import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import FaqComponent from "../components/FaqComponent";

export const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur repudiandae nostrum, dolor similique expedita adipisci!</p>
            </Col>
          </Row>

  {/* di atas layar laptop menjadi 3colom di bawah itu menjadi 1 colom */}
          <Row className="row-cols-lg-3 row-cols-1">  
          {testimonial.map((data) => {
                return (
                  <Col key={data.id} className="mb-5 shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </Col>

                );
              })}

          </Row>
          </Container>
      </div>
      
      <FaqComponent />
    </div>
  )
};

export default TestimonialPage;
