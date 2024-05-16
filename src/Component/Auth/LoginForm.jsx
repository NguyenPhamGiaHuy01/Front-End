import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
          />
            <Field 
                as={TextField}
                name="password"
                label="password"
                fullWidth
                variant="outlined"
                margin="normal"
                />

                <Button className="mt-5" fullWidth type="submit" variant="contained">Login</Button>
        </Form>
      </Formik>

      <Typography>
        Don't have an account
        <Button onClick={()=>navigate("/account/register")}>
            Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
