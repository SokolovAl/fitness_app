
import {Box, Button, Stack, Typography} from "@mui/material";
import fetchBodyPartsData from "../utils/fetchBodyPartsData";
import {useEffect, useState} from "react";

const NavBar = () => {
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        fetchBodyPartsData()
            .then(fetchedBodyParts => setBodyParts(fetchedBodyParts))
            .catch(error => console.error("Error fetching body parts data:", error));
    }, []);

    return (
        <Box sx = {{p: 0, m: 0, width: 200, height: "100vh"}}>
            <Stack spacing = {2}>
                {bodyParts.map((bodyPart) => (
                    <Button size = "large" variant = "contained">
                        <Typography fontSize = "24px" fontWeight = "bold" textTransform = "capitalize"
                                    color = "#3A13242">
                            {bodyPart}
                        </Typography>
                    </Button>
                ))}
            </Stack>
        </Box>
    );
};

export default NavBar;
