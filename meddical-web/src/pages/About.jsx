import Heading from "../components/Heading"
import Doctorcard from "../components/Doctorcard"
import Newsslider from "../components/Newsslider"
import Contactcards from "../components/Contactcards"

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from "react-router-dom"
import Pagehero from "../components/Pagehero"

import { Box, IconButton, Grid, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";



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

export default function About() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(
                (prev) => (prev + 1) % testimonials.length
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Container maxWidth="xl" sx={{ py: 10 }} className="page-hero-section">
                <Pagehero
                    title="About Us"
                    breadcrumbs="About"
                />
            </Container>

            <Container maxWidth='xl'>
                <Grid container sx={{ pt: 8, pb: 4 }}>
                    <Grid size={{ xs: 12, sm: 12, md: 5 }} sx={{ minHeight: { xs: 400, sm: 600, md: 'auto' } }} container spacing={2} >
                        <Grid size={12} className='about-checkupImg'></Grid>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 7 }} container spacing={2} sx={{ py: 4 }} >
                        <Grid size={12}>
                            <Grid sx={{ py: 3, px: { xs: 0, md: 3 } }}>
                                <h5 className='about-test-subheading'>Welcome to Hospital name</h5>
                                <h3 className='about-test-heading'>A passion for putting patients first.</h3>
                            </Grid>
                            <Grid container sx={{ px: { xs: 0, md: 3 }, mb: 3 }}>
                                <Grid size={6}>
                                    <ul>
                                        <li className="about-test-points">A Passion for Healing</li>
                                        <li className="about-test-points">All our best</li>
                                        <li className="about-test-points">A Legacy of Excellence</li>
                                    </ul>
                                </Grid>
                                <Grid size={6}>
                                    <ul className='about-points-list'>
                                        <li className="about-test-points">5-Star Care</li>
                                        <li className="about-test-points">Believe in Us</li>
                                        <li className="about-test-points">Always Caring</li>
                                    </ul>
                                </Grid>
                            </Grid>
                            <Grid sx={{ px: { xs: 0, md: 3 } }}>
                                <p className='about-test-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                            </Grid>
                            <Grid sx={{ py: 2, px: { xs: 0, md: 3 } }}>
                                <p className='about-test-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                            </Grid>
                        </Grid>
                    </Grid>
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
                <Heading subHeading="Trusted Care" heading="Our Doctors" />
                <Doctorcard />
            </Container >

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Heading subHeading="Better information, Better health" heading="News" />
                <Newsslider />
            </Container >

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Heading subHeading="Get in touch" heading="Contact" />
                <Contactcards />
            </Container >
        </>
    )
}