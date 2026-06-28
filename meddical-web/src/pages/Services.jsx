import Heading from "../components/Heading";
import ContactCards from "../components/ContactCards"
import { Container } from "@mui/material"

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PageHero from "../components/PageHero"
import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Doctor5 from '../assets/doctor5.png'
import HealingIcon from '@mui/icons-material/Healing';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Services() {
    const cardData = [
        {
            id: 1,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        },
        {
            id: 2,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        },
        {
            id: 3,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        },
        {
            id: 4,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        },
        {
            id: 5,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        },
        {
            id: 6,
            image: Doctor5,
            title: "Free Checkup",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        }
    ];


    return (
        <>
            <Container maxWidth="xl" sx={{ py: 10 }} className="page-hero-section">
                <PageHero
                    title="Our Services"
                    breadcrumbs="Services"
                />
            </Container>

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Grid container spacing={2}>
                    {cardData.map((card) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.id} >
                            <Card className="checkup-card" >
                                <HealingIcon className="checkup-icon" sx={{ top: { xs: "50.9%", sm: "50.9%", md: "50.9%", lg: "52.9%" } }} />
                                <CardMedia
                                    sx={{ height: 280 }}
                                    image={card.image}
                                    title="CheckUp"
                                />
                                <CardContent>
                                    <Typography className="checkup-heading" gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography className="checkup-para" variant="body2" sx={{ color: 'text.secondary' }}>
                                        {card.para}
                                    </Typography>
                                </CardContent>
                                <CardActions disableFocusRipple disableRipple disableFocusRipple>
                                    <Button className="checkup-link" size="small" disableRipple disableFocusRipple>Learn More&nbsp;<ArrowRightAltIcon className="checkup-link-icon" /></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Heading subHeading="Get in touch" heading="Contact" />
                <ContactCards />
            </Container >
        </>
    )
}