// frontend/src/components/AboutMe.js

import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import axios from "axios";

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/about-me") // Updated to match the backend route
      .then((response) => {
        setAboutMeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  if (!aboutMeData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Box
      style={{
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        minHeight: "100vh",
      }}
    >
      {/* Header with Gradient and Curved Edge */}
      <Box
        sx={{
          background: "linear-gradient(90deg, #0d47a1, #1565c0)",
          padding: "20px 0",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
          }}
        >
          {aboutMeData.title}
        </Typography>
      </Box>

      <Container
        style={{
          marginTop: "20px",
          fontFamily: "'Poppins', sans-serif",
          position: "relative",
          paddingBottom: "30px",
        }}
      >
        {/* Decorative Background Icons */}
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            backgroundColor: "#bbdefb",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            opacity: 0.4,
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            bottom: "15%",
            right: "15%",
            backgroundColor: "#90caf9",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            opacity: 0.3,
          }}
        />

        {/* Introduction Section */}
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            color: "#0d47a1",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {aboutMeData.intro}
        </Typography>

        {/* Info Boxes with Image */}
        <Grid container spacing={3} justifyContent="center">
          {aboutMeData.sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                }}
              >
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  {section.title}
                </Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>
                  {section.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Interactive Section */}
        <Box style={{ textAlign: "center", marginTop: "40px" }}>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            Want to learn more?
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0d47a1",
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "1rem",
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
