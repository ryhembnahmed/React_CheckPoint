import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const myComponentStyle = {
  color: "gray",
  padding: "1.5em",
};

function Formulaire() {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row id="contact">
        <Col md={{ span: 6, offset: 3 }} style={myComponentStyle}>
          <h3 style={{ textAlign: "center" }}>Contact us</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Message"/>
            </Form.Group>
            <br/>
            <Button variant="secondary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulaire;
