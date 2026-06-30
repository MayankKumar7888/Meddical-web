import { Grid, Typography } from "@mui/material";

export default function Heading({ subHeading, heading }) {
    return (
        <Grid size={12} sx={{ pb: 5 }}>
            <Typography className="meddical-subheading" variant="h6">
                {subHeading}
            </Typography>

            <Typography className="meddical-heading" variant="h2">
                {heading}
            </Typography>
        </Grid>
    );
}