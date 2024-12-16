import { useSelector, useDispatch } from "react-redux";
import { useGetUsersQuery } from "../features/apiSlice";
import { clearToken } from "../features/authSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Button,
  Typography,
  CircularProgress,
  ImageListItem,
} from "@mui/material";
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

  const handleNextPage = () => {
    if (page < data?.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <Grid container spacing={6} style={{ marginTop: "16px" }}>
        {token && data?.data.map((user: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={user.id}
            border="1px solid black"
          >
            <ImageListItem>
              <img
                style={{ borderRadius: "50%", height: "100px", width: "100px" }}
                src={user.avatar}
                alt={user.first_name}
                loading="lazy"
              />
            </ImageListItem>
            <Typography>
              {user.first_name} {user.last_name}
            </Typography>
            <Typography>{user.email}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "16px" }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNextPage}
          disabled={page === data?.total_pages}
        >
          Next Page
        </Button>
      </Grid>
      <Typography style={{ marginTop: "16px" }}>
        Page {page} of {data?.total_pages}
      </Typography>
    </Layout>
  );
};

export default Dashboard;
