import React, { useState, useEffect } from "react";
import { Container, Typography, Box, TextField, Button, Grid } from "@mui/material";
import axios from "axios";

const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/contact-info")
      .then((response) => {
        setContactInfo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contact info:", error);
        setContactInfo({
          title: "Contact Me",
          description: "Feel free to get in touch! Fill out the form below, and I'll get back to you as soon as possible.",
          images: [
            "https://www.w3schools.com/w3images/team2.jpg",
            "https://www.w3schools.com/w3images/team1.jpg",
            "https://www.w3schools.com/w3images/team3.jpg",
          ],
        });
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5002/api/contact", { email, message })
      .then(() => {
        setStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setStatus("Error sending message.");
        console.error(error);
      });
  };

  return (
    <Box style={{ background: "linear-gradient(to bottom, #ffffff, #e3f2fd)", minHeight: "100vh" }}>
      {/* Header with Gradient and Curved Edge */}
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
          Personal Profile
        </Typography>
      </Box>

      <Container
        style={{
          backgroundColor: "#e3f2fd",
          borderRadius: "10px",
          padding: "30px",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "20px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom style={{ textAlign: "center", color: "#0d47a1", fontWeight: "bold" }}>
          {contactInfo ? contactInfo.title : "Contact Me"}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#1565c0",
            fontSize: "1.2rem",
          }}
        >
          {contactInfo ? contactInfo.description : "Feel free to reach out and I'll get back to you soon."}
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            marginTop: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Your Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ maxWidth: "500px", backgroundColor: "#ffffff", borderRadius: "5px" }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ maxWidth: "500px", backgroundColor: "#ffffff", borderRadius: "5px" }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#0d47a1",
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "1rem",
            }}
            type="submit"
          >
            Send Message
          </Button>
        </Box>

        {status && (
          <Typography
            variant="body2"
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: status.includes("success") ? "green" : "red",
            }}
          >
            {status}
          </Typography>
        )}

        {/* Images Section */}
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          {(contactInfo ? contactInfo.images : [
            "https://www.w3schools.com/w3images/team2.jpg",
            "https://www.w3schools.com/w3images/team1.jpg",
            "https://www.w3schools.com/w3images/team3.jpg",
          ]).map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component="img"
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
