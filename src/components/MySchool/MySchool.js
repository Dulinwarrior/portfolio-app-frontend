import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import axios from "axios";

const MySchool = () => {
  const [mySchoolData, setMySchoolData] = useState(null);
  const [error, setError] = useState(null); // Track error state

  // Dummy data for fallback
  const dummyData = {
    title: "My Amazing School",
    imageUrl: "https://cdn.lyceum.lk/edgemedia/20240426182100/lyceum-wattala-complex.jpg",
    about: {
      header: "About Our School",
      description:
        "Our school is known for its outstanding education and vibrant community. We prioritize student success and holistic development.",
      buttonLabel: "Learn More",
    },
  };

  // Fetch data from backend
  useEffect(() => {
    axios
      .get("http://localhost:5002/api/my-school")
      .then((response) => {
        if (response.data) {
          setMySchoolData(response.data);
        } else {
          setMySchoolData(dummyData); // Use dummy data if the response is undefined
        }
      })
      .catch((error) => {
        setError("There was an error fetching the data.");
        console.error("Error fetching data:", error);
        setMySchoolData(dummyData); // Use dummy data in case of error
      });
  }, []);

  // Display loading or error message if necessary
  if (error) {
    return (
      <Typography variant="h6" align="center" color="error">
        {error}
      </Typography>
    );
  }

  if (!mySchoolData) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container
      sx={{
        backgroundColor: "#f0f4f8",
        padding: 4,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Curved Header */}
      <Box
        sx={{
          backgroundColor: "#2196f3",
          color: "#fff",
          padding: 2,
          borderRadius: "12px 12px 0 0",
          textAlign: "center",
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
            src={mySchoolData?.imageUrl|| "https://cdn.lyceum.lk/edgemedia/20240426182100/lyceum-wattala-complex.jpg"} // Dynamic image from backend or fallback
            alt="School Image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Grid>

        {/* Info Box Section */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              border: "2px solid #2196f3",
              borderRadius: "8px",
              padding: 3,
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="primary" gutterBottom>
              {mySchoolData?.about?.header|| "About Our School"}
            </Typography>
            <Typography variant="body1" paragraph>
              {mySchoolData?.about?.description|| "Our school is known for its outstanding education and vibrant community. We prioritize student success and holistic development."}
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
              {mySchoolData?.about?.buttonLabel|| "Learn More"}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MySchool;
