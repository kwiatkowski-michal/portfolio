import { Facebook, GitHub } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Button, ButtonGroup, Container, Hidden, IconButton, Stack, Typography } from "@mui/material";
import Projects from './Projects';

export default function MainPage() {
    return (
        <Container>
            <Box>
                <Box my={"40vh"}>
                    
                    <Box>
                        <Typography variant="h1" fontSize={{ xs: "8vw", sm: 50, md: 70 }} fontWeight={700}>
                            Michał Kwiatkowski
                        </Typography>
                        <Typography variant="h4" fontSize={{ xs: "5vw", sm: 25, md: 35 }} fontWeight={500}>
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
                    </Box>
                </Box>
                <Projects />
            </Box>
        </Container>
    );
}
