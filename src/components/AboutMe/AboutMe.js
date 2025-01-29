import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import axios from "axios";
import { FaLaptopCode, FaCamera, FaMountain, FaBicycle } from "react-icons/fa"; 

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null);

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
      {/* Decorative Small Dots */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "15%",
          width: "6px",
          height: "6px",
          background: "#90caf9",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "8px",
          height: "8px",
          background: "#bbdefb",
          borderRadius: "50%",
        }}
      />

      {/* Header with Gradient and Subtle Shadow */}
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
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)", // Tiny shadow
          }}
        >
          {aboutMeData.title}
        </Typography>
      </Box>

      <Container style={{ marginTop: "20px", fontFamily: "'Poppins', sans-serif" }}>
        {/* Introduction Section */}
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            color: "#0d47a1",
            fontWeight: "bold",
            marginBottom: "20px",
            textShadow: "0.5px 0.5px 1px rgba(0,0,0,0.2)", // Tiny shadow
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
                  transition: "transform 0.3s ease 0.1s", // Tiny delay on hover
                }}
                className="hover-box"
              >
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "15px",
                    transition: "transform 0.3s ease",
                  }}
                  className="hover-image"
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
              transition: "box-shadow 0.3s ease",
            }}
            className="glow-button"
          >
            Get in Touch
          </Button>
        </Box>
      </Container>

      {/* Small Animated Icons Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        <FaLaptopCode size={50} color="#0d47a1" className="icon-hover" />
        <FaCamera size={50} color="#0d47a1" className="icon-hover" />
        <FaMountain size={50} color="#0d47a1" className="icon-hover" />
        <FaBicycle size={50} color="#0d47a1" className="icon-hover" />
      </Box>

      {/* Keyframes for Tiny Effects */}
      <style>
        {`
          .hover-image:hover {
            transform: scale(1.03); /* Slightly less than before */
          }

          .hover-box:hover {
            transform: scale(1.02);
          }

          .glow-button:hover {
            box-shadow: 0 0 15px #0d47a1;
          }

          .icon-hover:hover {
            transform: rotate(3deg); /* Tiny tilt on hover */
            transition: transform 0.2s ease;
          }
        `}
      </style>
    </Box>
  );
};

export default AboutMe;
