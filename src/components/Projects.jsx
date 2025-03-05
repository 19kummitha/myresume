import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Collapse,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Community Communication Website for a Residency",
    technologies: "C, Angular, ASP.Net",
    image: "/community.png",
    github: "https://github.com/19kummitha/capstone",
    description: [
      "Weather Forecast API is used to display the current weather situation.",
      "The Community Communication in a residency is most important for the residents and admins.",
      "Includes features like residents’ complaints, request services, events, bill payments, etc.",
    ],
  },
  {
    title: "Loan Approval Prediction Using Machine Learning",
    technologies: "Python, Machine Learning",
    image: "/loan.png",
    description: [
      "Used various machine learning algorithms like Gaussian Naive Bayes, Random Forest, Decision Tree, KNN, and Logistic Regression.",
      "Gaussian Naive Bayes achieved superior accuracy.",
    ],
  },
  {
    title: "E-Commerce Website",
    technologies: "HTML, CSS, JavaScript, TypeScript, C#",
    image: "/ecommerce.png",
    github: "https://github.com/19kummitha/Re-Store",
    description: [
      "An application that shows products according to the user’s input.",
      "This project includes only the frontend of an E-commerce website.",
    ],
  },
];

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({}); // Track multiple expanded projects

  const handleProjectClick = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked project
    }));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: 320,
              boxShadow: 3,
              borderRadius: 2,
              transition: "0.3s",
              backgroundColor: expandedProjects[index] ? "#eef6ff" : "white",
            }}
          >
            <CardActionArea onClick={() => handleProjectClick(index)}>
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Technologies:</strong> {project.technologies}
                </Typography>
              </CardContent>
            </CardActionArea>

            <Collapse in={expandedProjects[index]} timeout="auto" unmountOnExit>
              <CardContent>
                {project.description.map((point, idx) => (
                  <Typography
                    variant="body2"
                    key={idx}
                    style={{ marginBottom: "5px" }}
                  >
                    • {point}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>

            {project.github && (
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              </CardActions>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
