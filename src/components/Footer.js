import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="text-center py-3">Copyright &copy; FlexStore</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
