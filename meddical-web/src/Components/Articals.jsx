import React from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

export default function Articals({ articals = [] }) {
    return (
        <>
            {articals.map((artical) => (
                <Card
                    key={artical.id}
                    sx={{
                        p: 2,
                        mb: 2,
                    }}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ xs: 3 }}>
                            <CardMedia
                                component="img"
                                image={artical.image}
                                alt="Article"
                                sx={{
                                    width: "100%",
                                    borderRadius: 1,
                                    objectFit: "cover",
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 9 }}>
                            <Typography
                                className="artical-date"
                                variant="body2"
                                sx={{ mb: 1 }}
                            >
                                {artical.date}
                            </Typography>

                            <Typography
                                variant="h6"
                                className="artical-heading"
                            >
                                {artical.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            ))}
        </>
    );
}