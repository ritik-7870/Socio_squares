import { useSelector, useDispatch } from "react-redux";
import { useGetUsersQuery } from "../features/apiSlice";
import { clearToken } from "../features/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Button, Typography, CircularProgress } from "@mui/material";
import Layout from "../components/Layout";

const Dashboard = () => {
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetUsersQuery(page);

  useEffect(() => {
    if (!token) {
      router.push("/register");
    }
  }, [token, router]);

  const handleLogout = () => {
    dispatch(clearToken());
    router.push("/login");
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);


  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <Grid container spacing={2} style={{ marginTop: "16px" }}>
        {data?.data.map((user: any) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Typography>{user.first_name} {user.last_name}</Typography>
            <Typography>{user.email}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="secondary" onClick={handleNextPage}>
      Next Page
      </Button>

    </Layout>
  );
};

export default Dashboard;
