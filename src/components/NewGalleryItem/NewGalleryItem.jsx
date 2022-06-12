import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewGalleryItem({
    addGalleryItem
}) {
    const [newPath, setNewPath] = useState('')
    const [newDescription, setNewDescription] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addGalleryItem({
            path: newPath,
            description: newDescription,
        });
        clearInputFields();
    }

    const clearInputFields = () => {
        setNewPath('');
        setNewDescription('');
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="New Path" variant="outlined" size="small"
                    onChange={(evt) => setNewPath(evt.target.value)}
                    type="text"
                    placeholder='New Img Path'
                    value={newPath}
                    required
                />
                <TextField id="outlined-basic" label="Description" variant="outlined" size="small"
                    onChange={(evt) => setNewDescription(evt.target.value)}
                    type="text"
                    placeholder='Description of the Picture'
                    value={newDescription}
                    required
                />
                <Button 
                color="success"
                variant="contained"
                type="submit"
                >Save Item
                </Button>
                {/* <input
                    onChange={(evt) => setNewPath(evt.target.value)}
                    type="text"
                    placeholder='New Img Path'
                    value={newPath}
                    required
                />
                <input
                    onChange={(evt) => setNewDescription(evt.target.value)}
                    type="text"
                    placeholder='Description of the Picture'
                    value={newDescription}
                    required
                /> */}
                {/* <input type="submit" value="Save Item" /> */}
            </form>
        </>
    )

}

export default NewGalleryItem;