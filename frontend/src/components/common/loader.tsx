import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid container spacing={2} className="layout-content">
      <Grid item xs={12}>
        <Box role="loading" sx={{ display: "flex" }} justifyContent="center">
          <CircularProgress />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loader;
