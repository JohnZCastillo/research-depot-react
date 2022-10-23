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
    password2: "",
  });

  const submit = async (event) => {
    // prevent submitting form
    try {
      console.log(signup);

      const result = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });

      // convert server's response to json
      const data = await result.json();

      // Throw error if result status is not 200
      if (!result.ok) throw new Error(data.message);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const change = (event) => {
    switch (event.target.name) {
      case "firstname":
        setSignup({ ...signup, firstname: event.target.value });
        console.log(signup);

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
      case "password2":
        setSignup({ ...signup, password2: event.target.value });
        break;
    }
  };

  return (
    <div className="container-fluid">
      <Form noValidate onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3">
          <Row>
            <Col sm>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                placeholder="Enter email"
                {...register("firstname", {
                  onChange: change,
                  required: true,
                  maxLength: 20,
                })}
              />
              {/* {errors.firstName?.type === "required" && (
                <p role="alert" className="text-danger">
                  First name is required
                </p>
              )} */}
            </Col>
            <Col sm>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middlename"
                onChange={change}
                placeholder="Enter email"
              />
            </Col>
            <Col sm>
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
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
