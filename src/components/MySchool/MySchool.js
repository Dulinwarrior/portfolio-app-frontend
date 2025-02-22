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
        "Our school is known for its outstanding education and vibrant community. We prioritize student success and holistic development.",
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
        background: "linear-gradient(to bottom right, #ff9a9e, #fad0c4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Container
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f0f4f8)",
          padding: 4,
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right, #2196f3, #6dd5fa)",
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
            <img
              src={
                mySchoolData?.imageUrl ||
                "https://cdn.lyceum.lk/edgemedia/20240426182100/lyceum-wattala-complex.jpg"
              }
              alt="School Image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                border: "2px solid #2196f3",
                borderRadius: "8px",
                padding: 3,
                background: "linear-gradient(to bottom, #ffffff, #e3f2fd)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                {mySchoolData?.about?.header || "About Our School"}
              </Typography>
              <Typography variant="body1" paragraph>
                {mySchoolData?.about?.description ||
                  "Our school is known for its outstanding education and vibrant community. We prioritize student success and holistic development."}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #2196f3, #6dd5fa)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(to right, #1976d2, #42a5f5)",
                  },
                }}
              >
                {mySchoolData?.about?.buttonLabel || "Learn More"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MySchool;
