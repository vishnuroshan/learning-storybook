import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

import './login.css';

export default function Login() {
  const [database] = useState([
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let password = event.target.elements.password.value;
    let username = event.target.elements.username.value;
    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ code: 'password', message: 'invalid password' });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ code: 'username', message: 'invalid username' });
    }
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Input
          alt="username"
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your user name"
          errors={errorMessages}
        />
        <Input
          alt="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password here"
          errors={errorMessages}
        />
        <Button label="Login" type="submit" primary="true" size="medium" />
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
