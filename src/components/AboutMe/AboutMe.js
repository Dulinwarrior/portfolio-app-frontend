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

  // Dummy fallback data if API response is missing
  const defaultData = {
    title: "About Me",
    intro: "Welcome to my personal space!",
    sections: [
      {
        title: "Web Development",
        description: "I love coding and building amazing websites.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Photography",
        description: "Capturing moments through my lens.",
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        title: "Travel",
        description: "Exploring new places and adventures.",
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  };

  // Use actual data if available, otherwise fallback to default
  const data = aboutMeData || defaultData;

  return (
    <Box
      style={{
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
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
          {data.title}
        </Typography>
      </Box>

      <Container style={{ marginTop: "20px", fontFamily: "'Poppins', sans-serif" }}>
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
          {data.intro}
        </Typography>

        {/* Sections */}
        <Grid container spacing={3} justifyContent="center">
          {data.sections?.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  textAlign: "center",
                  transition: "transform 0.3s ease 0.1s",
                }}
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
      </Container>
    </Box>
  );
};

export default AboutMe;
