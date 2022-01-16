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
import {useState} from 'react';


function GalleryForm ({addNewPic}) {
    const [newImage, setNewImage] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (event) => {
        // Prevent default
        event.preventDefault();

        // Create item to send back to db
        let newPic = {
            path: newImage,
            description: newDescription
        };

        console.log('new pic is:', newPic);

        // Call add new pic function from app.js
        addNewPic(newPic);

        // Reset values
        setNewImage('');
        setNewDescription('');

    }


    return (
        <div className="App">

        <Typography variant="h5">Add New Photo Below</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Image URL"
                variant="outlined"
                value={newImage}
                onChange={(event) => setNewImage(event.target.value)}
            />
            <br />
            <TextField
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="Image description"
                variant="outlined"
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
            />
            <br />
            <Button variant="contained" color="primary" type="submit">
                Save
            </Button>
        </form>
    </div>
        )
};

export default GalleryForm;