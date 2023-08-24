import "./App.css";
import {Box} from "@mui/material";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <Box sx = {{pl: 15, pt: 15, display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <NavBar/>
            <div>Exercises</div>
            <div>Exercise details</div>
        </Box>
    );
};

export default App;
