import {Box, Button, Stack, TextField, Typography} from "@mui/material";

const Search = () => {
    return (
        <Box sx = {{p: 5, width: "500", maxWidth: "100%"}}>
            <Stack direction = "row" justifyContent = "center" alignItems = "center" spacing = {2}>
                <TextField fullWidth label = "Find your exercises" id = "search-bar"/>
                <Button size="large" variant = "contained">
                    <Typography fontSize = "24px" fontWeight = "bold" textTransform = "capitalize" color = "#3A13242">
                        SEARCH
                    </Typography>
                </Button>
            </Stack>
        </Box>
    );
};

export default Search;
