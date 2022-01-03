import React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const MyCardActions = ({ id }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <CardActions>
        <Link to={`/page/${id}`} style={{ textDecoration: "none" }}>
          <Button size="large" variant="contained">
            MORE DETAILS
          </Button>
        </Link>
      </CardActions>
    </Box>
  );
};

export default MyCardActions;
