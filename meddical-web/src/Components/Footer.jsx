import Grid from '@mui/material/Grid'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { yellow } from '@mui/material/colors';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Container, Typography } from '@mui/material';



export default function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Enter a valid email");
            return;
        }

        setError("");

        console.log("Submitted Email:", email);

        // API Call Here

        alert("Email submitted successfully!");

        setEmail("");
    };


    return (
        <>
            <Container maxWidth="xl" disableGutters>
                <Grid container spacing={2} className="footer">
                    <Grid item className="box1" size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: { xs: 'start', md: 'start' } }}>
                        <h4 className='footer-logo' noWrap>
                            <span className='footer-logo-text'>Med</span><span>dical</span>
                        </h4>
                        <p className='link'>Leading the Way in Medical Execellence, Trusted Care.</p>
                    </Grid>
                    <Grid item className="box2" size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: { xs: 'start', md: 'start' } }}>
                        <Box className='heading' sx={{ mb: { xs: 1, md: 3 }, mt: { xs: 3, md: 0 } }}>Important Links</Box>
                        <NavLink to="/appointment" className='link'>Appointment</NavLink>
                        <NavLink to="/doctor" className='link'>Doctors</NavLink>
                        <NavLink to="/services" className='link'>Services</NavLink>
                        <NavLink to="/about" className='link'>About Us</NavLink>
                    </Grid>
                    <Grid item className="box3" size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: { xs: 'start', md: 'start' } }}>
                        <Box className='heading' sx={{ mb: { xs: 1, md: 3 }, mt: { xs: 3, md: 0 } }}>Contact Us</Box>
                        <NavLink to="#" className='link'>Call: (237) 681-812-255</NavLink>
                        <NavLink to="#" className='link'>Email:  fildineesoe@gmail.com</NavLink>
                        <NavLink to="#" className='link'>Address: 0123 Some place</NavLink>
                        <NavLink to="#" className='link'>Country: India</NavLink>
                    </Grid>
                    <Grid item className="box4" size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: { xs: 'start', md: 'start' }, flexDirection: 'column' }}>
                        <Box className='heading' sx={{ mt: { xs: 3, md: 0 } }}>Newsletter</Box>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ position: "relative", width: "100%", mt: { xs: 2, md: 3 } }}>
                                <TextField className="footer-input" fullWidth
                                    placeholder="meddical@gmail.com" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) { setError(""); }
                                    }}
                                    error={!!error}
                                    sx={{
                                        "& .MuiOutlinedInput-root": { pr: "60px", },
                                    }}
                                />
                                <IconButton type="submit" className='footer-email-btn'
                                    disableRipple disableFocusRipple >
                                    <SendIcon />
                                </IconButton>
                            </Box>

                            {error && (
                                <Typography sx={{ color: "red", mt: 1, display: "block" }}>
                                    {error}
                                </Typography>
                            )}
                        </form>
                    </Grid>
                    <Divider className='line' />
                    <Grid item className="box5" size={{ xs: 12, md: 12 }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 0 } }}>
                        <div className='box1'>
                            <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                        </div>
                        <div className='box2'>
                            <span><LinkedInIcon className='media-icon' /></span>
                            <span><FacebookIcon className='media-icon' /></span>
                            <span><InstagramIcon className='media-icon' /></span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


