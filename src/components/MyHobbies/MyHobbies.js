import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from "@mui/material";

const MyHobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/hobbies")
      .then((response) => {
        if (response.data && response.data.hobbies) {
          setHobbies(response.data.hobbies);
        } else {
          setHobbies(dummyData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hobbies data!", error);
        setHobbies(dummyData);
        setLoading(false);
      });
  }, []);

  const dummyData = [
    {
      title: "Reading",
      description: "I love reading books on various topics like fiction, philosophy, and technology.",
      image: "https://www.w3schools.com/w3images/forest.jpg",
    },
    {
      title: "Coding",
      description: "Programming is both a passion and a profession. I enjoy building web applications.",
      image: "https://leadschool.in/wp-content/uploads/2022/04/shutterstock_1777292972.jpg",
    },
    {
      title: "Traveling",
      description: "Exploring new places and experiencing different cultures is one of my greatest joys.",
      image: "https://www.w3schools.com/w3images/mountains.jpg",
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1565c0",
          color: "white",
          padding: "40px 0",
          textAlign: "center",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "50px",
          width: "100%",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          My Hobbies
        </Typography>
      </Box>

      <Container sx={{ marginTop: "20px" }}>
        <Grid container spacing={3} justifyContent="center">
          {hobbies.length > 0 ? (
            hobbies.map((hobby, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    backgroundColor: "#bbdefb",
                    textAlign: "center",
                    padding: "20px",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image={hobby.image}
                    alt={hobby.title}
                    sx={{
                      borderRadius: "10px",
                      marginBottom: "10px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                      {hobby.title}
                    </Typography>
                    <Typography variant="body2">{hobby.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <div>No hobbies found</div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default MyHobbies;
