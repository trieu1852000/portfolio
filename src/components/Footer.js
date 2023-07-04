import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitHub from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/van-phan-155740248/" target = "_blank" rel ="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/trieu1852000" target = "_blank" rel ="noopener noreferrer"><img src={gitHub} alt="" /></a>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
