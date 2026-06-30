import { useState, useEffect } from "react";
import { Box, Grid, Card, CardContent, Typography, IconButton, Container, } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MediaCard from "../assets/mediaCard.png";
import MediaCard1 from "../assets/mediaCard1.png";
import MediaCard2 from "../assets/mediaCard2.png";
import { CardMedia } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

const cards = [
    {
        id: 1,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard
    },
    {
        id: 2,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard
    },
    {
        id: 3,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard
    },
    {
        id: 4,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard
    },
    {
        id: 5,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard1
    },
    {
        id: 6,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard1
    },
    {
        id: 7,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard1
    },
    {
        id: 8,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard1
    },
    {
        id: 9,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard2
    },
    {
        id: 10,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard2
    },
    {
        id: 11,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard2
    },
    {
        id: 12,
        subtitle: "Monday 05, September 2021 | By Author",
        title: "This Article’s Title goes Here, but not too long.",
        img: MediaCard2
    },
];

export default function NewsSlider() {
    const cardsPerSlide = 4;

    const slides = [];
    for (let i = 0; i < cards.length; i += cardsPerSlide) {
        slides.push(cards.slice(i, i + cardsPerSlide));
    }

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <Box>
            <Grid container spacing={3} className="newsSlider-box" sx={{ px: { xs: 0, sm: 3 } }}>
                {slides[activeSlide].map((card) => (
                    <Grid size={{ xs: 10, sm: 10, md: 6 }} key={card.id} sx={{ boxShadow: 8, borderRadius: 5 }}>
                        <Card sx={{ transition: "0.3s" }} >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                                <CardMedia component="img" sx={{ width: { xs: '100%', md: 180 } }} image={card.img} alt="Doctor" />
                                <CardContent>
                                    <p className="news-subheading">{card.subtitle}</p>
                                    <h3 className="news-heading">{card.title}</h3>
                                    <div className="news-icon-box">
                                        <span className="news-icon"><VisibilityIcon />68</span>
                                        <span className="news-icon"><FavoriteIcon />86</span>
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1, }} >
                {slides.map((_, index) => (
                    <IconButton key={index} size="small" onClick={() => setActiveSlide(index)} >
                        <FiberManualRecordIcon fontSize="small" color={activeSlide === index ? "primary" : "disabled"} />
                    </IconButton>
                ))}
            </Box>
        </Box>
    );
}


