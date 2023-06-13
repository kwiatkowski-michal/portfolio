import { Launch } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {' © '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

export default function Footer() {
    return (
        <Box
        component="footer"
        sx={{
            mt: 4,
          py: 3,
          px: 2,
          backgroundColor: "white"
        }}
      >
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </Box>
    )
}