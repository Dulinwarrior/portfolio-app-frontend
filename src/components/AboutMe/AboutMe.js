import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import axios from "axios";
import { FaLaptopCode, FaCamera, FaMountain, FaBicycle } from "react-icons/fa";

const floatingIcons = [FaLaptopCode, FaCamera, FaMountain, FaBicycle];

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX / 100, y: event.clientY / 100 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const defaultData = {
    title: "About Me",
    intro: "Welcome to my personal space!",
    sections: [
      {
        title: "Web Development",
        description: "I love coding and building amazing websites.",
        imageUrl: "https://www.getmecoding.com/wp-content/uploads/2017/10/GMC_blog_IsWebDevelopmentCoding_resize.jpg",
      },
      {
        title: "Photography",
        description: "Capturing moments through my lens.",
        imageUrl: "https://www.printique.com/wp-content/uploads/2022/03/prophotography3-1024x683.jpg",
      },
      {
        title: "Travel",
        description: "Exploring new places and adventures.",
        imageUrl: "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=",
      },
    ],
  };

  const data = aboutMeData || defaultData;

  return (
    <Box
      style={{
        background: "linear-gradient(to bottom right, #ff9a9e, #fad0c4, #fad0c4, #ffdde1)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Floating Background Icons with slower movement */}
      {floatingIcons.map((Icon, index) => (
        <Icon
          key={index}
          style={{
            position: "absolute",
            top: `calc(${Math.random() * 90}% + ${mousePosition.y}px)`,
            left: `calc(${Math.random() * 90}% + ${mousePosition.x}px)`,
            fontSize: "50px",
            color: "rgba(255, 105, 180, 0.3)",
            transition: "transform 0.4s ease-out",
          }}
        />
      ))}

      <Box
        sx={{
          background: "linear-gradient(90deg, #ff758c, #ff7eb3)",
          padding: "20px 0",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <Typography
          variant="h5"
          style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold" }}
        >
          {data.title}
        </Typography>
      </Box>

      <Container style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: "center", color: "#ff4b5c", fontWeight: "bold" }}>
          {data.intro}
        </Typography>

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
                }}
              >
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
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
