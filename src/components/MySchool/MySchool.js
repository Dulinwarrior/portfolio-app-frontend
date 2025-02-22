import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import axios from "axios";

const MySchool = () => {
  const [mySchoolData, setMySchoolData] = useState(null);
  const [error, setError] = useState(null);

  const dummyData = {
    title: "My Amazing School",
    imageUrl: "https://cdn.lyceum.lk/edgemedia/20240426182100/lyceum-wattala-complex.jpg",
    about: {
      header: "About Our School",
      description:
        "My school is Lyceum International school in Nugegoda. It is the mother school from all the lyceum schools and the biggest. Our founder is Dr.Mohan Lal Grero",
      buttonLabel: "Learn More",
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/my-school")
      .then((response) => {
        if (response.data) {
          setMySchoolData(response.data);
        } else {
          setMySchoolData(dummyData);
        }
      })
      .catch((error) => {
        setError("There was an error fetching the data.");
        console.error("Error fetching data:", error);
        setMySchoolData(dummyData);
      });
  }, []);

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
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #8a65c5, #7e9ac4)",  // Slightly brighter
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Container
        sx={{
          backgroundColor: "#f0f4f8",
          padding: 4,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #8d5fa4, #6f9bc8)",  // Slightly brighter
            color: "#fff",
            padding: 2,
            borderRadius: "12px 12px 0 0",
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          <Typography variant="h4">{mySchoolData.title}</Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.4s ease-in-out",
                ":hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={mySchoolData?.imageUrl || dummyData.imageUrl}
                alt="School Image"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                borderRadius: "12px",
                padding: 3,
                background: "linear-gradient(to right, #8a65c5, #7e9ac4)",  // Slightly brighter
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
                color: "white",
                transition: "transform 0.4s ease-in-out, background 0.4s ease-in-out",
                ":hover": {
                  transform: "scale(1.08)",
                  background: "linear-gradient(to right, #7e9ac4, #8a65c5)",  // Slightly brighter
                },
              }}
            >
              <Typography variant="h6" gutterBottom>
                {mySchoolData?.about?.header || dummyData.about.header}
              </Typography>
              <Typography variant="body1" paragraph>
                {mySchoolData?.about?.description || dummyData.about.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2196f3",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                {mySchoolData?.about?.buttonLabel || dummyData.about.buttonLabel}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MySchool;
