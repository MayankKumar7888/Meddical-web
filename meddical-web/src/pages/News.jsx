import { Container } from "@mui/material";
import {
    Grid,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import DoctorCard2 from "../assets/DoctorCard2.png";
import DoctorCard3 from "../assets/DoctorCard3.png";
import doctor6 from "../assets/doctor6.webp";
import doctor7 from "../assets/doctor7.jpg";
import doctor8 from "../assets/doctor8.jpg";
import doctor9 from "../assets/doctor9.jpg";
import doctor10 from "../assets/doctor10.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Articals from "../components/Articals";
import Heading from "../components/Heading";
import ContactCards from "../components/ContactCards";
import PageHero from "../components/PageHero";
import MedicalCard from "../assets/MedicalCard.png";
// import MedicalCard from "../assets/Medi"
import MedicalCard1 from "../assets/MedicalCard1.png";
import MedicalCard2 from "../assets/MedicalCard2.png";

export default function News() {
    const newsData = [
        {
            id: 1,
            image: doctor6,
            date: "Monday 05, September 2021",
            author: "By Author",
            views: 68,
            likes: 86,
            title: "A passion for putting patients first",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
        },
        {
            id: 2,
            image: doctor7,
            date: "Tuesday 06, September 2021",
            author: "By Author",
            views: 75,
            likes: 92,
            title: "Quality healthcare for everyone",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
        },
        {
            id: 3,
            image: doctor8,
            date: "Monday 05, September 2021",
            author: "By Author",
            views: 68,
            likes: 86,
            title: "A passion for putting patients first",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....",
        },
        {
            id: 4,
            image: doctor9,
            date: "Tuesday 06, September 2021",
            author: "By Author",
            views: 75,
            likes: 92,
            title: "Quality healthcare for everyone",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
        },
    ];

    const articals = [
        {
            id: 1,
            image: DoctorCard3,
            date: "Monday 05, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
        {
            id: 2,
            image: doctor10,
            date: "Tuesday 06, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
        {
            id: 3,
            image: MedicalCard,
            date: "Wednesday 07, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
        {
            id: 4,
            image: DoctorCard2,
            date: "Thursday 08, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
        {
            id: 5,
            image: MedicalCard1,
            date: "Friday 09, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
        {
            id: 6,
            image: MedicalCard2,
            date: "Saturday 10, September 2021",
            title: "This Article's Title goes Here, but not too long.",
        },
    ];
    return (
        <>
            <Container maxWidth="xl" sx={{ py: 10 }} className="page-hero-section">
                <PageHero
                    title="Blog Posts"
                    breadcrumbs="News"
                />
            </Container>
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ py: 5 }} >
                    <Grid size={{ xs: 12, md: 8 }}>
                        {newsData.map((news) => (
                            <Box sx={{ borderRadius: 3 }}>
                                <CardMedia component="img" height="500" image={news.image} alt={news.title} />
                                <CardContent>
                                    <Box className="news-inner-box" sx={{ gap: 2, mb: 2 }}>
                                        <Box className="news-icon-box">
                                            <PersonIcon className="news-hero-icon" fontSize="small" />
                                            <Typography className="news-hero-text" variant="caption">{news.date}</Typography>
                                        </Box>
                                        <Box className="news-icon-box">
                                            <PersonIcon className="news-hero-icon" fontSize="small" />
                                            <Typography className="news-hero-text" variant="caption">{news.author}</Typography>
                                        </Box>
                                        <Box className="news-icon-box">
                                            <VisibilityIcon className="news-hero-icon" fontSize="small" />
                                            <Typography className="news-hero-text" variant="caption">{news.views}</Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <FavoriteIcon className="news-hero-icon" fontSize="small" />
                                            <Typography className="news-hero-text" variant="caption">{news.likes}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography className="news-hero-heading" variant="h6" sx={{ mb: 2 }}>{news.title}</Typography>
                                    <Typography className="news-hero-para" variant="body2" sx={{ mb: 3 }}>{news.description}</Typography>
                                    <Button className="news-btn" sx={{ px: 3, py: 2 }} size="small" disableRipple disableFocusRipple>Learn More&nbsp;<ArrowRightAltIcon className="news-btn-icon" /></Button>
                                </CardContent>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ top: 20, position: "sticky", bgcolor: "#f5f5f5", p: 2, borderRight: "1px solid #ddd" }} >
                            <Typography className='contactpage-heading' variant='h2' sx={{ mb: 3 }}>Recent Posts</Typography>
                            <Articals articals={articals} />
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box>
                                    <Typography className='contactpage-heading' variant='h2' sx={{ my: 3 }}>Categories</Typography>
                                </Box>
                                <Box className="artical-categorie-box" sx={{ gap: 1, px: 4, mb: 1 }}>
                                    <Typography className="artical-categorie">Surgery</Typography>
                                    <Box className="artical-categorie-icon">3</Box>
                                </Box>
                                <Box className="artical-categorie-box" sx={{ gap: 1, px: 4, mb: 1 }}>
                                    <Typography className="artical-categorie">Health Care</Typography>
                                    <Box className="artical-categorie-icon">8</Box>
                                </Box>
                                <Box className="artical-categorie-box" sx={{ gap: 1, px: 4, mb: 1 }}>
                                    <Typography className="artical-categorie">Medical</Typography>
                                    <Box className="artical-categorie-icon">5</Box>
                                </Box>
                                <Box className="artical-categorie-box" sx={{ gap: 1, px: 4, mb: 1 }}>
                                    <Typography className="artical-categorie">Professional</Typography>
                                    <Box className="artical-categorie-icon">10</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Heading subHeading="Get in touch" heading="Contact" />
                <ContactCards />
            </Container >
        </>
    );
}



