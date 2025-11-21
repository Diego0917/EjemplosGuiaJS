import { Card, CardBody, CardTitle, CardText } from "react-bootstrap";
function Correo() {
  return (
    <Card style={{ width: "18rem" }}>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
  );
}

export default Correo;
