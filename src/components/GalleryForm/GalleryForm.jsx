import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@material-ui/core";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

function GalleryForm () {
    return (
        <div className="App">

        <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
        <form>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Image URL"
                variant="outlined"
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Image description"
                variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary">
                Save
            </Button>
        </form>
    </div>
        )
};

export default GalleryForm;