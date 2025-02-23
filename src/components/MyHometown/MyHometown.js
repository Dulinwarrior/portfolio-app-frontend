import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, Grid, Button } from "@mui/material";

const MyHometown = () => {
  const [hometownData, setHometownData] = useState(null);

  const dummyData = {
    title: "My Beautiful Hometown",
    imageUrl: "https://q-xx.bstatic.com/xdata/images/hotel/max500/85940433.jpg?k=cede7b3e94fcde9b8cb0ff91a5d213a8e4fb2630098fa8c64c38684f3a5bfe6f&o=",
    description: "My hometown is Madiwela, which is a peaceful and beautiful place surrounded by nature.",
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/hometown")
      .then((response) => {
        if (response.data) {
          setHometownData(response.data);
        } else {
          setHometownData(dummyData);
        }
      })
      .catch((error) => {
        console.error("Error fetching hometown data:", error);
        setHometownData(dummyData);
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
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ff9a9e, #ff6a88, #ff4e62)", // Full-page gradient
        padding: 4,
      }}
    >
      <Container
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: 4,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(90deg, #2196f3, #1976d2)", // Gradient header
            color: "#fff",
            padding: 2,
            borderRadius: "12px 12px 0 0",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          <Typography variant="h4">{hometownData.title}</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img
              src={hometownData?.imageUrl}
              alt="Hometown Image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: "2px solid #2196f3",
                borderRadius: "8px",
                padding: 3,
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "all 0.4s ease-in-out",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff9a9e, #ff6a88)",
                  transform: "scale(1.05)",
                  color: "#fff",
                },
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                About My Hometown
              </Typography>
              <Typography variant="body1" paragraph>
                {hometownData?.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#1976d2" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MyHometown;
