import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-fluid">
      <Form novalidate onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value });
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(event) => {
              setFormData({ ...formData, password: event.target.value });
            }}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
