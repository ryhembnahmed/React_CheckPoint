import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const myComponentStyle = {
  color: "gray",
  padding: "1.5em",
};

function CardPattern() {
  return (
    <Container>
      <Row id="store">
        <Col md={{ span: 6, offset: 3 }} style={myComponentStyle}>
          <h3 style={{textAlign:"center"}}>Our favourite finds on JoyBox</h3>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem", marginTop: "20px", textAlign: "center"}}>
            <Card.Img variant="top" src="Images/Headband.jpg" />
            <Card.Body>
              <Card.Title>Headband</Card.Title>
              <Card.Text>
                A beautiful side bow headband, handmade in silky soft Liberty of
                London Tana Lawn cotton.
              </Card.Text>
              <Button variant="secondary">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", marginTop: "20px", textAlign: "center" }}>
            <Card.Img variant="top" src="Images/Headband.jpg" />
            <Card.Body>
              <Card.Title>Headband</Card.Title>
              <Card.Text>
                A beautiful side bow headband, handmade in silky soft Liberty of
                London Tana Lawn cotton.
              </Card.Text>
              <Button variant="secondary">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", marginTop: "20px", textAlign: "center"}}>
            <Card.Img variant="top" src="Images/Headband.jpg" />
            <Card.Body>
              <Card.Title>Headband</Card.Title>
              <Card.Text>
                A beautiful side bow headband, handmade in silky soft Liberty of
                London Tana Lawn cotton.
              </Card.Text>
              <Button variant="secondary">See Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardPattern;
