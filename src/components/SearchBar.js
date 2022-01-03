import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const SearchBar = ({
  input: keyword,
  onChange: setKeyword,
  onClick: updateInput,
  onSubmit: handleSubmit,
}) => {
  const input = { height: 50 };
  return (
    <Box sx={{ padding: "40px" }} onSubmit={handleSubmit}>
      <Grid container spacing={0} direction="row" justify="center">
        <Grid item xs={9} align="center">
          <TextField
            fullWidth
            InputProps={{ style: input }}
            label="Type here to search"
            variant="outlined"
            value={keyword}
            onChange={setKeyword}
          />
        </Grid>
        <Grid item xs={3} align="center" sx={{ textAlign: "justify" }}>
          <Button
            size="large"
            style={input}
            variant="contained"
            onClick={updateInput}
          >
            Search Brewery
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
