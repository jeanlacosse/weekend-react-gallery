import { useState, useEffect } from 'react';

// Material UI imports
import likeBtn from '../../like-btn.png'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function GalleryItem({
    listItem, onClickLike, onClickDelete

}) {
    // set a new useState that will load on render. If false show img, if true show description
    // both img and description will have onClick to change the state value and rerender the opposite
    let [imgShowing, setImgShowing] = useState(false)

    return (
        <>

            {
                imgShowing ?
                    <div onClick={() => setImgShowing(false)}>
                        {listItem.description}
                    </div>
                    :
                    <img src={listItem.path}
                        onClick={() => setImgShowing(true)}
                    />

            }


            <Stack spacing={2}>

                <Checkbox {...label} onClick={() => { onClickLike(listItem) }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                {/* <button
                    onClick={() => { onClickLike(listItem) }}
                >
                    <img id='like-btn' src={likeBtn} alt="" />
                </button> */}
                <span id='like-count'>{listItem.likes}</span>
                <Button variant="outlined" startIcon={<DeleteIcon />}
                    onClick={() => { onClickDelete(listItem) }}
                >
                    Delete Picture
                </Button>
                {/* <button
                    onClick={() => { onClickDelete(listItem) }}
                >Delete Picture</button> */}

            </Stack>
        </>
    )
}

export default GalleryItem;
