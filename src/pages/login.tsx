import { useForm } from "react-hook-form";
import { useLoginMutation } from "../features/apiSlice";
import { setToken } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { Grid, TextField, Button, Typography, Alert } from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [loginUser, { isLoading }] = useLoginMutation();
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setToken(response.token));
      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.data.error);
    }
  };

  return (
    <Layout>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register("password", { required: "Password is required", minLength: 8 })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;

