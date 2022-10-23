import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";

export default function Singup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signup, setSignup] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
  });

  const submit = (event) => {
    // prevent submitting form
    event.preventDefault();
    console.log(signup);
  };

  const change = (event) => {
    switch (event.target.name) {
      case "firstname":
        setSignup({ ...signup, firstname: event.target.value });
        break;
      case "middlename":
        setSignup({ ...signup, middlename: event.target.value });
        break;
      case "lastname":
        setSignup({ ...signup, lastname: event.target.value });
        break;
      case "email":
        setSignup({ ...signup, email: event.target.value });
        break;
      case "password":
        setSignup({ ...signup, password: event.target.value });
        break;
    }
  };

  return (
    <div className="container-fluid">
      <Form novalidate onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                onChange={change}
                placeholder="Enter email"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
              {errors.firstName?.type === "required" && (
                <p role="alert" className="text-danger">
                  First name is required
                </p>
              )}
            </Col>
            <Col>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middlename"
                onChange={change}
                placeholder="Enter email"
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                onChange={change}
                placeholder="Enter email"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={change}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={change}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
