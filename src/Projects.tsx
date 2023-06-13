import { Box, Container, Typography } from "@mui/material";

export default function Projects() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "98vh",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h1" fontSize={80} fontWeight={700}>
                    Realizacje
                </Typography>
            </Box>
        </Container>
    );
}
