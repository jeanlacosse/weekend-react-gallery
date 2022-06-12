import GalleryItem from '../GalleryItem/GalleryItem';

import Grid from '@mui/material/Grid';

function GalleryList ({
    galleryList, onClickLike, onClickDelete
}) {
    return (
        <>
          <Grid container spacing={2}>
          {galleryList.map(listItem => (
              <Grid item xs={12} md={6} lg={4}>
              <GalleryItem 
                key={listItem.id}
                listItem={listItem} 
                onClickLike={onClickLike}
                onClickDelete={onClickDelete}
                />
            </Grid> 
            ))}
      </Grid>
        {/* <ul>
            {galleryList.map(listItem => (
                <GalleryItem 
                listItem={listItem} 
                key={listItem.id}
                onClickLike={onClickLike}
                onClickDelete={onClickDelete}
                />
            ))}
        </ul> */}
        </>
    )
}

export default GalleryList;