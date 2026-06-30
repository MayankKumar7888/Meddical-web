import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography, Container } from "@mui/material";

export default function PageHero({ title, breadcrumbs }) {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" className="page-hero-linkbox">
                <NavLink to="/home" className="page-hero-link">Home</NavLink>
                <Typography>{breadcrumbs}</Typography>
            </Breadcrumbs>
            <h2 className="page-hero-heading">{title}</h2>
        </div>
    );
}