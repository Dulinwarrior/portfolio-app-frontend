// frontend/src/components/AboutMe.js

import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios";

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/about-me")
      .then((response) => {
        setAboutMeData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
  }, []);

  // Handle scroll event to show/hide Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!aboutMeData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Box
      style={{
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative Background Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          background: "radial-gradient(circle, #bbdefb, transparent)",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          animation: "pulse 6s infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "20%",
          background: "radial-gradient(circle, #90caf9, transparent)",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          animation: "pulse 8s infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "30%",
          background: "radial-gradient(circle, #e3f2fd, transparent)",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          animation: "pulse 7s infinite",
        }}
      />

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

      {/* Back to Top Button */}
      {showScroll && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "#0d47a1",
            color: "#ffffff",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            animation: "fadeIn 0.5s",
          }}
        >
          <FaArrowUp size={20} />
        </Box>
      )}

      {/* Keyframes for Circle Animation */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.6;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default AboutMe;
