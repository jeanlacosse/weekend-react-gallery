import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({
    galleryList, onClickLike
}) {
    return (
        <>
        <ul>
            {galleryList.map(listItem => (
                <GalleryItem 
                listItem={listItem} 
                key={listItem.id}
                onClickLike={onClickLike}
                />
            ))}
        </ul>
        </>
    )
}

export default GalleryList;