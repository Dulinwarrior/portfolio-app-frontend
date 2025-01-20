import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { keyframes } from "@emotion/react"; // Correct import for keyframes

// Animation for interactive background elements
const floating = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const MyHobbies = () => {
  const [hobbies, setHobbies] = useState([]); // State to store fetched hobbies
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch hobbies data from backend API
    axios
      .get("http://localhost:5002/api/hobbies") // Adjust the URL if needed
      .then((response) => {
        setHobbies(response.data.hobbies); // Set the fetched hobbies to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("There was an error fetching the hobbies data!", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message until data is fetched
  }

  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#1565c0",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "50px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          My Hobbies
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Container sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          {hobbies.length > 0 ? (
            hobbies.map((hobby, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "#bbdefb",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={hobby.image}
                    alt={hobby.title}
                    sx={{ borderRadius: "10px", marginBottom: "10px" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: "bold", marginBottom: "10px" }}
                    >
                      {hobby.title}
                    </Typography>
                    <Typography variant="body2">{hobby.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <div>No hobbies found</div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default MyHobbies;
