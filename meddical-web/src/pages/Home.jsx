import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, MenuItem } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentsIcon from '@mui/icons-material/Payments';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HealingIcon from '@mui/icons-material/Healing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SectionHeading from "../components/SectionHeading";
import DoctorCard from "../Components/DoctorCard";
import NewsSlider from "../Components/NewsSlider";
import ContactCards from "../Components/ContactCards";








const services = [
    "Neurology",
    "Bones",
    "Oncology",
    "Otorhinolaryngology",
    "Ophthalmology",
    "Cardiovascular",
    "Pulmonology",
    "Renal Medicine",
    "Gastroenterology",
    "Urology",
    "Dermatology",
    "Gynaecology",
];

export default function Home() {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <Container maxWidth="xl" className='hero-section' >
                <Grid container spacing={2} className='hero-container'>
                    <Grid className='hero-text-box' size={{ xm: 12, sm: 12, md: 8, lg: 6 }}>
                        <Typography className='hero-subheading' varient='h6'>Caring for Life</Typography>
                        <Typography className='hero-heading' varient='h1'>Leading the Way <Typography variant='br' sx={{ display: { xs: 'none', sm: 'block' } }}></Typography> in Medical Excellence</Typography>
                        <Button className="hero-btn" size="large" sx={{ mt: 4, px: 3, py: 1 }}>Our Services</Button>
                    </Grid>
                    <Grid size={{ xm: 12, sm: 12, md: 8, lg: 6 }} className='hero-circle-top'></Grid>
                    <Grid size={{ xm: 12, sm: 12, md: 8, lg: 6 }} className='hero-circle-bottom'></Grid>
                    <Grid size={{ xm: 12, sm: 12 }} sx={{ display: { xs: 'none', md: 'flex' } }} className='hero-img'></Grid>
                </Grid>
            </Container >
            <Container maxWidth='xl' sx={{ display: { xs: 'none', md: 'block' } }} >
                <Grid container spacing={2} className='BookAppointment-section'>
                    <Grid size={4} className='BookAppointment-box1' sx={{ py: 3 }}>
                        <Box>
                            Book an Appointment &nbsp;&nbsp;<CalendarMonthIcon className='BookAppointment-icon' />
                        </Box>
                    </Grid>
                    <Grid size={4} className='BookAppointment-box2' sx={{ py: 3 }}>
                        <Box>
                            Book an Appointment &nbsp;&nbsp;<GroupsIcon className='BookAppointment-icon' />
                        </Box>
                    </Grid>
                    <Grid size={4} className='BookAppointment-box3' sx={{ py: 3 }}>
                        <Box>
                            Book an Appointment &nbsp;&nbsp;<PaymentsIcon className='BookAppointment-icon' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl'  >
                <Grid container className='meddical-section'>
                    <Grid size={12} sx={{ py: 3 }}>
                        <Typography className='meddical-subheading' variant='h6'>Welcome to Meddical</Typography>
                        <Typography className='meddical-heading' variant='h2'>A Great Place to Receive Care</Typography>
                    </Grid>
                    <Grid size={9} className='meddical-box'>
                        <Typography className='meddical-para' variant='h6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Typography>
                        <Button disableRipple disableTouchRipple disableFocusRipple className="meddical-btn" size="large" type='button' sx={{ mt: 2, px: 3, py: 1 }}>Learn more <ArrowRightAltIcon className='meddical-btn-icon' /></Button>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl' disableGutters sx={{ my: 5 }} >
                <Grid container className='poster-section'>
                    <Grid className='poster' size={12} sx={{ py: 3 }}></Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl'>
                <Grid container className='ourservices-section'>
                    <SectionHeading subHeading="Care you can believe in" heading="Our Services" />
                    <Grid size={12} container spacing={2} sx={{ py: 4 }} >
                        <Grid size={{ xm: 12, sm: 12, md: 4, lg: 3 }} container >
                            <Grid size={6} className='service-test-box' sx={{ p: 1 }}>
                                <HealingIcon className='ourservices-icon' />
                                <span>Free Checkup</span>
                            </Grid>
                            <Grid size={6} className='service-test-box text-box2' sx={{ py: 2, px: 1 }}>
                                <MonitorHeartIcon className='ourservices-icon' />
                                <span>Cardiogram</span>
                            </Grid>
                            <Grid size={6} className='service-test-box' sx={{ py: 2, px: 1 }}>
                                <LocalHospitalIcon className='ourservices-icon' />
                                <span>Dna Testing</span>
                            </Grid>
                            <Grid size={6} className='service-test-box' sx={{ py: 2, px: 1 }}>
                                <BloodtypeIcon className='ourservices-icon' />
                                <span>Blood Bank</span>
                            </Grid>
                            <Grid size={12} className='service-test-box text-box5' sx={{ py: { xs: 2, md: 0 }, px: 1 }}>
                                <span>Free Checkup</span>
                            </Grid>
                        </Grid>
                        <Grid size={{ xm: 12, md: 8, lg: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Grid sx={{ py: 3, px: 3 }}>
                                <h3 className='service-test-heading'>A passion for putting patients first.</h3>
                            </Grid>
                            <Grid container sx={{ px: 3 }}>
                                <Grid size={6}>
                                    <ul>
                                        <li className="service-test-points">A Passion for Healing</li>
                                        <li className="service-test-points">All our best</li>
                                        <li className="service-test-points">A Legacy of Excellence</li>
                                    </ul>
                                </Grid>
                                <Grid size={6}>
                                    <ul className='test-points-list'>
                                        <li className="service-test-points">5-Star Care</li>
                                        <li className="service-test-points">Believe in Us</li>
                                        <li className="service-test-points">Always Caring</li>
                                    </ul>
                                </Grid>
                            </Grid>
                            <Grid sx={{ px: 3 }}>
                                <p className='service-test-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                            </Grid>
                            <Grid sx={{ py: 2, px: 3 }}>
                                <p className='service-test-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                            </Grid>
                        </Grid>
                        <Grid sx={{ display: { xs: 'none', lg: 'flex' } }} container spacing={2} size={3} >
                            <Grid size={12} className='service-checkupImg'></Grid>
                            <Grid size={12} className='service-doctorImg'></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl' >
                <Grid size={12} sx={{ py: 5 }}>
                    <Typography className='meddical-subheading' variant='h6'>Always Caring</Typography>
                    <Typography className='meddical-heading' variant='h2'>Our Specialties</Typography>
                </Grid>
                <Grid container className="care-section" sx={{ pb: 5 }}>
                    {services.map((service, index) => (
                        <Grid
                            key={index}
                            size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                            className={`care-box ${selected === index ? "active" : ""}`}
                            sx={{ py: 4 }}
                            onClick={() => setSelected(index)}
                        >
                            <MonitorHeartIcon className="care-icon" />
                            <span>{service}</span>
                        </Grid>
                    ))}
                </Grid>
            </Container >
            <Container maxWidth='xl' disableGutters sx={{ my: 5 }}>
                <Grid container className="Appointment-section" sx={{ p: { xs: 3, md: 5 } }}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 0, md: 3 }, mb: { xs: 4, md: 0 } }}>
                        <Typography className='Appointment-heading' variant='h6'>Welcome to Meddical</Typography>
                        <Typography className='Appointment-para' variant='h6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} className='Appointment-form'>
                        <Box sx={{ p: 2 }}>
                            <Grid container spacing={1}>
                                <Grid size={{ xs: 12, md: 6 }}><TextField className="form-field" fullWidth label="Name" placeholder="Mayank Kumar" /> </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField className="form-field" select fullWidth label="Gender">
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}><TextField className="form-field" fullWidth label="Email" placeholder="Mayank@gmail.com" /></Grid>

                                <Grid size={{ xs: 12, md: 6 }}> <TextField className="form-field" fullWidth label="Phone" placeholder="(237) 681-812-255" /></Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField className="form-field" fullWidth label="Date" placeholder="mm/dd/yyyy" InputLabelProps={{ shrink: true }} />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField className="form-field" fullWidth label="Time" placeholder="--:-- --" InputLabelProps={{ shrink: true }} />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField className="form-field" select fullWidth label="Doctor">
                                        <MenuItem value="doctor1">Dr. John Smith</MenuItem>
                                        <MenuItem value="doctor2">Dr. Sarah Wilson</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField className="form-field" select fullWidth label="Department">
                                        <MenuItem value="cardiology">Cardiology</MenuItem>
                                        <MenuItem value="neurology">Neurology</MenuItem>
                                        <MenuItem value="dental">Dental</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid size={12}>
                                    <TextField className="form-field" fullWidth multiline rows={4} label="Message" />
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
                </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ py: 5 }}>
                <SectionHeading subHeading="Trusted Care" heading="Our Doctors" />
                <DoctorCard />
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