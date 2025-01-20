import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import axios from "axios";

const MySchool = () => {
  const [mySchoolData, setMySchoolData] = useState(null);
  const [error, setError] = useState(null); // Track error state

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5002/api/my-school")
      .then(response => {
        setMySchoolData(response.data);
      })
      .catch(error => {
        setError("There was an error fetching the data.");
        console.error("Error fetching data:", error);
      });
  }, []);

  // Display loading or error message if necessary
  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

  if (!mySchoolData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container
      sx={{
        backgroundColor: '#f0f4f8',
        padding: 4,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Curved Header */}
      <Box
        sx={{
          backgroundColor: '#2196f3',
          color: '#fff',
          padding: 2,
          borderRadius: '12px 12px 0 0',
          textAlign: 'center',
          marginBottom: 3,
        }}
      >
        <Typography variant="h4">{mySchoolData.title}</Typography>
      </Box>

      {/* Grid Layout with Image on Left and Info on Right */}
      <Grid container spacing={3}>
        {/* Image Section */}
        <Grid item xs={12} sm={6}>
          <img
            src={mySchoolData.imageUrl}
            alt="School Image"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Grid>

        {/* Info Box Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: '2px solid #2196f3',
              borderRadius: '8px',
              padding: 3,
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" color="primary" gutterBottom>
              {mySchoolData.about.header}
            </Typography>
            <Typography variant="body1" paragraph>
              {mySchoolData.about.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2196f3',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              {mySchoolData.about.buttonLabel}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MySchool;
