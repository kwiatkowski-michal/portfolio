import { Facebook, GitHub } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, ButtonGroup, Container, Hidden, IconButton, Stack, Typography } from "@mui/material";

export default function MainPage() {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "98vh",
                    justifyContent: "center",
                }}
            >
                <Hidden mdDown>
                <Typography variant="h1" fontSize={80} fontWeight={700}>
                    Michał Kwiatkowski
                </Typography>
                <Typography variant="h4" fontWeight={500}>
                    klepię kod, robię grafiki i bawię się w politykę.
                </Typography>
                <Box mt={3}>
                    <ButtonGroup color='inherit' size='large'>
                        <Button target='_blank' href='https://instagram.com/_kwiatkowskimichal'>
                            <InstagramIcon />
                        </Button>
                        <Button target='_blank' href='https://www.facebook.com/kwiatkowskion/'>
                            <Facebook />
                        </Button>
                        <Button target='_blank' href='https://github.com/kwiatkowski-michal'>
                            <GitHub />
                        </Button>
                    </ButtonGroup>
                </Box> 
                <Box mt={2}>
                    <Typography variant='overline'>
                    &copy; {new Date().getFullYear()}
                    </Typography>
                </Box>
                </Hidden>
                <Hidden mdUp>
                <Typography variant="h1" fontSize={"10vw"} fontWeight={700}>
                    Michał Kwiatkowski
                </Typography>
                <Typography variant="h4" fontSize={"6vw"} fontWeight={500}>
                    klepię kod, robię grafiki i bawię się w politykę.
                </Typography>
                <Box mt={3}>
                    <ButtonGroup color='inherit' size='large'>
                        <Button target='_blank' href='https://instagram.com/_kwiatkowskimichal'>
                            <InstagramIcon />
                        </Button>
                        <Button target='_blank' href='https://www.facebook.com/kwiatkowskion/'>
                            <Facebook />
                        </Button>
                        <Button target='_blank' href='https://github.com/kwiatkowski-michal'>
                            <GitHub />
                        </Button>
                    </ButtonGroup>
                </Box>
                <Box mt={2}>
                    <Typography variant='caption'>
                    &copy; {new Date().getFullYear()}<br/>Wersja: 1.1
                    </Typography>
                </Box>
                </Hidden>
            </Box>
        </Container>
    );
}
