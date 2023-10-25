import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { authLoginApi, AuthState } from "../store/reducers/authSlice";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  const authState: AuthState = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(authLoginApi({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <Form className="d-grid gap-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          onChange={usernameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={passwordChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" size="lg">
        <span className="">Login</span>
      </Button>
      <Form.Text>
        {authState.isLoginPending && <div>Loading...</div>} 
        {authState.isLoginSuccess && <div>Success.</div>} 
        {authState.errorMessage && <div>{authState.errorMessage}</div>}
      </Form.Text>
    </Form>
  );
}

export default LoginForm;
