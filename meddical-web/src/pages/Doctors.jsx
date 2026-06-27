import SectionHeading from "../components/SectionHeading"
import PageHero from "../Components/PageHero"
import NewsSlider from "../Components/NewsSlider"
import ContactCards from "../Components/ContactCards"

import { Box, IconButton, Grid, Container, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Doctor1 from "../assets/DoctorCard1.png";
import Doctor2 from "../assets/DoctorCard2.png";
import Doctor3 from "../assets/DoctorCard3.png";
import CardMedia from '@mui/material/CardMedia';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';




const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur.Consequat faucibus porttitor enim et.",
        name: "John Doe",
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur.Consequat faucibus enim et.",
        name: "Jane Smith",
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur.",
        name: "Michael Johnson",
    },
];

const cards = [
    {
        id: 1,
        subtitle: "Doctor's Name",
        title: "Neurology",
        description: "Expert neurological care and treatment.",
        img: Doctor1,
    },
    {
        id: 2,
        subtitle: "Doctor's Name",
        title: "Cardiology",
        description: "Advanced heart care and diagnostics.",
        img: Doctor2,
    },
    {
        id: 3,
        subtitle: "Doctor's Name",
        title: "Orthopedics",
        description: "Comprehensive bone and joint care.",
        img: Doctor3,
    },
    {
        id: 4,
        subtitle: "Doctor's Name",
        title: "Neurology",
        description: "Expert neurological care and treatment.",
        img: Doctor1,
    },
    {
        id: 5,
        subtitle: "Doctor's Name",
        title: "Cardiology",
        description: "Advanced heart care and diagnostics.",
        img: Doctor2,
    },
    {
        id: 6,
        subtitle: "Doctor's Name",
        title: "Orthopedics",
        description: "Comprehensive bone and joint care.",
        img: Doctor3,
    },
];


export default function Doctors() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(
                (prev) => (prev + 1) % testimonials.length
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const activeIndex = 1;

    return (
        <>
            <Container maxWidth="xl" sx={{ py: 10 }} className="page-hero-section">
                <PageHero
                    title="Our Doctors"
                    breadcrumbs="Doctors"
                />
            </Container>
            <Container maxWidth="xl" sx={{ py: 8 }}>
                <Grid container spacing={3}>
                    {cards.map((card, index) => (
                        <Grid size={{ xs: 12, md: 4 }}>
                            <CardMedia component="img" image={card.img} alt={cards.title} />
                            <Box className="doctorCard-box">
                                <div className="doctorCard-subheading" sx={{ mt: 1 }}>  {card.subtitle}</div>
                                <div className="doctorCard-heading">  {card.title}</div>
                                <div className="doctorCard-icon-box">
                                    <LinkedInIcon className="doctorCard-icon" />
                                    <FacebookIcon className="doctorCard-icon" />
                                    <InstagramIcon className="doctorCard-icon" />
                                </div>
                            </Box>
                            <Box className="doctorCard-btn">View Profile</Box>
                        </Grid>
                    ))}
                </Grid>
            </Container >



            <Container maxWidth="xl" className="quote-section" sx={{ py: 3, backgroundColor: 'blue' }}>
                <Box sx={{ textAlign: "center", px: { xs: 3, md: 5 } }}>
                    <Typography variant="h4">
                        <FormatQuoteIcon className="quote-icon" />
                    </Typography>

                    <Typography className="quote-para" variant="body1" sx={{ mb: 4 }}>
                        {testimonials[activeSlide].text}
                    </Typography>
                    <Typography className="quote-name" variant="h6"> {testimonials[activeSlide].name}</Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }} >
                        {testimonials.map((_, index) => (
                            <IconButton key={index} size="small" onClick={() => setActiveSlide(index)}>
                                <FiberManualRecordIcon
                                    sx={{ fontSize: 16, color: activeSlide === index ? "#BFD2F8" : "#D9D9D9" }} />
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Container >

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <SectionHeading subHeading="Better information, Better health" heading="News" />
                <NewsSlider />
            </Container >

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <SectionHeading subHeading="Get in touch" heading="Contact" />
                <ContactCards />
            </Container >
        </>
    )
}