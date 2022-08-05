import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const School = ({ school, description, image }) => {
  return (
    // <Card sx={{ width: window.innerWidth > 500 ? 345 : "80%" }}>
    <Card className="school">
      <CardMedia component="img" height="auto" image={image} alt={school} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {school}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default School;
