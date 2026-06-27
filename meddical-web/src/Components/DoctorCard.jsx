import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Doctor1 from "../assets/DoctorCard1.png";
import Doctor2 from "../assets/DoctorCard2.png";
import Doctor3 from "../assets/DoctorCard3.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const cards = [
    {
        subtitle: "Doctor’s Name",
        title: "Neurology",
        description: "Expert neurological care and treatment.",
        img: Doctor1
    },
    {
        subtitle: "Doctor’s Name",
        title: "Cardiology",
        description: "Advanced heart care and diagnostics.",
        img: Doctor2
    },
    {
        subtitle: "Doctor’s Name",
        title: "Orthopedics",
        description: "Comprehensive bone and joint care.",
        img: Doctor3
    }
];

export default function DoctorCard() {
    const [active, setActive] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) =>
                prev === cards.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const left = active === 0 ? cards.length - 1 : active - 1;
    const right = active === cards.length - 1 ? 0 : active + 1;
    return (
        <>
            <Grid container className="doctorCard-slider" sx={{ gap: 3, py: { xs: 0, md: 3 }, flexWrap: { xs: "wrap", md: "nowrap" } }}>
                <Grid className="doctorCard" size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' }, opacity: 0.8, transform: "scale(0.9)" }}>
                    <CardMedia component="img" image={cards[left].img} alt={cards[left].title} />
                    <Box className="doctorCard-box">
                        <div className="doctorCard-subheading" sx={{ mt: 1 }}>  {cards[left].subtitle}</div>
                        <div className="doctorCard-heading">  {cards[left].title}</div>
                        <div className="doctorCard-icon-box">
                            <LinkedInIcon className="doctorCard-icon" />
                            <FacebookIcon className="doctorCard-icon" />
                            <InstagramIcon className="doctorCard-icon" />
                        </div>
                    </Box>
                    <Box className="doctorCard-btn">View Profile</Box>
                </Grid>
                <Grid className="doctorCard" size={{ xs: 12, md: 4 }} sx={{ transform: { xs: 'scale(0.9)', md: 'scale(1.05)' }, boxShadow: 8 }}>
                    <CardMedia component="img" image={cards[active].img} alt={cards[active].title} />
                    <Box className="doctorCard-box">
                        <div className="doctorCard-subheading" sx={{ mt: 1 }}>  {cards[active].subtitle}</div>
                        <div className="doctorCard-heading">  {cards[active].title}</div>
                        <div className="doctorCard-icon-box">
                            <LinkedInIcon className="doctorCard-icon" />
                            <FacebookIcon className="doctorCard-icon" />
                            <InstagramIcon className="doctorCard-icon" />
                        </div>
                    </Box>
                    <Box className="doctorCard-btn">View Profile</Box>
                </Grid>
                <Grid className="doctorCard" size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' }, opacity: 0.8, transform: "scale(0.9)" }} >
                    <CardMedia component="img" image={cards[right].img} alt={cards[right].title} />
                    <Box className="doctorCard-box">
                        <div className="doctorCard-subheading" sx={{ mt: 1 }}>  {cards[right].subtitle}</div>
                        <div className="doctorCard-heading">  {cards[right].title}</div>
                        <div className="doctorCard-icon-box">
                            <LinkedInIcon className="doctorCard-icon" />
                            <FacebookIcon className="doctorCard-icon" />
                            <InstagramIcon className="doctorCard-icon" />
                        </div>
                    </Box>
                    <Box className="doctorCard-btn">View Profile</Box>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 1 }}>
                {cards.map((_, index) => (
                    <Box key={index} onClick={() => setActive(index)}
                        sx={{
                            width: active === index ? 14 : 10,
                            height: active === index ? 14 : 10,
                            borderRadius: "50%",
                            cursor: "pointer",
                            backgroundColor:
                                active === index ? "#159EEC" : "#BFD2F8",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </Box>
        </>
    )
}