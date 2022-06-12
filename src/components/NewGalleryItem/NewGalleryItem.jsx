import { useState, useEffect } from 'react';

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
        <h2>here is form</h2>
        <form action="" onSubmit={handleSubmit}>
            <input
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
            />
            <input type="submit" value="Save Item" />
        </form>
        </>
    )
   
}

export default NewGalleryItem;