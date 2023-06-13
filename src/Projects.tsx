import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Container, Grid, Stack, Typography } from "@mui/material";

export default function Projects() {
    return (
        <Box mt={5}>
            <Typography variant="h1" fontSize={{ xs: "8vw", sm: 50, md: 70 }} fontWeight={700}>
                Realizacje
            </Typography>
            <Box sx={{ flexGrow: 1 }} mt={3}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} alignItems={"stretch"}>
                    <Grid item xs={2} sm={4} md={4} >
                        <Card sx={{minHeight: "100%", position: 'relative'}}>
                        <CardMedia sx={{ height: 350 }} image="/kk.svg" title="logo Lewicy Bydgoszcz"/>
                            <CardContent>
                                <Typography variant="h4" fontWeight={800}>villageWEB</Typography>
                                <Typography mt={2} variant="body1">
                                Projekt zakłada stworzenie prostej, przejrzystej i spójnej strony internetowej dla sołectwa w Gminie Białe Błota. Elementem powiązanym do projektu jest utworzenie strony na Facebooku dla sołectwa oraz prowadzenie serwisu z aktualnymi dokumentami i wnioskami.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginTop:"1.8rem"}}>
                                <Button sx={{position: 'absolute', left: 10, bottom: 10}} color="inherit" target="_blank" href="https://web.kwiatkowskimichal.tech/" endIcon={<OpenInNew />}>Link do strony</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{minHeight: "100%", position: 'relative'}}>
                        <CardMedia sx={{ height: 350 }} image="/mo.png" title="logo Mateusza Orzechowskiego"/>
                            <CardContent>
                                <Typography variant="h4" fontWeight={800}>Mateusz Orzechowski</Typography>
                                <Typography mt={2} variant="body1">
                                    W 2023 roku podjąłem się zadania prowadzenia mediów społecznościowych Mateusza Orzechowskiego, młodego aktywisty Lewicy, który z pewnością zrobi wiele dla realizacji postepowych postulatów. Głownymi obszarami moich działań było utworzenie poniższej strony internetowej oraz identyfikacji wizualnej
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginTop:"1.8rem"}}>
                                <Button sx={{position: 'absolute', left: 10, bottom: 10}} color="inherit" target="_blank" href="https://orzechowski2023.pl/" endIcon={<OpenInNew />}>Link do strony</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={{minHeight: "100%", position: 'relative'}}>
                            <CardMedia sx={{ height: 350 }} image="/lewica.svg" title="logo Lewicy Bydgoszcz"/>
                            <CardContent>
                                <Typography variant="h4" fontWeight={800}>Lewica Bydgoszcz</Typography>
                                <Typography mt={2} variant="body1">
                                    Od 2019 roku jestem związany z Lewicą (wcześniej Wiosną), dla której tworzę grafiki i od 2023 zajmuję się mediami społecznościowymi lokalnej Lewicy. W przeszłości robiłem także grafiki dla Młodej Lewicy (ówczesne Przedwiośnie)
                                </Typography>
                            </CardContent>
                            <CardActions sx={{marginTop:"1.8rem"}}>
                                <Button sx={{position: 'absolute', left: 10, bottom: 10}} color="inherit" target="_blank" href="https://lewica.org.pl/" endIcon={<OpenInNew />}>Strona Lewicy</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}