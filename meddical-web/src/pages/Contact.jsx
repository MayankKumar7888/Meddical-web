import { Container, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Heading from "../components/Heading";
import NewsSlider from "../components/NewsSlider";
import PageHero from "../components/PageHero";



export default function Contact() {
    const [selected, setSelected] = useState(1);
    const services = [
        {
            icon: <PhoneInTalkIcon className="contactCard-icon" />,
            title: "Emergency",
            subtitle1: "(237) 681-812-255",
            subtitle2: "(237) 666-331-894"
        },
        {
            icon: <LocationOnIcon className="contactCard-icon" />,
            title: "Location",
            subtitle1: "0123 Some place",
            subtitle2: "9876 Some country"
        },
        {
            icon: <MailIcon className="contactCard-icon" />,
            title: "Email",
            subtitle1: "fildineeesoe@gmil.com",
            subtitle2: "myebstudios@gmail.com"
        },
        {
            icon: <AccessTimeIcon className="contactCard-icon" />,
            title: "Working Hours",
            subtitle1: "Mon-Sat 09:00-20:00",
            subtitle2: "Sunday Emergency only"
        }
    ];
    return (
        <>
            <Container maxWidth="xl" sx={{ py: 10 }} className="page-hero-section">
                <PageHero
                    title="Our Contacts"
                    breadcrumbs="Contact"
                />
            </Container>

            <Container maxWidth="xl" sx={{ py: 4 }}>
                <Box
                    sx={{ width: "100%", height: "450px", overflow: "hidden", borderRadius: "12px" }}>
                    <iframe title="Google Map" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        src="https://www.google.com/maps?q=Haldwani,Uttarakhand&output=embed"
                    />
                </Box>
            </Container>

            <Container maxWidth='xl' sx={{ py: 5 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Typography className='contactpage-subheading' variant='h6'>Care you can believe in</Typography>
                        <Typography className='contactpage-heading' variant='h2' sx={{ mb: 3 }}>Our Services</Typography>
                        <Box sx={{ p: 2 }} className='Appointment-form'>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12, md: 6 }}><TextField className="form-field" fullWidth label="Name" placeholder="Mayank Kumar" /> </Grid>
                                <Grid size={{ xs: 12, md: 6 }}><TextField className="form-field" fullWidth label="Email" placeholder="Mayank@gmail.com" /></Grid>

                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField className="form-field" fullWidth label="Subject" placeholder="Enter subject" InputLabelProps={{ shrink: true }} />
                                </Grid>

                                <Grid size={12}>
                                    <TextField className="form-field" fullWidth multiline rows={7} label="Message" />
                                </Grid>

                                <Grid size={12}>
                                    <Button className="form-field form-btn" variant="contained" size="large" fullWidth
                                        sx={{ px: 5, py: 1.5 }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid container size={{ xs: 12, md: 6 }} className="contactCard-section" spacing={2} >
                        {services.map((service, index) => (
                            <Grid key={index} size={{ xs: 10, sm: 6 }}
                                className={`contactCard-box ${selected === index ? "active" : ""}`}
                                sx={{ minHeight: 240, boxShadow: 4 }}
                                onClick={() => setSelected(index)}>
                                {service.icon}
                                <span className='contactCard-heading'>{service.title}</span>
                                <span className='contactCard-subheading1'>{service.subtitle1}</span>
                                <span className='contactCard-subheading2'>{service.subtitle2}</span>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container >

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Heading subHeading="Better information, Better health" heading="News" />
                <NewsSlider />
            </Container >

        </>
    )
}