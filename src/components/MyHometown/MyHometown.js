import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, Grid, Button } from "@mui/material";

const MyHometown = () => {
  const [hometownData, setHometownData] = useState(null);

  const dummyData = {
    title: "My Beautiful Hometown",
    imageUrl: "https://www.w3schools.com/w3images/forest.jpg",
    description: "This is a description of my hometown, which is a peaceful and beautiful place surrounded by nature.",
  };

  useEffect(() => {
    // Fetching hometown data from backend
    axios
      .get("http://localhost:5002/api/hometown") // URL to the backend endpoint
      .then((response) => {
        if (response.data) {
          setHometownData(response.data); // Set the fetched data if available
        } else {
          setHometownData(dummyData); // Use dummy data if no data is returned
        }
      })
      .catch((error) => {
        console.error("Error fetching hometown data:", error);
        setHometownData(dummyData); // Use dummy data in case of an error
      });
  }, []);

  if (!hometownData) {
    return (
      <Container sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        backgroundColor: "#f0f4f8", // Light blue background for the page
        padding: 4,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Curved Header */}
      <Box
        sx={{
          backgroundColor: "#2196f3", // Blue background for header
          color: "#fff",
          padding: 2,
          borderRadius: "12px 12px 0 0", // Curved top header
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h4">{hometownData.title}</Typography>
      </Box>

      {/* Grid Layout with Pictures and Info */}
      <Grid container spacing={3}>
        {/* Left Picture Section */}
        <Grid item xs={12} sm={6}>
          <img
            src={hometownData.imageUrl} // Dynamic image from the backend or fallback
            alt="Hometown Image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s",
            }}
            className="hover-effect"
          />
        </Grid>

        {/* Right Info Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "2px solid #2196f3",
              borderRadius: "8px",
              padding: 3,
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)", // Hover effect on the box
              },
            }}
          >
            <Typography variant="h6" color="primary" gutterBottom>
              About My Hometown
            </Typography>
            <Typography variant="body1" paragraph>
              {hometownData.description} {/* Dynamic description from backend or fallback */}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2196f3",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1976d2",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyHometown;
