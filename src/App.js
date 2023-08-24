import "./App.css";
import {Box} from "@mui/material";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const App = () => {
    return (
        <>
            <Search/>
            <Box sx = {{p: 5, display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
                <NavBar/>
                <div>Exercises</div>
                <div>Exercise details</div>
            </Box>
        </>
    );
};

export default App;
