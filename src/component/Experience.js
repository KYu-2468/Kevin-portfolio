import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExperienceDetail from "./ExperienceDetail";

const Experience = ({ jobs }) => (
  <div className="experience">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {jobs.map((job, index) => (
            <Row key={index} job={job} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default Experience;

const Row = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>{job.company}</p>
          <p>{job.role}</p>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <ExperienceDetail job={job} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
