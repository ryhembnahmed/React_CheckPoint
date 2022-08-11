import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const myComponentStyle = {
  color: "gray",
  padding: "1.5em",
};

function About() {
  return (
    <Container>
      <Row id="about">
        <Col md={{ span: 6, offset: 3 }} style={myComponentStyle}>
          <h3>JoyBox is the place for Handmade Gifts!</h3>
          <hr/>
          We offer highest quality Handmade Jewelry, Hand-Knitted products, Home
          Decor Accessories and much more from independent Artists and Crafters
          from around the globe. We sell only new handmade products. New items
          added daily.
        </Col>
      </Row>
    </Container>
  );
}

export default About;
