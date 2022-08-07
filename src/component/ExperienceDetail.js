import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (job) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {job.role}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {job.startDate} - {job.endDate}
      </Typography>
      {job.jobDescription.map((description, index) => (
        <>
          <Typography style={{ marginBottom: "10px" }} variant="body2">
            {description}
          </Typography>
        </>
      ))}
    </CardContent>
  </React.Fragment>
);

const ExperienceDetail = ({ job }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" job={job}>
        {card(job)}
      </Card>
    </Box>
  );
};

export default ExperienceDetail;
