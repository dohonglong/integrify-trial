import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MyCardContent({ name, brewery_type, city }) {
  return (
    <CardContent sx={{ paddingTop: "30px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="h6">{brewery_type}</Typography>
      <Typography variant="h6">{city}</Typography>
    </CardContent>
  );
}

export default MyCardContent;
