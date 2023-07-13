import { Box, Card, CardContent, CardMedia } from "@mui/material"

export default function MeetTeamLg({ profile }) {
    return (
        <Card
            sx={{
                display: "flex",
                my: "30px",
                borderRadius: "30px",
                filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.15))",
                boxShadow: "none",
            }}
        >
            <CardMedia
                component="img"
                sx={{ flex: 1 }}
                image={profile.img}
                alt={profile.name}
            />
            <Box
                sx={{ display: "flex", flexDirection: "column", p: 3, flex: 2 }}
            >
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <p className="fs-3 fw-bold">{profile.name}</p>
                    <p className="fs-6 fw-light ">
                        {profile.title.join("   ·   ")}
                    </p>
                    <p className="fs-6 fw-light f"> {profile.describe}</p>
                </CardContent>
            </Box>
        </Card>
    )
}
