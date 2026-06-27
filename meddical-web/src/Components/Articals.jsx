// import React from "react";
// import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import Doctor3 from "../assets/doctorcard3.png";



// export default function Articals({ articals }) {
//     return (
//         <>
//             <Box sx={{ minHeight: "80vh", top: 20, position: "sticky", bgcolor: "#f5f5f5", p: 2, borderRight: "1px solid #ddd" }} >
//                 {articals.map((artical) => (
//                     <Card sx={{ p: 2 }} key={artical.id} >
//                         <Grid container spacing={2} alignItems="center">
//                             <Grid size={{ xs: 4 }}>
//                                 <CardMedia component="img" image={artical.image} alt="Article"
//                                     sx={{ width: "100%", height: 120, borderRadius: 1, objectFit: "cover" }} />
//                             </Grid>

//                             <Grid size={{ xs: 8 }}>
//                                 <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//                                     {artical.date}
//                                 </Typography>

//                                 <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.4 }} >
//                                     {artical.title}
//                                     <br />
//                                     {artical.subtitle}
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                     </Card>
//                 ))}
//             </Box>
//         </>
//     );
// }

import React from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

export default function Articals({ articals = [] }) {
    return (
        // <Box
        //     sx={{
        //         // minHeight: "80vh",
        //         position: "sticky",
        //         top: 20,
        //         bgcolor: "#f5f5f5",
        //         p: 2,
        //         borderRight: "1px solid #ddd",
        //     }}
        // >
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
                                    // height: 120,
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
                            // sx={{
                            //     fontWeight: 600,
                            //     lineHeight: 1.4,
                            // }}
                            >
                                {artical.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            ))}
            {/* </Box> */}
        </>
    );
}