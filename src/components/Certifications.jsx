import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Dialog,
  Box,
} from "@mui/material";

const certifications = [
  {
    title: "SQL - HackerRank",
    date: "Sep 2023",
    image: "/certifications/sql.png",
  },
  {
    title: "Python - HackerRank",
    image: "/certifications/python.png",
  },
  {
    title: "Linguaskill - Cambridge Linguaskill",
    date: "Dec 2022",
    image: "/certifications/linguaskill.png",
  },
  {
    title: "Agile, Scrum, and Kanban - Udemy",
    image: "/certifications/agile.png",
  },
];

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: 300, // Fixed width
                height: 350, // Fixed height to keep consistency
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: 3,
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={() => handleOpen(cert)}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 200, // Ensure consistent image size
                  objectFit: "cover", // Crop without distortion
                }}
                image={cert.image}
                alt={cert.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{cert.title}</Typography>
                {cert.date && (
                  <Typography variant="body2" color="textSecondary">
                    {cert.date}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Viewing Image */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        {selectedCert && (
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </Dialog>
    </Box>
  );
}
