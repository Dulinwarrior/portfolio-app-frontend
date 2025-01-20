import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import axios from 'axios';

const MyWork = () => {
  const [myWorkData, setMyWorkData] = useState(null);

  // Fetch data from the backend
  useEffect(() => {
    axios.get('http://localhost:5002/api/mywork')
      .then(response => {
        setMyWorkData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  if (!myWorkData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container
      sx={{
        backgroundColor: '#f0f4f8', // Light blue background
        padding: 4,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#2196f3', // Blue background for header
          color: '#fff',
          padding: 2,
          borderRadius: '12px 12px 0 0', // Curved top header
          textAlign: 'center',
          marginBottom: 3,
        }}
      >
        <Typography variant="h4">{myWorkData.header}</Typography>
      </Box>

      {myWorkData.sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            border: '2px solid #2196f3',
            borderRadius: '8px',
            padding: 3,
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: 3,
            textAlign: 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography variant="h6" color="primary">{section.title}</Typography>
          <img
            src={section.imageUrl}
            alt={section.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '16px',
            }}
          />
          <Typography variant="body1">{section.description}</Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: '#2196f3',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            {section.buttonLabel}
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default MyWork;
