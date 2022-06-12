import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({
    galleryList, onClickLike, onClickDelete
}) {
    return (
        <>
        <ul>
            {galleryList.map(listItem => (
                <GalleryItem 
                listItem={listItem} 
                key={listItem.id}
                onClickLike={onClickLike}
                onClickDelete={onClickDelete}
                />
            ))}
        </ul>
        </>
    )
}

export default GalleryList;