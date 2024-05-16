import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../State/Authentication/Action";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "",
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    console.log(value)
    dispatch(registerUser({userData:value,navigate}))
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="full name"
            fullWidth
            variant="outlined"
          />
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
            type="password"
          />

          <Field
            fullWidth
            margin="normal"
            as={Select}
            labelId="role-simple-select-label"
            id="demo-simple-select"
            // value={age}

            //  onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
              Restaurant Owner
            </MenuItem>
          </Field>

          <Button className="mt-5" fullWidth type="submit" variant="contained">
            Login
          </Button>
        </Form>
      </Formik>

      <Typography>
        If have an account already
        <Button onClick={() => navigate("/account/login")}>Login</Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
