import { useState } from 'react';
import Grid from '@mui/material/Grid';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
export default function Contactcards() {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <Grid container className="contactCard-section" spacing={3}>
                {services.map((service, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 10, sm: 6, md: 3, lg: 3 }}
                        className={`contactCard-box ${selected === index ? "active" : ""}`}
                        sx={{ aspectRatio: 1 / 1, boxShadow: 4 }}
                        onClick={() => setSelected(index)}
                    >
                        {service.icon}
                        <span className='contactCard-heading'>{service.title}</span>
                        <span className='contactCard-subheading1'>{service.subtitle1}</span>
                        <span className='contactCard-subheading2'>{service.subtitle2}</span>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}