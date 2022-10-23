import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Search() {
  const submit = (event) => {
    event.preventDefault();
    console.log("searching...");
  };

  return (
    <div className="container-fluid">
      <Form onSubmit={submit}>
        <Row className="align-items-center p-2">
          <Col xs sm={2}>
            <Form.Label className="mb-0">Search</Form.Label>
          </Col>
          <Col sm>
            <Form.Control type="text" name="search" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
