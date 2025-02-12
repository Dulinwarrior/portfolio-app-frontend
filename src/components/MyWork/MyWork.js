import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import axios from "axios";

const MyWork = () => {
  const [myWorkData, setMyWorkData] = useState(null);

  // Dummy data for fallback
  const dummyData = {
    header: "My Work",
    sections: [
      {
        title: "Project 1: AI Powered Chatbot",
        imageUrl: "https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp",
        description: "An intelligent chatbot designed to assist users with queries, powered by AI and natural language processing.",
        buttonLabel: "View Project",
      },
      {
        title: "Project 2: Virtual Reality Experience",
        imageUrl: "https://superpixel.sg/wp-content/uploads/2023/03/Virtual-Reality-1-1200x675.webp",
        description: "A fully immersive VR experience designed for education and entertainment, exploring new worlds in 3D.",
        buttonLabel: "View Project",
      },
      {
        title: "Project 3: E-Commerce Web App",
        imageUrl: "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg",
        description: "A sleek and user-friendly e-commerce platform offering seamless shopping experiences for all devices.",
        buttonLabel: "View Project",
      },
    ],
  };

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/mywork")
      .then((response) => {
        if (response.data) {
          setMyWorkData(response.data);
        } else {
          setMyWorkData(dummyData); // Use dummy data if the response is undefined
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setMyWorkData(dummyData); // Use dummy data in case of error
      });
  }, []);

  if (!myWorkData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container
      sx={{
        backgroundColor: "#f0f4f8", // Light blue background
        padding: 4,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('https://via.placeholder.com/100x100?text=Background')", // Subtle background image
        backgroundSize: "cover",
      }}
    >
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
        <Typography variant="h4">{myWorkData.header}</Typography>
      </Box>

      {myWorkData.sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            border: "2px solid #2196f3",
            borderRadius: "8px",
            padding: 3,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: 3,
            textAlign: "center",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
            {section.title}
          </Typography>
          <img
            src={section.imageUrl}
            alt={section.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {section.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#2196f3",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            {section.buttonLabel}
          </Button>
        </Box>
      ))}

      {/* Subtle Decorative Element */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.1,
          fontSize: "150px",
          color: "#2196f3",
          zIndex: -1,
        }}
      >
        <Typography variant="h1">Projects</Typography>
      </Box>
    </Container>
  );
};

export default MyWork;
